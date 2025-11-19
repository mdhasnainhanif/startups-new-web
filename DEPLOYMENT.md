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
Create a `.htaccess` file in your public directory:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

#### For Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/out;
    index index.html;

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

### GitHub Pages:
1. Upload `out` folder contents to your repository's `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Traditional Web Hosting:
1. Upload all files from `out` folder to your `public_html` or `www` directory
2. Ensure your server supports static file hosting

## Important Notes:

- **No Node.js Required**: Static export doesn't need Node.js on the server
- **No Server-Side Features**: API routes are not supported in static export
- **Contact Form**: Currently uses a simulated submission. To enable real form submissions, integrate with:
  - Formspree (https://formspree.io)
  - Netlify Forms
  - EmailJS
  - Or your own backend API
- **Image Optimization**: Next.js Image optimization is disabled in static export. Images are served as-is.

