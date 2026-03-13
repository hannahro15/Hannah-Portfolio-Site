# Enhancement: Improve SEO with Meta Description and Open Graph Tags

**Labels:** `enhancement`, `SEO`

## Summary

`public/index.html` currently has only a basic `<title>` tag and a generic description. Adding proper SEO meta tags and Open Graph (OG) tags will improve search engine ranking and make links shared on social media look professional with a preview card.

## Proposed Changes in `public/index.html`

```html
<!-- Primary SEO -->
<meta name="description" content="Hannah Olbrich – Full-Stack Developer based in Manchester. Portfolio showcasing React, Django, Python and JavaScript projects." />
<meta name="keywords" content="Hannah Olbrich, Full Stack Developer, React, Django, Python, JavaScript, Manchester, Portfolio" />
<meta name="author" content="Hannah Olbrich" />

<!-- Open Graph / social sharing -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://hannahro15.github.io/Hannah-Portfolio-Site/" />
<meta property="og:title" content="Hannah Olbrich – Full-Stack Developer" />
<meta property="og:description" content="Portfolio of Hannah Olbrich, a Full-Stack Developer based in Manchester, specialising in React, Django, and Python." />
<meta property="og:image" content="https://hannahro15.github.io/Hannah-Portfolio-Site/images/portfolio-site.webp" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Hannah Olbrich – Full-Stack Developer" />
<meta name="twitter:description" content="Portfolio of Hannah Olbrich, Full-Stack Developer, Manchester." />
<meta name="twitter:image" content="https://hannahro15.github.io/Hannah-Portfolio-Site/images/portfolio-site.webp" />
```

**Affected file:** `public/index.html`

## Acceptance Criteria

- [ ] `<meta name="description">` is present and accurately describes the site
- [ ] Open Graph tags are present (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter Card tags are present
- [ ] Sharing the site URL on LinkedIn / Twitter / Slack shows a rich preview card
- [ ] Google Search Console (if set up) reports no missing description warnings
