# Matthew Hase-Liu — personal website

A lightweight static academic website, prepared for GitHub Pages. Its layout is inspired by the al-folio academic style while remaining plain HTML, CSS, and a small amount of JavaScript. The site contains the original seminar and teaching pages plus local copies of the PDFs that were previously served from Columbia.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish as a GitHub user site

1. Create a public repository named `<github-username>.github.io`.
2. Add this directory as the repository contents and push it to the `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. GitHub will publish the site at `https://<github-username>.github.io/`.

For a project site with a different repository name, the relative links used throughout this site will continue to work.

## Updating the site

The four main pages are `index.html`, `seminars.html`, `teaching.html`, and `writing.html`. Shared presentation is in `style.css`; seminar and course detail pages use the same stylesheet. `site.js` controls the light/dark theme and responsive navigation.

The empty `.nojekyll` file tells GitHub Pages to serve this directory as-is rather than processing it with Jekyll.
