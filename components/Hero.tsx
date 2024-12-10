"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'npm install^1000 <br>`installing dependencies...` ^1000 <br>`Fetching from source...` <br>> Hello, this is Andrew :D <br><br><a href="#about" class="purple">about</a>\t <a href="#experience" class="purple">experience</a>\t <a href="#contact" class="purple">contact</a>',
      ],
      typeSpeed: 30,
      backDelay: 750,
      loop: false,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center font-mono"
      style={{ minHeight: "100vh" }}
    >
      <div className="element0">
        <span ref={el}></span>
      </div>
    </div>
  );
}
