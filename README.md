# Alternative Recruitment — Next.js 16 (Pages Router)

TypeScript + `src/` folder. Static site, exported with `output: 'export'` so it can be hosted on any cPanel / Apache account (no Node.js needed).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript check
```

## Build & upload to cPanel

1. Set the email address that receives the contact form in `public/send-mail.php` (`$to = ...`).
2. Run `npm run build`. The finished site is written to the **`out/`** folder.
3. Zip the **contents** of `out/` (not the folder itself), including the hidden `.htaccess` file.
4. In cPanel, open **File Manager → public_html**, upload the zip and **Extract** it.
5. If SSL is not active yet, comment out the two HTTPS lines in `.htaccess`.

`npm start` serves `out/` locally so you can preview the production build.

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, menu, stats, testimonials | `src/data/site.ts` |
| Destinations (cards, detail pages, additional European list) | `src/data/destinations.ts` |
| Home benefits, audiences, services, language courses, partner advantages, About framework & principles | `src/data/services.ts` |
| Images (Pexels photo IDs) | `src/data/images.ts` |
| Styles | `src/styles/globals.css` |

## Pages

`/` · `/about/` · `/services/` · `/destinations/` · `/destinations/<country>/` · `/partner-program/` · `/contact/` · `/privacy-policy/` · `/terms-of-service/` · `/student-compliance-gdpr/` · `404`

Contact form: posts to `/send-mail.php`, which uses PHP `mail()` on cPanel. In `npm run dev` there is no PHP, so the form shows its error message there.

Images: all photos come from [Pexels](https://www.pexels.com) and are loaded from the Pexels CDN.
