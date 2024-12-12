"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `changa17@uci.edu ~$ npm install^1000\ninstalling dependencies...^1000\nFetching from source...^1000\n> Hello, this is Andrew :D \n<span class="${styles.navLinks}"><a href="#about" class="purple">about</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#experience" class="purple">experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#contact" class="purple">contact</a></span>`,
      ],
      typeSpeed: 30,
      backDelay: 750,
      loop: false,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "█",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`d-flex align-items-center justify-content-center font-mono`}
      style={{ minHeight: "100vh" }}
    >
      <div className={`${styles.element0} ${styles.cursorWrapper}`}>
        <span ref={el}></span>
      </div>
    </div>
  );
}
