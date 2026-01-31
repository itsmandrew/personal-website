"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import { useTypedAnimation, useIntersectionObserver } from "@/hooks";

export default function About() {
  const el = useTypedAnimation({
    strings: ["life", "skills", "hobbies"],
  });

  useIntersectionObserver({
    selectors: [`.${styles.hidden}`, `.${styles.hidden2}`],
    showClass: styles.show,
  });

  return (
    <>
      {/* Spacing */}
      <div
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "50vh" }}
      ></div>

      <div
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
            <div className={`d-flex flex-row align-items-center justify-content-center ${styles.resumeContainer}`}>
              <Link
                href="/static/resume.pdf"
                className={styles.resumeLink}
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
                  <strong>Languages</strong>: Python, Go, TypeScript, Java, Rust,
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
