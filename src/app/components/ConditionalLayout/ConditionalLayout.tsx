"use client";

import { usePathname } from "next/navigation";
import TopHeader from "../TopHeader";
import Header from "../Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBriefPage = pathname?.startsWith("/brief");

  if (isBriefPage) {
    // For brief page, don't render TopHeader, Header, or Footer
    return (
      <>
        {children}
        <ScrollToTop />
      </>
    );
  }

  // For all other pages, render with headers and footer
  return (
    <>
      <div className="headerMain">
        <TopHeader />
        <Header />
      </div>
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
