# Feature: Add a 404 Not Found Page

**Labels:** `enhancement`, `user-experience`

## Summary

The application currently has no route handler for unknown URLs. If a visitor navigates to a path that doesn't exist (e.g. `/typo`, `/old-page`), they see a blank page with no navigation or explanation.

## Motivation

A custom 404 page:
- Keeps users on the site instead of leaving in confusion
- Provides navigation links to help them find what they're looking for
- Gives the site a more polished, professional feel

## Proposed Solution

1. Create a new `NotFound` page component at `src/pages/NotFound/NotFound.js` and `NotFound.css`
2. Add a catch-all route in `App.js`:

```jsx
<Route path="*" element={<NotFound />} />
```

3. The page should display:
   - A friendly "404 – Page Not Found" heading
   - A short message explaining the page doesn't exist
   - A link/button back to the Home page

## Acceptance Criteria

- [ ] Navigating to any unknown URL renders the `NotFound` component
- [ ] The page includes a link back to `/` (Home)
- [ ] The Navbar and Footer are still visible on the 404 page
- [ ] The page title updates to `"404 - Page Not Found | Hannah Olbrich"`
- [ ] The design is consistent with the rest of the site
