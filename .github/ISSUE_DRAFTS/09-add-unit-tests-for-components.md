# Feature: Add Unit Tests for React Components

**Labels:** `testing`, `quality`

## Summary

The project currently has no test files for any of its React components or pages. Adding unit tests with React Testing Library (already listed in `package.json` dependencies) will help catch regressions and demonstrate good testing practices.

## Proposed Test Coverage

Create test files for the main components and pages:

### `src/components/Navbar/Navbar.test.js`
- Renders all four navigation links (Home, About, Projects, Contact)
- Each link points to the correct route

### `src/components/Footer/Footer.test.js`
- Renders LinkedIn and GitHub social links
- Links have correct `href` values and open in a new tab (`target="_blank"`)
- Copyright text is present

### `src/components/ProjectCard/ProjectCard.test.js`
- Renders project title, description, and technology badges
- GitHub and Live Site links are present and have correct `href` values
- Renders `status` when provided and omits it when not
- Renders `placement` when provided and omits it when not

### `src/pages/Home/Home.test.js`
- Renders the main heading "Full-Stack Developer"
- Renders all three CTA buttons/links

### `src/pages/Contact/Contact.test.js`
- Renders the contact form with Name, Email, and Message fields
- Submit button is present

## Example

```jsx
// src/components/Footer/Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders LinkedIn link', () => {
    render(<Footer />);
    const linkedInLink = screen.getByLabelText('LinkedIn Profile');
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/hannaholbrich/');
});
```

Run tests with:
```bash
npm test
```

## Acceptance Criteria

- [ ] Test files exist for `Navbar`, `Footer`, `ProjectCard`, `Home`, and `Contact`
- [ ] All tests pass with `npm test`
- [ ] Tests cover the main rendered output and key props
- [ ] No existing functionality is changed to make tests pass
