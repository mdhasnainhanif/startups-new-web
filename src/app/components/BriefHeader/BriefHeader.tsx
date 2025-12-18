"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "../../constants";
import styles from "./BriefHeader.module.css";

export default function BriefHeader() {
  return (
    <header className={styles.briefHeader}>
      <div className={styles.headerContainer}>
        {/* Logo on Left */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src={COMPANY_INFO.logo}
            alt="Logo"
            width={140}
            height={40}
            priority
            style={{ objectFit: "contain" }}
            className={styles.logo}
          />
        </Link>

        {/* Phone Number on Right */}
        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className={styles.phoneLink}>
          <span className={styles.phoneNumber}>{COMPANY_INFO.phone}</span>
        </a>
      </div>
    </header>
  );
}
