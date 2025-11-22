# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

The project is set up with GitHub Actions to automatically deploy when you push to the `main` branch.

### Steps:

1. **Push the changes to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Pages Settings:**
   - Go to your repository: https://github.com/NishwanthBairagoni/Disney-Clone
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **gh-pages** branch and **/ (root)** folder
   - Click **Save**

3. **Wait for GitHub Actions:**
   - Go to **Actions** tab in your repository
   - The workflow will automatically build and deploy your React app
   - Wait for it to complete (usually 2-3 minutes)

4. **Access your site:**
   - Your site will be available at: https://nishwanthbairagoni.github.io/Disney-Clone
   - It may take a few minutes for the first deployment

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

3. **Configure GitHub Pages** (same as step 2 above)

## Important Notes:

- The `homepage` field in `package.json` is set to your GitHub Pages URL
- React Router is configured with `basename="/Disney-Clone"` for proper routing
- Make sure Firebase Authentication is enabled in your Firebase Console
- The build folder is automatically generated and deployed to the `gh-pages` branch

## Troubleshooting:

- If you see a 404 error, wait a few minutes for GitHub Pages to update
- Clear your browser cache and try again
- Check the GitHub Actions tab to see if the deployment succeeded
- Make sure the `gh-pages` branch exists and contains the build folder

