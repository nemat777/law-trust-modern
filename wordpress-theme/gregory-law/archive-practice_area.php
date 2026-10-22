<?php get_header(); ?>
<section class="glo-page-hero"><div class="glo-container"><p class="glo-eyebrow">How We Help</p><h1>Practice Areas</h1><p class="glo-lead">Focused legal guidance for Illinois businesses, property owners, and families.</p></div></section>
<section class="glo-section"><div class="glo-container"><div class="glo-grid glo-practice-grid">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<a class="glo-card" href="<?php the_permalink(); ?>"><?php if (has_post_thumbnail()) { the_post_thumbnail('medium'); } ?><span class="glo-card-kicker">Practice Area</span><h3><?php the_title(); ?></h3><p><?php echo esc_html(get_the_excerpt() ?: wp_trim_words(wp_strip_all_tags(get_the_content()), 24)); ?></p><span class="glo-card-link">Explore practice area →</span></a>
<?php endwhile; else : ?><p>Practice areas will appear here once they have been added in WordPress.</p><?php endif; ?>
</div><div class="glo-pagination"><?php the_posts_pagination(array('mid_size'=>1,'prev_text'=>'← Previous','next_text'=>'Next →')); ?></div></div></section>
<?php get_footer(); ?>
