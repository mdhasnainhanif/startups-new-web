# Deployment Guide - Static Export

## Files/Folders to Upload to Server

After running `npm run build`, the **`out`** folder is created with all your static files ready for deployment.

### Required Folder:
**`out/`** - Contains all static HTML, CSS, JS, and assets ready for deployment

### Server Structure on Live Server:
Simply upload the entire `out` folder contents to your web server's public directory (e.g., `public_html`, `www`, `htdocs`, etc.)

```
your-server/
└── public_html/        (or www, hdocs, etc.)
    ├── index.html
    ├── about-us.html
    ├── contact-us.html
    ├── _next/
    ├── assets/
    └── ... (all files from out folder)
```

## Deployment Steps:

### 1. Build the project locally:
```bash
npm run build
```

### 2. Upload the `out` folder:
- Copy **all contents** from the `out` folder
- Upload them to your web server's public directory
- This can be done via FTP, SFTP, or your hosting provider's file manager

### 3. Configure your web server:

#### For Apache (.htaccess):
The `.htaccess` file is automatically included in the `out` folder from the `public` directory. It contains:
- SPA routing rules
- Cache headers for fonts, images, JS, CSS (1 year cache with immutable)
- Compression settings

If you need to customize, edit `public/.htaccess` before building.

#### For Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/out;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss image/svg+xml;

    # Fonts - Cache for 1 year (immutable)
    location ~* \.(ttf|otf|woff|woff2|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # Images - Cache for 1 year (immutable)
    location ~* \.(jpg|jpeg|png|gif|webp|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # JavaScript and CSS chunks - Cache for 1 year (immutable)
    location ~* \.(js|css)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # HTML files - Short cache
    location ~* \.(html|htm)$ {
        expires 1h;
        add_header Cache-Control "public, max-age=3600, must-revalidate";
    }

    # SPA Routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Deployment Platforms:

### Netlify:
1. Drag and drop the `out` folder to Netlify
2. Or connect your Git repository and set build command: `npm run build` and publish directory: `out`

### Vercel:
1. Connect your repository
2. Vercel will automatically detect Next.js and deploy
3. For custom cache headers, create a `vercel.json` file in the root directory (see below)

### GitHub Pages:
1. Upload `out` folder contents to your repository's `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Traditional Web Hosting:
1. Upload all files from `out` folder to your `public_html` or `www` directory
2. Ensure your server supports static file hosting
3. The `.htaccess` file will automatically configure cache headers

## Cache Configuration Summary:

- **Fonts** (.ttf, .otf, .woff, .woff2): 1 year cache (immutable)
- **Images** (.webp, .jpg, .png, .svg): 1 year cache (immutable)
- **JS/CSS Chunks**: 1 year cache (immutable)
- **HTML**: 1 hour cache (must-revalidate)
- **Other assets**: 1 day cache

This configuration will significantly improve repeat visit performance and reduce server load by enabling browser caching for static assets.

## Important Notes:

- **No Node.js Required**: Static export doesn't need Node.js on the server
- **No Server-Side Features**: API routes are not supported in static export
- **Contact Form**: Currently uses a simulated submission. To enable real form submissions, integrate with:
  - Formspree (https://formspree.io)
  - Netlify Forms
  - EmailJS
  - Or your own backend API
- **Image Optimization**: Next.js Image optimization is disabled in static export. Images are served as-is.

