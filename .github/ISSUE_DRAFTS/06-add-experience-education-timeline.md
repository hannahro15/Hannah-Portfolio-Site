# Feature: Add Work Experience / Education Timeline to the About Page

**Labels:** `enhancement`, `content`

## Summary

The About page currently contains bio text and a skills list, but has no dedicated work experience or education section. Adding a timeline of education and employment history would give visitors (especially recruiters) a clearer picture of Hannah's background at a glance.

## Proposed Solution

Add a new "Experience & Education" section to `About.js` beneath the Technical Skills section, rendered as a vertical timeline:

```jsx
<h2 className="about-heading">Experience & Education</h2>
<ul className="timeline">
    <li>
        <span className="timeline-date">Jan 2024 – Dec 2024</span>
        <strong>Level 5 Web Development Diploma</strong> — Code Institute
        <p>Awarded a Pass in January 2025. Covered full-stack web development ...</p>
    </li>
    {/* Additional entries */}
</ul>
```

Style the timeline in `About.css` with a vertical line and date markers.

**Affected files:** `src/pages/About/About.js`, `src/pages/About/About.css`

## Acceptance Criteria

- [ ] An "Experience & Education" section is visible on the About page
- [ ] Entries are displayed in reverse-chronological order (most recent first)
- [ ] Each entry shows: date range, role/qualification title, organisation, and a short description
- [ ] The section is responsive and readable on mobile devices
- [ ] Design is consistent with the existing About page styling
