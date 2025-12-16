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
    
    // Auto-detect dev mode if local, otherwise prod
    $is_development = (defined('WP_ENVIRONMENT_TYPE') && WP_ENVIRONMENT_TYPE === 'local');

    if ($is_development) { 
        // ... (Dev logic remains if needed, but we are fixing prod)
        wp_enqueue_script('vite-client', $vite_server . '/@vite/client', [], null, true);
        wp_enqueue_script('vite-main', $vite_server . '/src/main.tsx', [], null, true);
    } else {
        // PRODUCTION MODE
        // 1. Try modern Vite 5 manifest location
        $manifest_path = CHRISSLATER_THEME_DIR . $vite_dist_path . '/.vite/manifest.json';
        
        if (file_exists($manifest_path)) {
            $manifest = json_decode(file_get_contents($manifest_path), true);
            $entry = $manifest['src/main.tsx'] ?? null;
            
            if ($entry) {
                // Enqueue Main JS
                $js_url = CHRISSLATER_THEME_URI . $vite_dist_path . '/' . $entry['file'];
                wp_enqueue_script('chrisslater-app', $js_url, [], CHRISSLATER_VERSION, true);
                
                // Enqueue Main CSS
                if (!empty($entry['css'])) {
                    foreach ($entry['css'] as $css_file) {
                        $css_url = CHRISSLATER_THEME_URI . $vite_dist_path . '/' . $css_file;
                        wp_enqueue_style('chrisslater-style', $css_url, [], CHRISSLATER_VERSION);
                    }
                }
            }
        } else {
             // FALLBACK: If manifest is unreadable (e.g. .vite permissions), scan assets dir
             $assets_dir = CHRISSLATER_THEME_DIR . $vite_dist_path . '/assets';
             
             if (is_dir($assets_dir)) {
                 // Load first .css found
                 $css_files = glob($assets_dir . '/*.css');
                 if (!empty($css_files)) {
                     $css_file_name = basename($css_files[0]);
                     wp_enqueue_style('chrisslater-fallback-style', CHRISSLATER_THEME_URI . $vite_dist_path . '/assets/' . $css_file_name, [], CHRISSLATER_VERSION);
                 }
                 
                 // Load first .js found
                 $js_files = glob($assets_dir . '/*.js');
                 if (!empty($js_files)) {
                     $js_file_name = basename($js_files[0]);
                     wp_enqueue_script('chrisslater-app', CHRISSLATER_THEME_URI . $vite_dist_path . '/assets/' . $js_file_name, [], CHRISSLATER_VERSION, true);
                 }
             }
        }
    }
    
    // Localize Data
    $data = [
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteName' => get_bloginfo('name'),
        'graphqlUrl' => site_url('/graphql'),
    ];
    
    wp_localize_script('vite-main', 'wpData', $data);
    wp_localize_script('chrisslater-app', 'wpData', $data);
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
