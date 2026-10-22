# Gregory Law Offices — IONOS WordPress theme

This is a custom classic WordPress theme based on the current Gregory Law Offices website design. It is being prepared on the separate `wordpress-custom-theme` branch. The Cloudflare-hosted website and `modern-welcoming-refresh` branch have not been changed by these theme edits.

## What is included

- Responsive header, mobile menu, footer, homepage, standard page template, practice-area detail pages, and practice-area archive.
- Brand colors, serif/sans-serif typography, section cards, calls to action, and responsive styling inspired by the existing site.
- Editable WordPress Practice Areas content type, including title, description, excerpt, featured image, and display order.
- Customizer fields for office phone, email, address, hours, homepage headline, and homepage introduction.
- A contact form template that submits through WordPress mail. **Mail delivery is not confirmed**; it must be tested with IONOS and configured SMTP if needed before launch.
- The theme uses the homepage's featured image for the attorney portrait. Upload the firm's approved portrait and logo into WordPress Media Library; set the logo through **Appearance → Customize → Site Identity** and set the portrait as the Home page's featured image.

## Installation — when the IONOS hosting plan is confirmed compatible

1. Download the `wordpress-theme/gregory-law` folder from this branch.
2. Zip the contents so `style.css`, `functions.php`, `header.php`, and the other theme files sit directly at the ZIP root (not inside an extra nested folder).
3. In the WordPress dashboard, go to **Appearance → Themes → Add New Theme → Upload Theme**, upload the ZIP, and activate it on a staging site first.
4. Under **Appearance → Customize → Site Identity**, set the site title and upload the official logo. Set the Home page's featured image to the approved attorney portrait.
5. Under **Appearance → Customize → Gregory Law Contact & Homepage**, verify the phone, email, address, office hours, homepage headline, and intro.
6. Under **Pages**, create pages for Home, Practice Areas, About, Contact, Client Resources, Business, Real Estate, Estate Planning, Probate, and Civil Litigation as appropriate. Set the Home page under **Settings → Reading**.
7. Add practice-area entries in the new **Practice Areas** dashboard section. Enter the actual page copy and excerpts; use page ordering to control display order.
8. Create a navigation menu under **Appearance → Menus** and assign it to **Primary Navigation**.
9. Under **Settings → Permalinks**, select **Post name** and save. Confirm the practice area URLs do not conflict with regular pages.
10. Test the contact form end-to-end and confirm messages reach the firm's inbox. If they do not, configure a reputable SMTP plugin/provider and retest.
11. Compare every page against the current public site, check mobile and desktop layouts, confirm client-resource/payment destinations, add SEO metadata, and test all links before changing the domain or DNS.

## Important limitations before launch

This is a working theme foundation, not yet a verified pixel-perfect migration. The theme styling and primary templates have been developed, but WordPress page content still has to be entered and compared with the current site. The original logo and attorney portrait are not embedded in the theme package; upload the firm's approved assets in WordPress. The contact form depends on the host's mail delivery and has not been tested against the firm's inbox. Existing client-resource/payment integrations, SEO settings, redirects, analytics, and domain/DNS migration must be checked separately.

Do not turn off the current Cloudflare-hosted site or change DNS until the WordPress version is installed, reviewed, and tested. No live hosting or DNS settings have been changed by these theme edits.
