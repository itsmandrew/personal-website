import { useEffect, RefObject } from "react";

interface UseIntersectionObserverOptions {
  selectors: string[];
  showClass: string;
  threshold?: number;
  unobserveOnIntersect?: boolean;
}

export function useIntersectionObserver({
  selectors,
  showClass,
  threshold = 0,
  unobserveOnIntersect = false,
}: UseIntersectionObserverOptions): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add(showClass);
            if (unobserveOnIntersect) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selectors.join(", "));
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selectors, showClass, threshold, unobserveOnIntersect]);
}

export function useElementObserver(
  ref: RefObject<HTMLElement | null>,
  animateClass: string,
  threshold: number = 0.1,
  unobserveOnIntersect: boolean = true
): void {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add(animateClass);
            if (unobserveOnIntersect) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, animateClass, threshold, unobserveOnIntersect]);
}
