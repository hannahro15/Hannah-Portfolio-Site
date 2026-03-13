# Feature: Add Dark Mode Toggle

**Labels:** `enhancement`, `user-experience`, `accessibility`

## Summary

The portfolio currently uses a fixed light colour scheme. Adding a dark mode toggle lets visitors choose their preferred theme, which is especially appreciated by developers who typically work in dark-themed editors.

## Proposed Solution

### 1 — Store theme preference in `localStorage`

```jsx
const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
);

useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}, [darkMode]);
```

### 2 — Add a toggle button to the Navbar

```jsx
<button
    className="theme-toggle"
    onClick={() => setDarkMode(prev => !prev)}
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
    {darkMode ? '☀️' : '🌙'}
</button>
```

### 3 — Define CSS variables for both themes in `index.css`

```css
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --card-bg: #ffffff;
    --navbar-bg: lightgrey;
}

body.dark-mode {
    --bg-color: #1a1a2e;
    --text-color: #e0e0e0;
    --card-bg: #16213e;
    --navbar-bg: #0f3460;
}
```

Replace hard-coded colour values across component CSS files with `var(--...)` references.

**Affected files:** `src/App.js`, `src/index.css`, `src/components/Navbar/Navbar.js`, `src/components/Navbar/Navbar.css`, and other component CSS files.

## Acceptance Criteria

- [ ] A toggle button (moon/sun icon) is visible in the Navbar
- [ ] Clicking the toggle switches the entire site between light and dark themes
- [ ] The chosen preference is persisted in `localStorage` across page refreshes
- [ ] All pages and components (cards, forms, footer, navbar) respect the chosen theme
- [ ] The toggle button has an accessible `aria-label` that reflects the current state
- [ ] Sufficient colour contrast is maintained in both modes (WCAG AA)
