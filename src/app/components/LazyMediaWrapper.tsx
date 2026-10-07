"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';

export interface LazyMediaWrapperProps {
  children: ReactNode;
  rootMargin?: string;
  placeholder?: ReactNode;
  className?: string;
  minHeight?: string | number;
}

/**
 * LazyMediaWrapper - Defers rendering of heavy media subtrees (3D canvases, interactive calculators,
 * heavy image carousels, or embed frames) until within scroll proximity of viewport.
 */
export default function LazyMediaWrapper({
  children,
  rootMargin = '250px',
  placeholder,
  className = 'w-full',
  minHeight = '100px',
}: LazyMediaWrapperProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={!isInView && minHeight ? { minHeight } : undefined}
    >
      {isInView ? (
        children
      ) : (
        placeholder || (
          <div className="w-full h-full min-h-[inherit] bg-white/5 animate-pulse flex items-center justify-center">
            <span className="sr-only">Loading content...</span>
          </div>
        )
      )}
    </div>
  );
}
