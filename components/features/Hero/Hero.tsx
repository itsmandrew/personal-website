"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Get the element's position relative to the viewport
    const rect = element.getBoundingClientRect();

    // If the element is already mostly in view (within 100px of the top), don't scroll
    if (Math.abs(rect.top) < 100) return;
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `changa17@uci.edu ~$ npm install^1000\ninstalling dependencies...^1000\nFetching from source...^1000\n> Hello, this is Andrew :D \n<span class="${
          styles.navLinks
        }"><a onclick="document.querySelector('[data-section=\\'about\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">about</a>${" ".repeat(
          window.innerWidth <= 767 ? 2 : 6
        )}<a onclick="document.querySelector('[data-section=\\'experience\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">experience</a>${" ".repeat(
          window.innerWidth <= 767 ? 2 : 6
        )}<a onclick="document.querySelector('[data-section=\\'contact\\']').scrollIntoView({behavior: 'smooth'})" class="purple" style="cursor: pointer;">contact</a></span>`,
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

        // Add click handlers after typing is complete
        const links = document.querySelectorAll(`.${styles.navLinks} a`);
        links.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.textContent;
            if (section) scrollToSection(section);
          });
        });
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center font-mono w-100"
      style={{ minHeight: "100vh" }}
    >
      <div className={`${styles.element0} ${styles.cursorWrapper}`}>
        <span ref={el}></span>
      </div>
    </div>
  );
}
