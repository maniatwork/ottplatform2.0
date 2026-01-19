# Netlify Deployment Guide for A2S OTT Platform

## ✅ Setup Complete
Your project is now configured for Netlify deployment!

## Deployment Steps

### Option 1: Deploy via GitHub (Recommended - Automatic CI/CD)

1. **Go to Netlify**
   - Visit https://app.netlify.com
   - Sign up/Login with GitHub

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize Netlify
   - Choose your repository: `maniatwork/ottplatform2.0`
   - Select branch: `Manikandan/firstcommit` (or your main branch)

3. **Configure Build Settings**
   - Build command: `npm run build` (already configured in netlify.toml)
   - Publish directory: `dist` (already configured in netlify.toml)

4. **Set Environment Variables**
   - In Netlify Site Settings → Build & Deploy → Environment
   - Add the following variables (copy from your .env file):
     ```
     VITE_SUPABASE_URL=https://zpmanzvdpmuuulxhlijc.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwbWFuenZkcG11dXVseGhsaWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5MjU2NzIsImV4cCI6MjA4MjUwMTY3Mn0.-l2DG1DQ9K1fqkPQSQPan6VQbKhdD77pe2HJyeezezU
     VITE_SUPABASE_PROJECT_ID=zpmanzvdpmuuulxhlijc
     ```

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your app
   - Future pushes to your branch will trigger automatic deployments

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```
   This will open your browser for authentication

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```
   Or for preview deployment:
   ```bash
   netlify deploy
   ```

## What's Been Configured

✅ **netlify.toml** created with:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20
- SPA routing (all routes redirect to index.html)
- Security headers for protection against XSS, clickjacking, etc.

✅ **Build tested** - your project builds successfully

✅ **Environment variables** - use Vite environment variables pattern (VITE_* prefix)

## Post-Deployment

- Your site will be available at: `https://[your-site-name].netlify.app`
- Custom domain can be configured in Netlify dashboard
- SSL certificate is automatically provided

## Troubleshooting

**Build fails?**
- Check build logs in Netlify dashboard
- Ensure all environment variables are set
- Verify Node modules are installed locally

**Routing issues?**
- netlify.toml already configured to handle SPA routing
- All routes redirect to index.html for React Router to handle

**Environment variables not working?**
- Must start with `VITE_` prefix for Vite
- Redeploy after adding/changing environment variables

## Resources
- [Netlify Docs](https://docs.netlify.com)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-modes.html)
- [React Router Deployment](https://reactrouter.com/start/library/deployment)
