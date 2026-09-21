# Deployment Guide

## Table of Contents
1. [Local Development](#local-development)
2. [Build for Production](#build-for-production)
3. [Deploy to Cloudflare Pages](#deploy-to-cloudflare-pages)
4. [Deploy to Vercel](#deploy-to-vercel)
5. [Deploy to Netlify](#deploy-to-netlify)
6. [Docker Deployment](#docker-deployment)
7. [Self-Hosted](#self-hosted)
8. [CI/CD Pipeline](#cicd-pipeline)

---

## Local Development

### Prerequisites
- Node.js 18+ or Bun
- npm 9+ or bun
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/your-username/golden-ratio-webgpu-fractal-engine.git
cd golden-ratio-webgpu-fractal-engine

# Install dependencies
npm install
# or
bun install

# Start dev server
npm run dev
# or
bun dev
```

Open http://localhost:3000

### Development Server Options
```bash
# Default: localhost:3000
# The dev script is fixed to `vite --port=3000 --host=0.0.0.0` (port & host are NOT read from env)
npm run dev

# Custom port: the dev script hard-codes the port, so run Vite directly
npx vite --port=8080

# Network access is already enabled by the dev script (--host=0.0.0.0)
```

---

## Build for Production

### Build Command
```bash
npm run build
# or
bun run build
```

**Output:** `dist/` directory
```
dist/
├── index.html
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── aistudio/.gitignore
```
> Reality check: there is **no `vendor-*.js`** chunk (Vite is not configured to split chunks) and **no `favicon.ico`** (index.html has no favicon link).

### Preview Build Locally
```bash
npm run preview
# or
bun run preview
```

Open http://localhost:4173

### Build Analysis
```bash
# Analyze bundle size
npm run build -- --mode production

# Generate stats
npx vite-bundle-analyzer dist/assets/*.js
```

---

## Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. **Connect Repository**
   - Go to https://dash.cloudflare.com
   - Workers & Pages → Create application → Pages
   - Connect to Git → Select repository

2. **Configure Build**
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```

3. **Environment Variables** (if needed)
   ```
   NODE_VERSION: 18
   ```

4. **Deploy**
   - Save and Deploy
   - Auto-deploy on every push to main

### Option B: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy dist

# Or the project's one-shot script (vite build && wrangler pages deploy dist)
npm run deploy:cf
```

### Custom Domain
1. Pages project → Custom domains
2. Add domain (e.g., fractals.example.com)
3. Update DNS:
   ```
   Type: CNAME
   Name: fractals
   Target: your-project.pages.dev
   ```

### Cloudflare Configuration
`wrangler.toml` (this project's file is exactly 3 lines — there is no `[headers]` block):
```toml
name = "golden-ratio-fractal-engine"
compatibility_date = "2025-01-01"
pages_build_output_dir = "dist"
```

### Temporary public preview (Cloudflare Quick Tunnel vs Pages)
For a throwaway share link without deploying, `cloudflared tunnel --url http://localhost:<port>` allocates a `https://<random>.trycloudflare.com` URL and needs no account/ports/domain. **Caveat found on this machine:** the argotunnel data plane dials the Cloudflare edge on **outbound port 7844** (QUIC/UDP *and* HTTP/2/TCP); if the local network/firewall blocks 7844 the tunnel never becomes reachable (pre-check reports `hard_fail=true`, `dial tcp <edge>:7844: i/o timeout`) even though `api.cloudflare.com:443` passes and a URL is printed. Switching `--protocol http2` or agent permissions does not help — 7844 has no 443 fallback in the tunnel data plane.
When that happens, deploy the built `dist/` to **Cloudflare Pages** instead (443-only, already the project's configured target, account is pre-authenticated via `wrangler login`):
```powershell
npx wrangler pages deploy dist --project-name golden-ratio-fractal-engine --commit-dirty=true
# -> https://<hash>.golden-ratio-fractal-engine.pages.dev  + stable alias
#    https://master.golden-ratio-fractal-engine.pages.dev
```
This gives a persistent, HTTPS, DDoS-protected public link over the one port the network allows. Verify with `Invoke-WebRequest <url>` (expect `200` + the current bundle filename in the HTML).

---

## Deploy to Vercel

> ⚠️ НЕ НАСТРОЕНО в этом проекте / reference only — this repo has no `vercel.json` and is deployed via **Cloudflare Pages** only. The steps and config below are generic, not project settings.

### Option A: Git Integration

1. **Import Project**
   - Go to https://vercel.com
   - Import Git Repository → Select project

2. **Configure**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Deploy**
   - Click Deploy
   - Auto-deploy on push

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### Vercel Configuration
`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Deploy to Netlify

> ⚠️ НЕ НАСТРОЕНО в этом проекте / reference only — this repo has no `netlify.toml`. Kept as generic guidance only.

### Option A: Git Integration

1. **Connect Repository**
   - Go to https://app.netlify.com
   - Add new site → Import from Git

2. **Configure Build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy**
   - Deploy site
   - Auto-deploy on push

### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Netlify Configuration
`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

---

## Docker Deployment

> ⚠️ НЕ НАСТРОЕНО в этом проекте / reference only — this repo has no `Dockerfile` or `nginx.conf`. Kept as generic guidance only.

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

### Build & Run
```bash
# Build image
docker build -t fractal-engine .

# Run container
docker run -p 8080:80 fractal-engine

# Open http://localhost:8080
```

### Docker Compose
```yaml
version: '3.8'
services:
  fractal-engine:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

---

## Self-Hosted

### Static File Server

#### Using Python
```bash
cd dist
python -m http.server 8080
```

#### Using Node.js
```bash
npm install -g serve
serve dist -l 8080
```

#### Using Apache
```apache
<VirtualHost *:80>
    ServerName fractals.example.com
    DocumentRoot /var/www/fractal-engine/dist
    
    <Directory /var/www/fractal-engine/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA fallback
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # Cache static assets
    <LocationMatch "^/assets/.*$">
        Header set Cache-Control "max-age=31536000, immutable"
    </LocationMatch>
</VirtualHost>
```

---

## CI/CD Pipeline

> ⚠️ НЕ НАСТРОЕНО в этом проекте / reference only — this repo has no `.github/` or `.gitlab-ci.yml`. Kept as generic guidance only.

### GitHub Actions

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: golden-ratio-fractal-engine
          directory: dist
```

### GitLab CI

`.gitlab-ci.yml`:
```yaml
image: node:18

stages:
  - build
  - deploy

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - npm install -g wrangler
    - wrangler pages deploy dist
  only:
    - main
```

---

## Environment Variables

> ⚠️ НЕ НАСТРОЕНО в этом проекте / reference only — `.env.example` defines `GEMINI_API_KEY` and `APP_URL` (injected by AI Studio), but `src/` reads **no** `import.meta.env` at all, so env config is effectively unused. The `VITE_*` examples below are illustrative and not wired up.

### Development
`.env.development`:
```
VITE_APP_TITLE=Golden Ratio Fractal Engine (Dev)
VITE_DEBUG=true
VITE_API_URL=http://localhost:8080
```

### Production
`.env.production`:
```
VITE_APP_TITLE=Golden Ratio Fractal Engine
VITE_DEBUG=false
VITE_API_URL=https://api.example.com
```

### Access in Code
```typescript
const title = import.meta.env.VITE_APP_TITLE;
const isDebug = import.meta.env.VITE_DEBUG === 'true';
```

---

## Performance Optimization

### Enable Compression
```nginx
# nginx.conf
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
```

### CDN Setup
```bash
# Cloudflare automatically provides CDN
# For other platforms, configure CDN in dashboard
```

### Cache Strategy
```nginx
# HTML: No cache
location = /index.html {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}

# Assets: Long cache
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## Monitoring

### Uptime Monitoring
- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://www.pingdom.com
- **Better Stack**: https://betterstack.com

### Analytics
- **Plausible**: Privacy-friendly
- **Fathom**: Simple analytics
- **Google Analytics**: Full-featured

### Error Tracking
- **Sentry**: Error monitoring
- **LogRocket**: Session replay
- **DataDog**: Full-stack monitoring

---

## Rollback

### Cloudflare Pages
1. Deployments → Select previous deployment
2. Click "Rollback to this deployment"

### Vercel
1. Deployments → Select previous deployment
2. Click "Promote to Production"

### Netlify
1. Deploys → Select previous deploy
2. Click "Publish deploy"

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 18+

# Check npm version
npm --version  # Should be 9+
```

### 404 After Deploy
- Check build output directory (should be `dist`)
- Verify `index.html` exists in `dist/`
- Check base path in `vite.config.ts`

### CORS Issues
```toml
# wrangler.toml
[headers]
[headers.values]
Access-Control-Allow-Origin = "*"
```

### Assets Not Loading
- Check file paths in `dist/index.html`
- Verify `base` option in `vite.config.ts`
- Check browser console for 404 errors

---

## Deployment Checklist

Before deploying:

- [ ] Run `npm run build` locally
- [ ] Test `npm run preview`
- [ ] Check console for errors
- [ ] Verify all features work
- [ ] Test on mobile device
- [ ] Check performance (Lighthouse)
- [ ] Update version in `package.json`
- [ ] Commit all changes
- [ ] Push to repository
- [ ] Verify auto-deploy triggered
- [ ] Test production URL
- [ ] Check analytics tracking
- [ ] Monitor error logs

---

## Post-Deployment

### Verify Deployment
1. Visit production URL
2. Check all pages load
3. Test interactions
4. Verify WebGPU/WebGL2 works
5. Check console for errors
6. Test on different devices

### Monitor
- Check error rates
- Monitor performance metrics
- Review user feedback
- Track usage analytics

### Update
```bash
# Regular updates
git pull origin main
npm install
npm run build

# Deploy
wrangler pages deploy dist
```

---

## Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
