# Deployment Checklist

Follow these steps in order for reliable deployment:

## Before Deploying:
1. ✅ Save all your files
2. ✅ Test locally with `npm start`
3. ✅ Check for any console errors

## Deployment Steps:
```bash
# 1. Add all changes to git
git add .

# 2. Commit with a descriptive message
git commit -m "Your descriptive commit message"

# 3. Push to main branch (optional but recommended)
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy
```

## Verification:
- ✅ Wait 2-3 minutes for GitHub Pages to update
- ✅ Visit your live site: https://hannahro15.github.io/Hannah-Portfolio-Site
- ✅ Test all pages and functionality
- ✅ Check browser console for any errors

## Troubleshooting:
- If changes don't appear: Clear browser cache (Cmd+Shift+R on Mac)
- If deployment fails: Check git status and commit all changes first
- If build fails: Run `npm run build` locally to see errors

## Quick Deploy Command (when everything is ready):
```bash
git add . && git commit -m "Update portfolio" && npm run deploy
```
