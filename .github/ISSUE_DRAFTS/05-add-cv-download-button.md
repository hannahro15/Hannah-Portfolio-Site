# Feature: Add CV / Resume Download Button to the Home Page

**Labels:** `enhancement`, `user-experience`

## Summary

The Home page has call-to-action buttons for "View My Projects", "About Me", and "Get In Touch", but there is no way for visitors to download Hannah's CV/resume directly. This is a standard feature of portfolio sites and is often the first thing recruiters look for.

## Proposed Solution

1. Add a CV PDF file to the `public/` directory (e.g. `public/hannah-olbrich-cv.pdf`).
2. Add a download button to the `cta-buttons` section in `Home.js`:

```jsx
<a
    href={`${process.env.PUBLIC_URL}/hannah-olbrich-cv.pdf`}
    download="Hannah-Olbrich-CV.pdf"
    className="btn btn-secondary"
    aria-label="Download Hannah Olbrich's CV"
>
    Download CV
</a>
```

**Affected files:** `src/pages/Home/Home.js`, `public/` (add PDF)

## Acceptance Criteria

- [ ] A "Download CV" button is visible on the Home page alongside the existing CTA buttons
- [ ] Clicking the button downloads the PDF file to the user's device
- [ ] The button is styled consistently with the existing CTA buttons
- [ ] The button has an appropriate `aria-label` for accessibility
- [ ] The link works correctly on the deployed GitHub Pages site
