"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["life", "skills", "hobbies"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 750,
      loop: true,
      loopCount: Infinity,
    });

    // Animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    });

    // Observe all sliding elements
    const slidingElements = document.querySelectorAll(
      `.${styles.hidden}, .${styles.hidden2}`
    );
    slidingElements.forEach((el) => observer.observe(el));

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Spacing */}
      <div
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "50vh" }}
      ></div>

      <div
        id="about"
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div className="container-fluid d-flex flex-column text-center">
          <p className="display-4 pb-3" style={{ marginBottom: "0px" }}>
            About my <span ref={el} className="red"></span>
          </p>
        </div>
        <div
          id="content"
          className={`d-flex flex-wrap flex-row align-items-center justify-content-center ${styles.content}`}
        >
          <div
            className={`d-flex flex-column align-items-center justify-content-center ${styles.half} ${styles.hidden}`}
          >
            <Image
              src="/profile_pic.jpg"
              width={400}
              height={400}
              className={styles.aboutImage}
              alt="me being hella sexy"
              priority
            />
            <div
              className="d-flex flex-row align-items-center justify-content-center"
              style={{ padding: "3vh 0" }}
            >
              <Link
                href="/static/resume.pdf"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: "#ff001e",
                }}
                className={styles.resumeText}
              >
                this is my resume btw
              </Link>
            </div>
          </div>
          <div className={`${styles.half} ${styles.hidden2}`}>
            <div className={styles.infoContainer}>
              <h3>Who am I?</h3>
              <ul>
                <li>
                  My name is <strong>Andrew Chang</strong>
                </li>
                <li>
                  I&apos;m currently a 4th year Computer Science student at UCI
                </li>
                <li>I&apos;m from Diamond Bar, CA and was born in SoCal</li>
              </ul>
            </div>
            <div className={styles.infoContainer}>
              <h3>What are my skills?</h3>
              <ul>
                <li>Python, TypeScript, FastAPI, Next.js, React</li>
                <li>
                  Full stack development, AI engineering, data engineering
                </li>
                <li>I love BUILDING</li>
              </ul>
            </div>
            <div className={styles.infoContainer}>
              <h3>What are my hobbies?</h3>
              <ul>
                <li>Watching basketball</li>
                <li>Gyming</li>
                <li>Dj-ing</li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
