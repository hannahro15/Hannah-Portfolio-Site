# Feature: Add Responsive Hamburger Menu for Mobile Navigation

**Labels:** `enhancement`, `responsive-design`, `accessibility`

## Summary

On small screens (≤ 600 px) the navbar currently stacks links vertically, but there is no collapsible hamburger menu. This takes up significant vertical space and is not the expected mobile navigation pattern.

## Motivation

A hamburger menu:
- Saves screen real estate on mobile devices
- Matches the navigation pattern users expect on small screens
- Improves the overall mobile experience of the portfolio

## Proposed Solution

Replace the current custom navbar with a React-Bootstrap `Navbar` component which includes built-in collapse/hamburger behaviour:

```jsx
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar expand="md" bg="light">
            <Container>
                <Navbar.Brand href="/">Hannah Olbrich</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
```

Alternatively, implement a custom hamburger toggle using React state.

**Affected files:** `src/components/Navbar/Navbar.js`, `src/components/Navbar/Navbar.css`

## Acceptance Criteria

- [ ] On screens wider than ~768 px, all navigation links are shown horizontally
- [ ] On screens narrower than ~768 px, a hamburger icon is shown
- [ ] Clicking the hamburger icon toggles the navigation links open/closed
- [ ] Clicking a nav link closes the menu
- [ ] Active link styling is preserved
- [ ] Keyboard and screen reader accessible (correct ARIA attributes)
