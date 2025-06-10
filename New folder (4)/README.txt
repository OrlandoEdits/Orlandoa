
# D&O Racing Site Deployment Instructions

## If using Netlify:

1. Build your project:
   If you're using Vite:
   ```
   npm install
   npm run build
   ```

2. Ensure the `dist/` folder includes a `_redirects` file:
   ```
   /*    /index.html   200
   ```

3. Drag and drop the `dist/` folder (after build) into Netlify to deploy.

Alternatively:

- Upload this ZIP into Netlify.
- Set "Build Command": `npm run build`
- Set "Publish directory": `dist`

## Notes

- The `_redirects` file is already included to fix the "Page not found" issue with React Router.
