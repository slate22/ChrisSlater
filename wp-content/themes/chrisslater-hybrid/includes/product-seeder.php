<?php
/**
 * Auto-creates default products for the shop if they don't exist.
 */

function chrisslater_create_audit_products() {
    if (!class_exists('WC_Product_Simple')) return;

    $products = [
        [
            'title' => 'AI Search Visibility (GEO) Audit',
            'desc' => 'How does your brand appear in Perplexity, SearchGPT, and Gemini? This comprehensive audit analyzes your "Generative Engine Optimization" status. We identify gaps in your content strategy that prevent AI models from citing you as an authority. Includes a 15-page PDF report and a 30-minute video walkthrough.',
            'price' => '499',
            'sku'   => 'GEO-AUDIT-001'
        ],
        [
            'title' => 'Technical SEO Foundation Audit',
            'desc' => 'A deep dive into the nuts and bolts of your website. We analyze crawlability, indexability, schema markup, and Core Web Vitals. This audit ensures that both traditional search engines and AI crawlers can effortlessly parse and understand your data structure. Perfect for React/Headless setups.',
            'price' => '750',
            'sku'   => 'TECH-SEO-001'
        ],
        [
            'title' => 'AI-Driven Content Strategy Blueprint',
            'desc' => 'Stop writing for 2015. This blueprint maps out a content strategy designed for the AI Era. We provide a 6-month topical map, entity relationship guide, and content briefs optimized for large language models (LLMs). Dominate the semantic web.',
            'price' => '1200',
            'sku'   => 'AI-CONTENT-001'
        ]
    ];

    foreach ($products as $p) {
        $product_id = wc_get_product_id_by_sku($p['sku']);
        
        if (!$product_id) {
            $product = new WC_Product_Simple();
            $product->set_name($p['title']);
            $product->set_slug(sanitize_title($p['title']));
            $product->set_description($p['desc']);
            $product->set_short_description(substr($p['desc'], 0, 150) . '...');
            $product->set_regular_price($p['price']);
            $product->set_sku($p['sku']);
            $product->set_status('publish');
            $product->set_catalog_visibility('visible');
            
            // Set a default image if available (using a placeholder ID if known, otherwise skipping)
             // $product->set_image_id(123); 
             
            $product->save();
        }
    }
}

// Run on admin init (only once ideally, but this check is safe)
add_action('admin_init', 'chrisslater_create_audit_products');
