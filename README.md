# Alternative Recruitment Edu (Asia)

Next.js (Pages Router) static website, built for upload to cPanel.

## Commands

- `npm run dev`: local development at http://localhost:3000
- `npm run build`: creates the upload-ready site in `out/`
- `npm run preview`: serves `out/` locally

## Before going live

1. `src/data/site.ts`: set the real email, phone, WhatsApp and address.
2. `public/contact.php`: set `$recipient` to the mailbox that receives enquiries.
3. `src/data/faqs.ts`: add real student reviews to `testimonials`. The section stays hidden while empty.
4. Run `npm run build` again after any change.

## Deploy to cPanel

1. Run `npm run build`.
2. Zip the **contents** of `out/`, not the folder itself. Include the hidden `.htaccess` file.
3. In cPanel File Manager, upload the zip to `public_html` and extract it.
4. Submit the contact form once to confirm that the email arrives.

The site expects to run at the domain root. For a subfolder, set `basePath` in `next.config.mjs` and update the paths in `.htaccess` and `ContactForm.tsx`.

## Where things live

- `src/styles/global.css`: Tailwind CSS setup, with all colours as CSS variables (for example `--color-primary` gives `bg-primary`)
- `src/data/`: site details, destinations, services, FAQs
- `src/pages/`: routes
- `src/components/`: `layout`, `sections` and `ui`
- `public/images/`: photos from Pexels, converted to WebP

## Destination content

Visa, intake and test details in `src/data/destinations.ts` are general guidance. Check them against official sources and review them regularly.
