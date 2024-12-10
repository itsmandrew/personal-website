"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";

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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="about"
      className="container-fluid d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-fluid d-flex flex-column text-center">
        <p className="display-4 pb-3" style={{ marginBottom: "50px" }}>
          About my <span ref={el} className="red"></span>
        </p>
      </div>
      <div
        id="content"
        className="d-flex flex-wrap flex-row align-items-center justify-content-center"
      >
        <div className="d-flex flex-column align-items-center justify-content-center half red hidden">
          <Image
            src="/static/profile_pic.jpg"
            width={400}
            height={400}
            className="about-image"
            alt="me being hella sexy"
          />
          <div
            className="d-flex flex-row align-items-center"
            style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
          >
            <Link
              href="/static/resume.pdf"
              style={{ fontSize: "larger", color: "#ff001e" }}
            >
              this is my resume btw
            </Link>
          </div>
        </div>
        <div className="half hidden2">
          <div
            className="container mx-0 my-3 py-3"
            style={{
              backgroundColor: "rgb(41, 37, 46)",
              borderRadius: "15px 50px 30px 5px",
            }}
          >
            <h3 className="red">Who am I?</h3>
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
          <div
            className="container mx-0 my-3 py-3"
            style={{
              backgroundColor: "rgb(41, 37, 46)",
              borderRadius: "15px 50px 30px 5px",
            }}
          >
            <h3 className="red">What are my skills?</h3>
            <ul>
              <li>Python, TypeScript, FastAPI, Next.js, React</li>
              <li>Full stack development, AI engineering, data engineering</li>
              <li>I love BUILDING</li>
            </ul>
          </div>
          <div
            className="container mx-0 my-3 py-3"
            style={{
              backgroundColor: "rgb(41, 37, 46)",
              borderRadius: "15px 50px 30px 5px",
            }}
          >
            <h3 className="red">What are my hobbies?</h3>
            <ul>
              <li>Basketball</li>
              <li>Gyming + powerlifting</li>
              <li>Djing</li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
