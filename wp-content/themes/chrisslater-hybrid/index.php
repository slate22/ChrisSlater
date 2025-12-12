<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php 
    // Manual SEO Pre-rendering logic
    // Usually plugins like Yoast/RankMath handle this via wp_head(), but per requirements:
    
    $seo_title = get_bloginfo('name');
    $seo_desc = get_bloginfo('description');
    $seo_image = ''; // Default image path
    
    if (is_singular()) {
        $seo_title = get_the_title() . ' - ' . get_bloginfo('name');
        if (has_excerpt()) {
            $seo_desc = get_the_excerpt();
        } else {
            // fallback to first chars of content
             $post = get_post();
             $seo_desc = wp_trim_words( $post->post_content, 20 );
        }
        if (has_post_thumbnail()) {
            $seo_image = get_the_post_thumbnail_url(null, 'large');
        }
    }
    ?>
    
    <title><?php echo esc_html($seo_title); ?></title>
    <meta name="description" content="<?php echo esc_attr($seo_desc); ?>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo esc_attr($seo_title); ?>">
    <meta property="og:description" content="<?php echo esc_attr($seo_desc); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
    <?php if ($seo_image): ?>
    <meta property="og:image" content="<?php echo esc_url($seo_image); ?>">
    <?php endif; ?>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="root" class="min-h-screen">
        <!-- No-JS Fallback / Basic Content for basic crawlers -->
        <div class="no-js-content" style="display:none;">
            <?php
            if ( have_posts() ) {
                while ( have_posts() ) {
                    the_post();
                    echo '<h1>' . get_the_title() . '</h1>';
                    the_content();
                }
            }
            ?>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>
