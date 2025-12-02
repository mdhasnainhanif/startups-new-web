import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wfVisualSans = localFont({
  src: "../../public/assets/fonts/WFVisualSansVF.ttf",
  variable: "--font-wf-visual-sans",
  display: "swap",
});

const graphikRegular = localFont({
  src: "../../public/assets/fonts/Graphik-Regular-Trial.otf",
  variable: "--font-graphik-regular",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const graphikBold = localFont({
  src: "../../public/assets/fonts/Graphik-Bold-Trial.otf",
  variable: "--font-graphik-bold",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const graphikSemiBold = localFont({
  src: "../../public/assets/fonts/Graphik-Semibold-Trial.otf",
  variable: "--font-graphik-semibold",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Startups Advisory",
  description: "AI-powered advisory for startups",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wfVisualSans.variable} ${graphikRegular.variable} ${graphikBold.variable} ${graphikSemiBold.variable} antialiased relative`}
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
          <TopHeader />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
