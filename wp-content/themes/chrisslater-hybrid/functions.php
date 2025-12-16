<?php
/**
 * Functions and definitions
 */

// Define constants for the theme version and directory
define('CHRISSLATER_VERSION', '1.0.0');
define('CHRISSLATER_THEME_DIR', get_stylesheet_directory());
define('CHRISSLATER_THEME_URI', get_template_directory_uri());

// Includes
require_once CHRISSLATER_THEME_DIR . '/includes/product-seeder.php';


/**
 * Enqueue scripts and styles.
 */
function chrisslater_scripts() {
    $vite_server = 'http://localhost:5173';
    $vite_dist_path = '/frontend/dist';
    $is_development = (defined('WP_ENVIRONMENT_TYPE') && WP_ENVIRONMENT_TYPE === 'local');

    // If you want to rely on a file check instead of a constant:
    // $is_development = false; // logic to check if vite is running could go here, or manual switch.
    // For this setup, let's assume if the fastify/transpiler isn't found, we default to manifest, 
    // but better to explicitly set via constant or use a "hot" file check.
    
    // Quick check: if we can reach the dev server, use it? No, that's slow.
    // Let's rely on a helper function or constant.
    // For now, I'll default to searching for the manifest, if not found, assume dev?
    // Or better: Checking for a specific 'hot' file logic is common in Laravel/Vite, 
    // but here let's stick to a manual toggle or environment check.
    
    // Let's assume we use WP_ENVIRONMENT_TYPE 'local' for dev mode.
    
    if ($is_development) {
        // Enqueue Vite Client
        wp_enqueue_script('vite-client', $vite_server . '/@vite/client', [], null, true);
        
        // Enqueue Main Entry
        // Vite entry is usually at /src/main.tsx relative to the vite root
        // In our structure: frontend/src/main.tsx. 
        // Vite serves files relative to its root 'frontend'.
        wp_enqueue_script('vite-main', $vite_server . '/src/main.tsx', [], null, true);
        
        // In dev, CSS is injected by JS.
    } else {
        // Production: Parse manifest
        $manifest_path = CHRISSLATER_THEME_DIR . $vite_dist_path . '/.vite/manifest.json';
        
        if (!file_exists($manifest_path)) {
            // Fallback try legacy manifest location
             $manifest_path = CHRISSLATER_THEME_DIR . $vite_dist_path . '/manifest.json';
        }

        if (file_exists($manifest_path)) {
            $manifest = json_decode(file_get_contents($manifest_path), true);
            
            // "src/main.tsx" is the key in manifest
            $entry_key = 'src/main.tsx';
            
            if (isset($manifest[$entry_key])) {
                $entry = $manifest[$entry_key];
                
                // Enqueue JS
                $js_file = CHRISSLATER_THEME_URI . $vite_dist_path . '/' . $entry['file'];
                wp_enqueue_script('chrisslater-app', $js_file, [], CHRISSLATER_VERSION, true);
                
                // Enqueue CSS
                if (!empty($entry['css'])) {
                    foreach ($entry['css'] as $css_file) {
                        wp_enqueue_style('chrisslater-style-' . basename($css_file), CHRISSLATER_THEME_URI . $vite_dist_path . '/' . $css_file, [], CHRISSLATER_VERSION);
                    }
                }
            }
        } else {
            // Debugging: Log if manifest is missing (visible in source if WP_DEBUG is on, or check logs)
            error_log('ChrisSlater Theme: Manifest not found at ' . $manifest_path);
            
            // EMERGENCY FALLBACK: Look for any .css file in dist/assets
            $assets_dir = CHRISSLATER_THEME_DIR . $vite_dist_path . '/assets';
            if (is_dir($assets_dir)) {
                 $css_files = glob($assets_dir . '/*.css');
                 if (!empty($css_files)) {
                     $css_file_name = basename($css_files[0]);
                     wp_enqueue_style('chrisslater-fallback-style', get_stylesheet_directory_uri() . $vite_dist_path . '/assets/' . $css_file_name, [], CHRISSLATER_VERSION);
                 }
                 
                 // Fallback JS loading
                 $js_files = glob($assets_dir . '/*.js');
                 if (!empty($js_files)) {
                     $js_file_name = basename($js_files[0]);
                     wp_enqueue_script('chrisslater-app', get_stylesheet_directory_uri() . $vite_dist_path . '/assets/' . $js_file_name, [], CHRISSLATER_VERSION, true);
                 }
            }
        }
    }
    
    // Pass initial data to React
    wp_localize_script('vite-main', 'wpData', [
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteName' => get_bloginfo('name'),
        'siteUrl' => get_site_url(),
        'graphqlUrl' => site_url('/graphql'),
    ]); 
    // Also localize for the prod script handle if changed
    wp_localize_script('chrisslater-app', 'wpData', [
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteName' => get_bloginfo('name'),
        'siteUrl' => get_site_url(),
        'graphqlUrl' => site_url('/graphql'),
    ]);

}
add_action('wp_enqueue_scripts', 'chrisslater_scripts');

/**
 * Add module type to script tags for Vite
 */
function chrisslater_add_module_type($tag, $handle, $src) {
    // List of handles that need type="module"
    $module_handles = ['vite-client', 'vite-main', 'chrisslater-app'];
    
    if (in_array($handle, $module_handles)) {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
add_filter('script_loader_tag', 'chrisslater_add_module_type', 10, 3);

// Theme Support
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
add_theme_support('menus');
