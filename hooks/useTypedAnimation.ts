import { useEffect, useRef, RefObject } from "react";
import Typed from "typed.js";

interface TypedOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  loopCount?: number;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: (self: Typed) => void;
}

export function useTypedAnimation(options: TypedOptions): RefObject<HTMLSpanElement | null> {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 750,
      loop: true,
      loopCount: Infinity,
      ...options,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return el;
}
