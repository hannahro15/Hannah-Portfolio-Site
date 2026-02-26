# Feature: Add a "Back to Top" Button on the Projects Page

**Labels:** `enhancement`, `user-experience`

## Summary

The Projects page displays 14 project cards across two sections, requiring significant scrolling. A "Back to Top" button that appears after the user has scrolled down would make navigation much more convenient.

## Proposed Solution

Create a reusable `BackToTop` component that:

1. Listens to the `window.scroll` event.
2. Becomes visible once the user has scrolled more than ~300 px.
3. Smoothly scrolls the page back to the top on click.

```jsx
// src/components/BackToTop/BackToTop.js
import { useState, useEffect } from 'react';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            ↑ Top
        </button>
    );
}

export default BackToTop;
```

Use the component inside `Projects.js` (and optionally other long pages).

**Affected files:** `src/components/BackToTop/BackToTop.js` (new), `src/components/BackToTop/BackToTop.css` (new), `src/pages/projects/Projects.js`

## Acceptance Criteria

- [ ] The button is hidden when the user is at or near the top of the page
- [ ] The button appears after scrolling ~300 px down
- [ ] Clicking the button scrolls smoothly back to the top
- [ ] The button is positioned fixed at the bottom-right of the viewport
- [ ] The button has an `aria-label` for screen reader accessibility
- [ ] The button is visible on both desktop and mobile
