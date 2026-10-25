# Mykola Zhuk | Portfolio

Personal portfolio: https://myk0laua.github.io/

Static HTML and CSS, served by GitHub Pages. No build step or production JavaScript is required.

## Local preview

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. The page follows the system light/dark preference and respects reduced motion.

## Content and assets

- Keep the CV at `assets/Mykola-Zhuk-CV.pdf` so existing download links continue to work.
- Talk to a Document links to its [live app](https://talk-to-document-4pre.onrender.com/) and [repository](https://github.com/myk0laUA/talk_to_YTVideo-and-PDF). Its preview is a screenshot of the public app, captured October 24, 2026.
- Project claims come from the supplied CV and project repositories. Existing engineering write-ups remain in native HTML disclosures.
- The portrait has an optimized WebP copy for the hero; the original PNG is retained.
- DM Sans and Manrope are self-hosted Latin variable fonts from Google Fonts. Their SIL Open Font Licenses are included in `assets/fonts/`.

Before publishing, check the navigation anchors, CV downloads, project disclosures, and layouts at mobile/tablet/desktop widths in both color schemes.

## Stylesheet updates

GitHub Pages caches static assets. After editing `styles.css`, run:

```sh
node scripts/version-styles.mjs
node scripts/version-styles.mjs --check
```

Commit the updated `index.html` alongside the stylesheet. The content-based URL version prevents returning visitors from loading the previous design's cached CSS with the new HTML. The script uses only Node built-ins; the deployed site still needs no build step or JavaScript.

