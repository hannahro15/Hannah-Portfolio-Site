# Bug: Fix Duplicate HTML IDs in ProjectCard Component

**Labels:** `bug`, `accessibility`

## Description

The `ProjectCard` component currently assigns the same static HTML `id` attributes to elements inside every card:

- `id='project-title'`
- `id='project-status'`
- `id='project-placement'`

Because `ProjectCard` is rendered multiple times on the Projects page (once per project), the same `id` values appear on many elements simultaneously. The HTML specification requires that `id` attributes are **unique within a document**. Duplicate IDs break:

- Assistive technologies (screen readers) that navigate by landmark/ID
- CSS targeting by ID
- `document.getElementById()` calls (only the first match is returned)

**Affected file:** `src/components/ProjectCard/ProjectCard.js`

## Steps to Reproduce

1. Open the Projects page
2. Inspect the DOM in browser DevTools
3. Search for `id="project-title"` — it appears on every project card

## Expected Behaviour

Each element either has a unique `id` (e.g. using the project index or title as a suffix) or uses a `className` instead of an `id`.

## Proposed Fix

Replace the static `id` attributes with `className` attributes:

```jsx
// Before
<h3 id='project-title'>...</h3>
<p id='project-status'>...</p>
<p id='project-placement'>...</p>

// After
<h3 className='project-title'>...</h3>
<p className='project-status'>...</p>
<p className='project-placement'>...</p>
```

Update `ProjectCard.css` to target `.project-title`, `.project-status`, `.project-placement` instead of `#project-title`, etc.

## Acceptance Criteria

- [ ] No duplicate `id` attributes exist in the rendered Projects page DOM
- [ ] Visual appearance is unchanged
- [ ] CSS selectors updated to use class selectors
