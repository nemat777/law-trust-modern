<!doctype html>
<html <?php language_attributes(); ?>>
<head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><?php wp_head(); ?></head>
<body <?php body_class(); ?>><?php wp_body_open(); ?>
<a class="glo-skip-link" href="#main-content">Skip to content</a>
<div class="glo-topbar"><div class="glo-container"><span class="glo-location">Park Ridge · Illinois</span><span><?php echo esc_html(gregory_law_hours()); ?></span><a href="<?php echo esc_attr('tel:' . preg_replace('/[^0-9+]/', '', gregory_law_phone())); ?>"><?php echo esc_html(gregory_law_phone()); ?></a></div></div>
<header class="glo-header"><div class="glo-container glo-header-inner">
<a class="glo-brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Gregory Law Offices, Ltd. home">
<?php if (has_custom_logo()) { the_custom_logo(); } else { ?><img class="glo-default-logo" src="<?php echo esc_url(get_template_directory_uri() . '/assets/gregory-logo.png'); ?>" alt="" width="48" height="48"><?php } ?>
<span><span class="glo-brand-name">Gregory Law Offices, Ltd.</span><span class="glo-brand-sub">Park Ridge · Illinois</span></span>
</a>
<nav class="glo-nav" aria-label="Main navigation">
<?php if (has_nav_menu('primary')) { wp_nav_menu(array('theme_location' => 'primary', 'container' => false, 'items_wrap' => '%3$s')); } else { ?>
<a href="<?php echo esc_url(home_url('/practice-areas/')); ?>">Practice Areas</a><a href="<?php echo esc_url(home_url('/about/')); ?>">About Tom</a><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a><a href="<?php echo esc_url(home_url('/client-resources/')); ?>">Client Resources</a>
<?php } ?>
</nav>
<a class="glo-button glo-header-cta" href="<?php echo esc_url(home_url('/contact/')); ?>">Start a Conversation</a>
<button class="glo-menu-toggle" type="button" aria-expanded="false" aria-controls="glo-mobile-nav"><span class="glo-menu-label">Menu</span></button>
</div>
<nav id="glo-mobile-nav" class="glo-mobile-nav" aria-label="Mobile navigation">
<a href="<?php echo esc_url(home_url('/practice-areas/')); ?>">Practice Areas</a><a href="<?php echo esc_url(home_url('/about/')); ?>">About Tom</a><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a><a href="<?php echo esc_url(home_url('/client-resources/')); ?>">Client Resources</a><a href="<?php echo esc_attr('tel:' . preg_replace('/[^0-9+]/', '', gregory_law_phone())); ?>"><?php echo esc_html(gregory_law_phone()); ?></a>
</nav></header><main id="main-content">
