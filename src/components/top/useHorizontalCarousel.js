import { useCallback, useEffect, useRef, useState } from "react";

export function useHorizontalCarousel() {
  const containerRef = useRef(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    setCanScrollPrevious(container.scrollLeft > 4);
    setCanScrollNext(container.scrollLeft + container.clientWidth < container.scrollWidth - 4);
  }, []);

  const scrollByDirection = useCallback((direction) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.scrollBy({
      left: direction * container.clientWidth * 0.82,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return {
    containerRef,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious: () => scrollByDirection(-1),
    scrollNext: () => scrollByDirection(1)
  };
}
