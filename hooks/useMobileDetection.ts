import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useMobileDetection(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export function getIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= breakpoint;
}
