# Hannah's Portfolio Site

A personal portfolio website built with React, designed to highlight my web development skills, showcase selected projects with detailed descriptions and visuals, and provide information about my background and ways to contact me.

Visit the live site: [https://hannahro15.github.io/Hannah-Portfolio-Site](https://hannahro15.github.io/Hannah-Portfolio-Site)


# Technologies Used
- React 19
- React Router
- Bootstrap 5
- CSS3

# ✨ Features
- Responsive design for desktop and mobile
- Project showcase with images and descriptions
- About and Contact pages
- Easy navigation with Navbar and Footer
- Deployed to GitHub Pages

# 📁 Project Structure
- `/src/components/` - Reusable React components
- `/src/pages/` - Main page components (Home, About, Projects, Contact)
- `/src/assets/` - Images and static assets
- `/public/` - Public assets and HTML template

## 🚀 Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/hannahro15/Hannah-Portfolio-Site.git

# Navigate to project directory
cd Hannah-Portfolio-Site

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 📦 Deployment
This site is deployed manually to GitHub Pages with:

```bash
npm run deploy
```

## ✅ Release Checklist

### If you are working directly on `main`
```bash
git add -A
git commit -m "your message"
git push origin main
npm run deploy
```

### If you are working on a feature branch
```bash
# on your branch
git add -A
git commit -m "your message"
git push -u origin your-branch

# open PR, merge to main, then:
git checkout main
git pull origin main
npm run deploy
```

Deploy after `main` is up to date so the live site matches the latest merged code.
