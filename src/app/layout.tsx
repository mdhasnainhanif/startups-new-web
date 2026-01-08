import React from "react";
import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout/ConditionalLayout";
import AsyncCSS from "./components/AsyncCSS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  preload: true,
});

// const wfVisualSans = localFont({
//   src: "../../public/assets/fonts/WFVisualSansVF.ttf",
//   variable: "--font-wf-visual-sans",
//   display: "swap",
// });

const graphikRegular = localFont({
  src: "../../public/assets/fonts/Graphik-Regular-Trial.otf",
  variable: "--font-graphik-regular",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  preload: true,
});

const graphikBold = localFont({
  src: "../../public/assets/fonts/Graphik-Bold-Trial.otf",
  variable: "--font-graphik-bold",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  preload: true,
});

const graphikSemiBold = localFont({
  src: "../../public/assets/fonts/Graphik-Semibold-Trial.otf",
  variable: "--font-graphik-semibold",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Startups Advisory",
  description: "AI Powered advisory for startups",
  robots: "nofollow",
  icons: {
    icon: "/assets/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetching for Third-Party Domains */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://api.autobotx.ai" />
        <link rel="dns-prefetch" href="https://cal.com" />
        
        {/* Critical CSS Inlined - Above the Fold Styles - Prevents FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --background: #ffffff;
              --foreground: #171717;
              --color-primary: #0fdac2;
              --color-purple: #643bff;
              --color-dark: #020016;
              --primary-color: #ff2a40;
              --primary-dark: #118464;
              --text-dark: #1b1b1b;
              --text-muted: #666666;
              --section-bg: #f7f9fb;
              --soft-primary: #e7f0ff;
              --card-hover: #f1f3f5;
              --card-border: #dfe3e8;
              --accent: #0a53ff;
              --muted: #98a2b3;
            }
            * {
              box-sizing: border-box;
            }
            html {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            body {
              background: var(--color-dark) !important;
              color: var(--foreground);
              font-family: var(--font-graphik-regular), Arial, Helvetica, sans-serif;
              font-display: swap;
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }
            .topHeader {
              position: relative;
              padding-top: 8px;
            }
            .topPara {
              font-family: system-ui, Arial, sans-serif;
              font-size: 15px;
              font-weight: 400;
              color: #ffffff;
            }
            header {
              contain: layout style paint;
              transform: translateZ(0);
              z-index: 1000;
            }
            nav.headerNav {
              box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, 0.3), 0 10px 20px -10px rgba(0, 0, 0, 0.3);
            }
            nav.headerNav a.active {
              color: #0fdac2 !important;
              text-shadow: none !important;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-plus-jakarta-sans), sans-serif !important;
              margin: 0;
            }
            p, button, a, ul, ol, li, input, textarea, select, label {
              font-family: var(--font-graphik-regular), Arial, Helvetica, sans-serif;
            }
            .sectionPadding {
              padding-top: 4.125rem;
              padding-bottom: 4.725rem;
            }
            .sectionPaddingCase {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
            .headerMain {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
            }
            main {
              position: relative;
              min-height: 100vh;
            }
            img {
              image-rendering: -webkit-optimize-contrast;
              image-rendering: crisp-edges;
              max-width: 100%;
              height: auto;
            }
            .sectionHeading {
              position: relative;
            }
            .sectionHeading > h1 {
              font-size: 3.6rem;
              font-weight: 700;
              line-height: 1.09;
              color: #ffffff;
            }
            .sectionHeading > h2 {
              font-size: 3.5rem;
              font-weight: 700;
              line-height: 1.3;
              margin-bottom: 0rem;
              color: #ffffff;
            }
            .sectionHeading > p {
              font-size: 1.25rem;
              font-weight: 500;
              color: #ffffff;
            }
            .sectionHeading.forH2 > p {
              font-size: 1.125rem;
              line-height: 1.3;
              margin-top: 1.25rem;
              color: #ffffff;
            }
            .sectionHeading h2 > span.primaryColor {
              color: var(--color-primary);
            }
            .casestudysec {
              padding-bottom: 11rem;
              position: relative;
            }
            @media (max-width: 768px) {
              .topPara {
                font-size: 0.875rem;
              }
              .sectionPadding {
                padding-top: 3.925rem;
                padding-bottom: 4.25rem;
              }
              .headerLogo {
                max-width: 6rem;
              }
              .mobile-padding-bottom-0 {
                padding-bottom: 0rem !important;
              }
              .sectionHeading > h1 {
                font-size: 1.75rem;
                font-weight: 700;
                line-height: 1.2;
              }
              .sectionHeading.forH2 > h2 {
                font-size: 2rem;
                font-weight: 700;
                line-height: 1.3;
                margin-bottom: 0rem;
              }
              .sectionHeading > p {
                font-size: 1rem;
              }
              .sectionHeading.forH2 > p {
                font-size: 1rem;
              }
            }
          `
        }} />
        
        {/* Prevent FOUC - Ensure all app CSS loads synchronously */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Mark all Next.js and app CSS as critical to prevent FOUC
                function markCriticalCSS() {
                  const links = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
                  links.forEach(function(link) {
                    const href = link.href || '';
                    // Keep ALL Next.js and app CSS files as critical
                    if (href.includes('_next') || 
                        href.includes('_app') || 
                        href.includes('globals') ||
                        href.includes('casestudy') ||
                        href.includes('swiper') ||
                        href.includes('.module.css') ||
                        !href.includes('http')) {
                      link.setAttribute('data-critical', 'true');
                    }
                  });
                }
                
                // Run immediately and on DOMContentLoaded
                markCriticalCSS();
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', markCriticalCSS);
                }
                
                // Also mark on load to catch any late-added stylesheets
                window.addEventListener('load', markCriticalCSS);
              })();
            `,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </noscript>
        <link rel="preload" as="image" href="/assets/images/hero.webp" />
        {/* Font Awesome - Loaded asynchronously after page load */}
        <AsyncCSS href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${plusJakartaSans.variable} ${graphikRegular.variable} ${graphikBold.variable} ${graphikSemiBold.variable} antialiased relative`}
      >
        {/* Shared Background Image - Behind Header and Hero */}
        {/* <div className="fixed inset-0 z-0">
          <Image
            src="/assets/images/hero.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", zIndex: 1 }}
          />
          
          <div className="absolute inset-0 bg-[#020016]/50 md:bg-[#020016]/70"></div>
        </div> */}

        {/* Content with higher z-index */}
        <div className="relative z-10">
          <ConditionalLayout>{children}</ConditionalLayout>
        </div>

        {/* Kogents Chat Widget - Delayed 25 seconds after page load */}
        <Script
          id="kogents-chat-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var loadChat = function() {
                  if (window.KogentsChat) return;
                  var d = document, s = 'script', id = 'kogents-chat-widget';
                  var w = (window.KogentsChat = function (c) {
                    (w._ = w._ || []).push(c);
                  });
                  var e = d.createElement(s);
                  e.async = true;
                  e.id = id;
                  e.src = "https://api.autobotx.ai/widget/embed.js?key=cmizx8xe705g2h2z0hxruax7q";
                  var t = d.getElementsByTagName(s)[0];
                  t.parentNode.insertBefore(e, t);
                };
                // Delay loading by 25 seconds
                setTimeout(loadChat, 25000);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
