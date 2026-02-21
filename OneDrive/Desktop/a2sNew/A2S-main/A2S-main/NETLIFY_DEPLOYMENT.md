# Netlify Deployment Guide

Your project is now configured for deployment to Netlify. Follow these steps:

## Prerequisites

- A Netlify account (sign up at https://netlify.com if you don't have one)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push Your Code to Git

```bash
git add .
git commit -m "Configure for Netlify deployment"
git push origin main
```

### 2. Connect to Netlify

**Option A: Using Netlify UI**

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Click "Deploy site"

**Option B: Using Netlify CLI**

```bash
npm install -g netlify-cli
netlify login
netlify init
```

### 3. Configure Environment Variables

In Netlify Dashboard:

1. Go to Site settings → Build & deploy → Environment
2. Add the following variables:
   - `VITE_SUPABASE_PROJECT_ID` = your project ID
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = your publishable key
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `NODE_VERSION` = 20

### 4. Build Settings (Should be Auto-detected)

- Build command: `npm run build`
- Publish directory: `dist`

## What's Configured

✅ **netlify.toml** - Defines build settings and redirects
✅ **.netlifyignore** - Excludes unnecessary files from deployment
✅ **vite.config.ts** - Optimized for production with code splitting
✅ **.env.example** - Reference for required environment variables
✅ **SPA Redirects** - All routes redirect to index.html for React Router
✅ **Security Headers** - Security headers configured
✅ **Cache Control** - Optimized caching strategy

## Deployment Features

- **Automatic Builds**: On every push to main branch
- **Preview Deploys**: For pull requests
- **PWA Support**: Service worker enabled
- **Code Splitting**: Vendor code separated for better caching
- **Security**: Security headers configured
- **SPA Routing**: All routes work correctly with React Router

## Troubleshooting

### Build fails

- Check Netlify Build Logs in the dashboard
- Ensure all environment variables are set
- Verify Node.js version (should be 20+)

### Routes not working

- Already configured in `netlify.toml`
- All routes redirect to `index.html` for SPA routing

### Slow performance

- Check build size in `dist/` folder
- Review Lighthouse reports in Netlify Analytics

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com
