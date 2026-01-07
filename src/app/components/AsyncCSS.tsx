'use client';

import { useEffect } from 'react';

export default function AsyncCSS({ href }: { href: string }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      (this as HTMLLinkElement).media = 'all';
    };
    document.head.appendChild(link);
  }, [href]);

  return null;
}