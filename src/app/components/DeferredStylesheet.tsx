'use client';

import { useEffect } from 'react';

interface DeferredStylesheetProps {
  href: string;
  media?: string;
}

export default function DeferredStylesheet({ href, media = 'all' }: DeferredStylesheetProps) {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    
    link.onload = function() {
      (this as HTMLLinkElement).media = media;
    };
    
    // Fallback
    setTimeout(() => {
      if (link.media === 'print') {
        link.media = media;
      }
    }, 100);
    
    document.head.appendChild(link);
  }, [href, media]);

  return null;
}

