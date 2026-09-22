# Mykola Zhuk — Portfolio

Personal portfolio: https://myk0laua.github.io/

A lightweight static site built with HTML and CSS. Hosted for free on GitHub Pages. No build step, paid services, or API keys are required. Google Fonts supplies the typefaces, with system font fallbacks.

## Update your website

1. Open `index.html` on GitHub and click the pencil icon to edit text, project details, or links.
2. Commit the change to `main`.
3. GitHub Pages republishes automatically, usually within a few minutes.

Layout, colors, typography, and mobile styles live in `styles.css`. The five project disclosures use native HTML `details` elements and work without JavaScript.

## Preview locally

From this folder, run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173 in your browser. Stop the server with Ctrl+C.

## Hosting

In the repository's **Settings → Pages**, set **Deploy from a branch**, branch **main**, folder **/ (root)**. The repository must be public to use GitHub Pages on a free account. `.nojekyll` makes GitHub serve the files directly.

## Content sources

Project and experience descriptions are based on the owner's supplied full CV, software-development résumé, and public GitHub repositories, reviewed September 2026:

- https://github.com/myk0laUA/Scriptorium-CSC309
- https://github.com/myk0laUA/CSC311-MLProj
- https://github.com/myk0laUA/CSC301-ProjectOllon

Metrics describe the documented project evaluations, not independent benchmarks. The financial-news project is described using the supplied CV; its private source code is not included. The original CV and phone number are not part of this site.

LinkedIn blocked automated access, so its content was not used. Education follows the software-development résumé: Honours Bachelor of Science. Scriptorium’s demo URL was supplied by the owner and checked before publication. Tacmedbat is presented as a team contribution, with its engineering details in Selected Work and a shorter employment-style entry under Experience.


## Project evidence and images

The owner supplied the Scriptorium editor, template library, and community screenshots, along with their portrait. These are stored unchanged in `assets/`. Screenshot links open the original images; replace these files when the product interface changes.

The September 22 update incorporates the owner's contribution descriptions and private project documentation. The AI pipeline is a solo client MVP demonstrated in an Azure development environment, with remaining production hardening called out. The Mistral comparison is scoped to the owner's project-specific evaluations. Private documentation, customer identifiers, resource names, and source files are not published. Scriptorium distinguishes individual template/execution work and recent OAuth additions from the wider team-built platform. Tacmedbat describes the editable-content API/admin interface tradeoff and payment/SMTP integrations without inventing performance measurements.
