import type { Metadata } from "next";
import BriefHeader from "../components/BriefHeader/BriefHeader";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Brief - Startups Advisory",
  description: "Tell us what you need",
  robots: "nofollow",
};

export default function BriefLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.briefLayout}>
      <BriefHeader />
      {children}
    </div>
  );
}
