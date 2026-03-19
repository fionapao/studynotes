# Study Notes

A personal static study archive hosted on GitHub Pages.

## Structure

```
studynotes/
├── index.html           — Homepage with course grid
├── about.html
├── contact.html
├── css/
│   ├── style.css        — Main styles + design tokens
│   └── responsive.css   — Breakpoints
├── js/
│   └── script.js        — Scroll animations, sidebar highlight
├── images/              — Place any images here
├── notes/
│   ├── ece110/
│   │   └── index.html
│   ├── cs225/
│   │   └── index.html
│   ├── math285/
│   │   └── index.html
│   └── cs233/
│       └── index.html
└── README.md
```

## Adding a new course

1. Create a new folder under `notes/` (e.g. `notes/cs357/`)
2. Copy an existing `index.html` from another course folder as a template
3. Update the course code, title, sidebar links, and content
4. Add a new card in the main `index.html` course grid

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main** branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Contact form

The contact page uses [Formspree](https://formspree.io) for form handling.
Replace `YOUR_FORM_ID` in `contact.html` with your own Formspree endpoint.
