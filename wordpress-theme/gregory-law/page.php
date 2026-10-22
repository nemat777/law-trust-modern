<?php
get_header();
if (have_posts()) :
    while (have_posts()) : the_post();
        if (is_page('contact')) :
            $status = isset($_GET['contact']) ? sanitize_key(wp_unslash($_GET['contact'])) : '';
?>
<section class="glo-page-hero"><div class="glo-container"><p class="glo-eyebrow">Contact</p><h1><?php the_title(); ?></h1><p class="glo-lead"><?php echo esc_html(get_the_excerpt() ?: 'Call the office or send a brief message about the matter you would like to discuss.'); ?></p></div></section>
<section class="glo-section"><div class="glo-container glo-contact-layout">
<div class="glo-contact-cards">
<a class="glo-contact-card" href="<?php echo esc_attr('tel:' . preg_replace('/[^0-9+]/', '', gregory_law_phone())); ?>"><span class="glo-eyebrow">Call the office</span><strong><?php echo esc_html(gregory_law_phone()); ?></strong></a>
<a class="glo-contact-card" href="<?php echo esc_attr('mailto:' . gregory_law_email()); ?>"><span class="glo-eyebrow">Email</span><strong><?php echo esc_html(gregory_law_email()); ?></strong></a>
<a class="glo-contact-card" target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=<?php echo rawurlencode(gregory_law_address()); ?>"><span class="glo-eyebrow">Office</span><strong><?php echo esc_html(gregory_law_address()); ?></strong></a>
<p class="glo-disclaimer">Submitting this form does not create an attorney-client relationship. Please do not include confidential or time-sensitive information.</p>
</div>
<div class="glo-form-panel">
<?php if ($status === 'sent') : ?><div class="glo-form-notice" role="status"><h2>Thank you for reaching out.</h2><p>Your message was submitted. Please note that email delivery should be tested on the hosting account before the site launches.</p></div>
<?php elseif ($status === 'error') : ?><p class="glo-form-alert" role="alert">We could not send your message just now. Please call the office or try again later.</p>
<?php elseif ($status === 'invalid') : ?><p class="glo-form-alert" role="alert">Please check your name, email address, and message, then try again.</p><?php endif; ?>
<h2>Request a consultation</h2><p>Tell us a little about what you need. The office can follow up to discuss next steps.</p>
<form class="glo-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
<input type="hidden" name="action" value="gregory_law_contact"><?php wp_nonce_field('gregory_law_contact', 'gregory_law_contact_nonce'); ?>
<label for="contact-name">Full name</label><input id="contact-name" name="contact_name" type="text" autocomplete="name" required>
<label for="contact-phone">Phone</label><input id="contact-phone" name="contact_phone" type="tel" autocomplete="tel">
<label for="contact-email">Email</label><input id="contact-email" name="contact_email" type="email" autocomplete="email" required>
<label for="contact-practice">Practice area</label><select id="contact-practice" name="contact_practice"><option value="">Select an area (optional)</option><option>Business</option><option>Mergers and Acquisitions</option><option>Real Estate</option><option>Estate Planning</option><option>Probate</option><option>Civil Litigation</option><option>Injury Law</option><option>Other</option></select>
<label for="contact-message">Briefly describe your matter</label><textarea id="contact-message" name="contact_message" rows="5" required></textarea>
<button class="glo-button" type="submit">Send request →</button>
</form></div></div></section>
<?php else : ?>
<section class="glo-page-hero"><div class="glo-container"><p class="glo-eyebrow"><?php echo esc_html(get_the_title()); ?></p><h1><?php the_title(); ?></h1><?php if (has_excerpt()) : ?><p class="glo-lead"><?php echo esc_html(get_the_excerpt()); ?></p><?php endif; ?></div></section>
<section class="glo-content"><div class="glo-container glo-prose"><?php the_content(); ?></div></section>
<?php endif; endwhile; endif; get_footer(); ?>
