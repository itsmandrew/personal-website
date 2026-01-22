"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { getIsMobile } from "@/hooks";

export default function Hero() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const spacing = getIsMobile(767) ? 2 : 6;

    const typed = new Typed(el.current, {
      strings: [
        `changa17@uci.edu ~$ npm install^1000\ninstalling dependencies...^1000\nFetching from source...^1000\n> Hello, this is Andrew :D \n<span class="${styles.navLinks}"><a onclick="document.querySelector('[data-section=\\'about\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">about</a>${" ".repeat(spacing)}<a onclick="document.querySelector('[data-section=\\'experience\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">experience</a>${" ".repeat(spacing)}<a onclick="document.querySelector('[data-section=\\'contact\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">contact</a></span>`,
      ],
      typeSpeed: 30,
      backDelay: 750,
      loop: false,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "█",
      onComplete: () => {
        const cursor = document.querySelector(".typed-cursor");
        if (cursor) {
          cursor.textContent = "▏";
          cursor.classList.add(styles.smallCursor);
        }
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`d-flex align-items-center justify-content-center font-mono w-100 ${styles.heroContainer}`}>
      <div className={`${styles.element0} ${styles.cursorWrapper}`}>
        <span ref={el}></span>
      </div>
    </div>
  );
}
