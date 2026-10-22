<?php
if (!defined('ABSPATH')) { exit; }
function gregory_law_setup() {
 add_theme_support('title-tag'); add_theme_support('post-thumbnails');
 add_theme_support('custom-logo', array('height'=>106,'width'=>102,'flex-height'=>true,'flex-width'=>true));
 add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption','style','script'));
 register_nav_menus(array('primary'=>__('Primary Navigation','gregory-law')));
}
add_action('after_setup_theme','gregory_law_setup');
function gregory_law_assets() {
 wp_enqueue_style('gregory-law-fonts','https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap',array(),null);
 wp_enqueue_style('gregory-law-style',get_stylesheet_uri(),array('gregory-law-fonts'),wp_get_theme()->get('Version'));
 wp_enqueue_script('gregory-law-navigation',get_template_directory_uri().'/assets/navigation.js',array(),wp_get_theme()->get('Version'),true);
}
add_action('wp_enqueue_scripts','gregory_law_assets');
function gregory_law_register_content() {
 register_post_type('practice_area',array('labels'=>array('name'=>__('Practice Areas','gregory-law'),'singular_name'=>__('Practice Area','gregory-law'),'add_new_item'=>__('Add Practice Area','gregory-law'),'edit_item'=>__('Edit Practice Area','gregory-law')),'public'=>true,'has_archive'=>true,'menu_icon'=>'dashicons-portfolio','rewrite'=>array('slug'=>'practice-areas'),'show_in_rest'=>true,'supports'=>array('title','editor','excerpt','thumbnail','page-attributes')));
}
add_action('init','gregory_law_register_content');
function gregory_law_customize_register($wp_customize) {
 $wp_customize->add_section('gregory_law_contact',array('title'=>__('Gregory Law Contact Details','gregory-law'),'priority'=>30));
 $settings=array('gregory_law_phone'=>array('Phone','(847) 692-9900'),'gregory_law_address'=>array('Office address','1410 Higgins Road, Suite 204, Park Ridge, IL 60068'),'gregory_law_hours'=>array('Office hours','Monday–Friday, 8:30 am–5:00 pm'),'gregory_law_home_headline'=>array('Homepage headline','Thoughtful legal counsel for business, property, and family.'),'gregory_law_home_intro'=>array('Homepage introduction','Practical guidance and experienced representation for the decisions that matter most.'));
 foreach($settings as $id=>$setting){$wp_customize->add_setting($id,array('default'=>$setting[1],'sanitize_callback'=>'sanitize_text_field'));$wp_customize->add_control($id,array('label'=>__($setting[0],'gregory-law'),'section'=>'gregory_law_contact','type'=>'text'));}
}
add_action('customize_register','gregory_law_customize_register');
function gregory_law_phone(){return get_theme_mod('gregory_law_phone','(847) 692-9900');}
function gregory_law_address(){return get_theme_mod('gregory_law_address','1410 Higgins Road, Suite 204, Park Ridge, IL 60068');}
function gregory_law_hours(){return get_theme_mod('gregory_law_hours','Monday–Friday, 8:30 am–5:00 pm');}
