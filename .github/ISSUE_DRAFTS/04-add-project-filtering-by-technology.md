# Feature: Add Project Filtering by Technology on the Projects Page

**Labels:** `enhancement`, `user-experience`

## Summary

The Projects page currently displays all projects in a fixed grid with no way to filter them. Adding technology filter buttons would let visitors quickly find projects relevant to their interests (e.g. "show me all React projects").

## Motivation

- Makes it easier for potential employers to find projects using specific technologies
- Reduces the need to scan through all cards manually
- Adds interactive functionality that demonstrates front-end skills

## Proposed Solution

1. Add a row of filter buttons above the project grid, one per unique technology extracted from `projectsData.js` plus an "All" button.
2. Store the active filter in React state.
3. Filter the displayed `solo_projects` and `hack_projects` arrays based on the selected technology.

```jsx
const [filter, setFilter] = React.useState('All');
const allTechs = ['All', ...new Set(solo_projects.flatMap(p => p.technologies))];

const filtered = filter === 'All'
    ? solo_projects
    : solo_projects.filter(p => p.technologies.includes(filter));
```

4. Style the active filter button differently so users can see which filter is applied.

**Affected files:** `src/pages/projects/Projects.js`, `src/pages/projects/Projects.css`

## Acceptance Criteria

- [ ] A row of technology filter buttons is shown above the project grids
- [ ] Clicking a technology button shows only projects using that technology
- [ ] An "All" button resets the filter and shows every project
- [ ] The currently active filter button has a distinct visual style
- [ ] The filter applies independently to the Individual and Hackathon sections
- [ ] Filtering is smooth with no full page reload
