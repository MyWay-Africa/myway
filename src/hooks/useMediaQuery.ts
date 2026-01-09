"use client";

import { useState, useEffect } from "react";

interface UseMediaQueryReturn {
  matches: boolean;
}

/**
 * Hook for responsive design using media queries
 * @param query - CSS media query string
 * @returns Whether the media query matches
 *
 * @example
 * const { matches: isMobile } = useMediaQuery('(max-width: 768px)');
 * const { matches: isDarkMode } = useMediaQuery('(prefers-color-scheme: dark)');
 */
export function useMediaQuery(query: string): UseMediaQueryReturn {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return { matches };
}

// Convenience hooks for common breakpoints
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
