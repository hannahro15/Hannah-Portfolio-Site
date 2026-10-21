import fs from 'fs';
import path from 'path';

const indexCss = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf8');

it('defines a site-wide :focus-visible outline in index.css', () => {
    expect(indexCss).toMatch(/:focus-visible\s*\{[^}]*outline:\s*3px solid[^}]*outline-offset:\s*3px/);
});

it('does not replace box-shadow in the site-wide :focus-visible rule', () => {
    expect(indexCss).not.toMatch(/:focus-visible\s*\{[^}]*box-shadow/);
});
