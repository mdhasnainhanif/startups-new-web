'use client';

import { useEffect, useState, ReactNode } from 'react';

interface DeferredAfterLoadProps {
  children: ReactNode;
  delay?: number;
  fallback?: ReactNode;
}

export default function DeferredAfterLoad({
  children,
  delay = 0,
  fallback = null,
}: DeferredAfterLoadProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <>{shouldLoad ? children : fallback}</>;
}

