<?php get_header(); if (have_posts()) : while (have_posts()) : the_post(); ?>
<section class="glo-page-hero"><div class="glo-container"><p class="glo-eyebrow">Practice Area</p><h1><?php the_title(); ?></h1><?php if (has_excerpt()) : ?><p class="glo-lead"><?php echo esc_html(get_the_excerpt()); ?></p><?php endif; ?></div></section>
<section class="glo-content"><div class="glo-container glo-prose"><?php if (has_post_thumbnail()) { the_post_thumbnail('large'); } the_content(); ?></div></section>
<section class="glo-cta"><div class="glo-container glo-cta-inner"><div><p class="glo-eyebrow">Have a legal question?</p><h2>Talk with Gregory Law Offices.</h2><p>Call the office or send a brief message to discuss next steps.</p></div><a class="glo-button" href="<?php echo esc_url(home_url('/contact/')); ?>">Start a Conversation →</a></div></section>
<?php endwhile; endif; get_footer(); ?>
