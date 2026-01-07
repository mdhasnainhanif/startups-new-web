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
        <style>{`
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
  `}</style>
        {/* Optimize CSS loading - runs early to defer non-critical CSS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Function to defer non-critical CSS
                function deferCSS() {
                  const links = document.querySelectorAll('link[rel="stylesheet"]:not([data-deferred])');
                  links.forEach(function(link, index) {
                    // Keep first 2-3 CSS files as critical (usually main app CSS)
                    if (index < 2) {
                      link.setAttribute('data-critical', 'true');
                      return;
                    }
                    
                    // Defer the rest using media trick
                    link.setAttribute('data-deferred', 'true');
                    const originalMedia = link.media || 'all';
                    link.media = 'print';
                    
                    link.onload = function() {
                      this.media = originalMedia;
                    };
                    
                    // Fallback
                    setTimeout(function() {
                      if (link.media === 'print') {
                        link.media = originalMedia;
                      }
                    }, 100);
                  });
                }
                
                // Run immediately if DOM is ready, otherwise on DOMContentLoaded
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', deferCSS);
                } else {
                  deferCSS();
                }
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

        {/* Kogents Chat Widget */}
        <Script
          id="kogents-chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.KogentsChat ||
                (function (d, s, id) {
                  var w = (window.KogentsChat = function (c) {
                    w._.push(c);
                  });
                  w._ = [];
                  var e = d.createElement(s);
                  e.async = true;
                  e.id = id;
                  e.src = "https://api.autobotx.ai/widget/embed.js?key=cmizx8xe705g2h2z0hxruax7q";
                  var t = d.getElementsByTagName(s)[0];
                  t.parentNode.insertBefore(e, t);
                })(document, "script", "kogents-chat-widget");
            `,
          }}
        />
      </body>
    </html>
  );
}
