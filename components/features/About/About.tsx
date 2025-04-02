"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  const el = useRef(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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
        ref={aboutRef}
        data-section="about"
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div className="container-fluid d-flex flex-column text-center">
          <p
            className={`display-4 pb-3 ${styles.aboutTitle}`}
            style={{ marginBottom: "0px" }}
          >
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
              <p>
                * My name is <strong>Andrew Chang</strong> and I&apos;m
                currently a senior at the University of California, Irvine
                pursuing a B.S. in Computer Science. I love building things and
                learning new technologies and have an interest in software
                engineering and data infrastructure.
              </p>
            </div>
            <div className={styles.infoContainer}>
              <h3>What are my hobbies?</h3>
              <ul>
                <li>Watching basketball 🏀</li>
                <li>Gyming and exercise 🏋🏼🏃🏻‍♂️</li>
                <li>Dj-ing and listening to music 🎧</li>
              </ul>
            </div>
            <div className={styles.infoContainer}>
              <h3>Tech Stack</h3>
              <ul>
                <li>
                  <strong>Languages</strong>: Python, TypeScript, Java, Rust,
                  HTML/CSS, SQL
                </li>
                <li>
                  <strong>Frameworks</strong>: React, Next.js, Django, FastAPI,
                  Node.js, Express
                </li>
                <li>
                  <strong>Tools</strong>: Git, Docker, Linux, AWS, GCP,
                  Kubernetes
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
