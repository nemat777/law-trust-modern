<?php
if (!defined('ABSPATH')) { exit; }

function gregory_law_setup() {
    load_theme_textdomain('gregory-law', get_template_directory() . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array('height' => 106, 'width' => 102, 'flex-height' => true, 'flex-width' => true));
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array('primary' => __('Primary Navigation', 'gregory-law')));
}
add_action('after_setup_theme', 'gregory_law_setup');

function gregory_law_assets() {
    wp_enqueue_style('gregory-law-fonts', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap', array(), null);
    wp_enqueue_style('gregory-law-style', get_stylesheet_uri(), array('gregory-law-fonts'), wp_get_theme()->get('Version'));
    wp_enqueue_script('gregory-law-navigation', get_template_directory_uri() . '/assets/navigation.js', array(), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'gregory_law_assets');

function gregory_law_register_content() {
    register_post_type('practice_area', array(
        'labels' => array('name' => __('Practice Areas', 'gregory-law'), 'singular_name' => __('Practice Area', 'gregory-law'), 'add_new_item' => __('Add Practice Area', 'gregory-law'), 'edit_item' => __('Edit Practice Area', 'gregory-law')),
        'public' => true, 'has_archive' => true, 'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'practice-areas'), 'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes')
    ));
}
add_action('init', 'gregory_law_register_content');

function gregory_law_customize_register($wp_customize) {
    $wp_customize->add_section('gregory_law_contact', array('title' => __('Gregory Law Contact & Homepage', 'gregory-law'), 'priority' => 30));
    $settings = array(
        'gregory_law_phone' => array('Office phone', '(847) 692-9900'),
        'gregory_law_email' => array('Office email', 'tom@gregorylawoffices.com'),
        'gregory_law_address' => array('Office address', '1410 Higgins Road, Suite 204, Park Ridge, IL 60068'),
        'gregory_law_hours' => array('Office hours', 'Monday–Friday, 8:30 am–5:00 pm'),
        'gregory_law_home_headline' => array('Homepage headline', 'Good legal counsel should feel personal.'),
        'gregory_law_home_intro' => array('Homepage introduction', 'Gregory Law Offices helps Illinois businesses, property owners, and families navigate important legal decisions with experienced advice, direct communication, and a clear path forward.'),
    );
    foreach ($settings as $id => $setting) {
        $wp_customize->add_setting($id, array('default' => $setting[1], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control($id, array('label' => __($setting[0], 'gregory-law'), 'section' => 'gregory_law_contact', 'type' => 'text'));
    }
}
add_action('customize_register', 'gregory_law_customize_register');

function gregory_law_phone() { return get_theme_mod('gregory_law_phone', '(847) 692-9900'); }
function gregory_law_email() { return sanitize_email(get_theme_mod('gregory_law_email', 'tom@gregorylawoffices.com')); }
function gregory_law_address() { return get_theme_mod('gregory_law_address', '1410 Higgins Road, Suite 204, Park Ridge, IL 60068'); }
function gregory_law_hours() { return get_theme_mod('gregory_law_hours', 'Monday–Friday, 8:30 am–5:00 pm'); }

/* Send the contact form through WordPress. Mail delivery must be tested on the hosting account before launch. */
function gregory_law_handle_contact_form() {
    if (!isset($_POST['gregory_law_contact_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['gregory_law_contact_nonce'])), 'gregory_law_contact')) {
        wp_die(esc_html__('The form security check failed. Please go back and try again.', 'gregory-law'));
    }
    $name = isset($_POST['contact_name']) ? sanitize_text_field(wp_unslash($_POST['contact_name'])) : '';
    $phone = isset($_POST['contact_phone']) ? sanitize_text_field(wp_unslash($_POST['contact_phone'])) : '';
    $email = isset($_POST['contact_email']) ? sanitize_email(wp_unslash($_POST['contact_email'])) : '';
    $practice = isset($_POST['contact_practice']) ? sanitize_text_field(wp_unslash($_POST['contact_practice'])) : '';
    $message = isset($_POST['contact_message']) ? sanitize_textarea_field(wp_unslash($_POST['contact_message'])) : '';
    if (!$name || !$email || !is_email($email) || !$message) {
        wp_safe_redirect(add_query_arg('contact', 'invalid', wp_get_referer() ?: home_url('/contact/')));
        exit;
    }
    $to = gregory_law_email();
    $subject = 'Website contact request — ' . $name;
    $body = "Name: {$name}\nPhone: {$phone}\nEmail: {$email}\nPractice area: {$practice}\n\nMessage:\n{$message}\n\nSubmitting this form does not create an attorney-client relationship.";
    $headers = array('Reply-To: ' . $name . ' <' . $email . '>');
    $sent = wp_mail($to, $subject, $body, $headers);
    wp_safe_redirect(add_query_arg('contact', $sent ? 'sent' : 'error', wp_get_referer() ?: home_url('/contact/')));
    exit;
}
add_action('admin_post_nopriv_gregory_law_contact', 'gregory_law_handle_contact_form');
add_action('admin_post_gregory_law_contact', 'gregory_law_handle_contact_form');
