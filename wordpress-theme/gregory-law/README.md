# Gregory Law Offices — WordPress custom theme

This is the initial custom-theme scaffold for Option A: moving the existing React/TanStack Start site into a traditional WordPress theme. It lives on the separate `wordpress-custom-theme` branch; the current Cloudflare Pages site and `modern-welcoming-refresh` branch are untouched.

## Install in a WordPress staging site
1. Download this `gregory-law` folder from the `wordpress-custom-theme` branch and ZIP the folder itself (the ZIP should contain `style.css`, `functions.php`, `header.php`, etc. at its root).
2. In WordPress, open **Appearance → Themes → Add New Theme → Upload Theme** and upload the ZIP.
3. Activate only in staging first. Do not switch the live domain yet.
4. Set the logo under **Appearance → Customize → Site Identity**.
5. Verify phone, address, office hours, homepage headline, and homepage intro under **Appearance → Customize → Gregory Law Contact Details**.
6. Create a navigation menu under **Appearance → Menus** and assign it to **Primary Navigation**.
7. Add practice area entries using the **Practice Areas** dashboard menu. Create regular pages for About Tom, Contact, Client Resources, Business, Real Estate, Estate Planning, Probate, and Civil Litigation as appropriate.
8. Set **Settings → Permalinks → Post name**, then save.

## Current status — not production-ready
This is a starter theme, not a completed pixel-perfect migration. It establishes a responsive visual system, shared header/footer, homepage starter layout, ordinary page templates, and editable practice-area content. The existing React route content and all original section-level layouts have not yet been fully ported; the homepage copy is provisional. The logo must be uploaded via WordPress Site Identity. The client-resource/payment link and contact form must be recreated and tested, and all URLs, SEO metadata, mobile layouts, and content must be compared with the current site before launch.

Keep Cloudflare Pages online until the WordPress staging site has been reviewed and verified. No domain, DNS, or live hosting settings have been changed by this theme scaffold.
