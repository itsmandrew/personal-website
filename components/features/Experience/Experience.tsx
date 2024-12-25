"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import styles from "./Experience.module.css";

export default function Experience() {
  const timelineRef = useRef<HTMLUListElement>(null);
  const el = useRef(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [expandedPoints, setExpandedPoints] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["experience", "journey", "story"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 750,
      loop: true,
      loopCount: Infinity,
    });

    // Timeline animation observer
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add(styles.animate);
            // Once animated, no need to keep observing
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    // Animation observer for content boxes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    // Observe all elements with hidden2 class
    const hiddenElements = document.querySelectorAll(".hidden2");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      typed.destroy();
      observer.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  const experiences = [
    {
      company: "Tesla, Inc.",
      logo: "/logos/tesla-symbol.jpg",
      title: "Software Engineer Intern",
      date: "January 2025 - Present",
      points: ["Incoming software and data intern for Winter/Spring 2025"],
    },
    {
      company: "Ingram Micro",
      logo: "/logos/ingram_micro.jpeg",
      title: "Software Engineer Intern",
      date: "June 2024 - December 2024",
      points: [
        "Designed and implemented an ETL pipeline using Apache Airflow and Python to push on-premise data from PostgreSQL to a GCP cloud bucket, which then triggers a Cloud Function to load the data into BigQuery, reducing data transfer latency by 30% and improving overall data processing efficiency by 25%.",
        "Employed LangChain with models such as GPT-4o-mini and Gemini 1.5 Flash for summarization, data cleaning, and response generation on external documentation, utilizing Google Vertex AI and OpenAI to enhance data quality, streamline information processing, and improve automated response accuracy.",
      ],
    },
    {
      company: "Molloi Lab - UC Irvine",
      logo: "/logos/molloi-lab.jpg",
      title: "Deep Learning Researcher",
      date: "April 2024 - June 2024",
      points: [
        "Trained a deep learning segmentation model over 1000 contrast enhanced CT angiography images using PyTorch and the MONAI frameworks to identify critical levels of calcium in the coronary arteries",
        "Evaluated and optimized multiple loss functions for medical image segmentation, including Dice loss and Hausdorff loss, and developed a GPU-optimized Hausdorff loss function to enhance computational efficiency and model accuracy in coronary artery calcium deposit detection",
      ],
    },
    {
      company: "Spurs Sports & Entertainment (NBA)",
      logo: "/logos/spurs.jpeg",
      title: "Software Engineer Intern",
      date: "October 2023 - May 2024",
      points: [
        "Transitioned key data pipelines and CI/CD workflows from Jenkins to Airflow, incorporating Docker for consistent execution environments and utilizing Airflow's dynamic DAGs (Directed Acyclic Graphs) and advanced scheduling for enhanced workflow management",
        "Collaborated with frontend teams to develop and test API integration, ensuring seamless communication between FastAPI endpoints and React-based applications, resulting in a 15% increase in user interaction efficiency",
      ],
    },
    {
      company: "UC Irvine",
      logo: "/logos/anteater3.jpeg",
      title: "Undergraduate Researcher",
      date: "June 2023 - October 2023",
      points: [
        "Collaborated with a team to optimize our relational database, implementing Spark's distributed clusters which reduced processing times by 45% and improved large-scale data analytics efficiency by 30%",
        "Devised comprehensive unit tests using the PyTest testing framework to validate the performance of PySpark SQL queries leading to a test coverage of 95% and reduction of data inconsistencies",
      ],
    },
    {
      company: "UC Irvine",
      logo: "/logos/uci-main.png",
      title: "Lab Assistant: ICS 46",
      date: "March 2023 - June 2023",
      points: [
        "Assigned exercises on Github and graded weekly homework assignments for UC Irvine's ICS 46: Data Structure Implementation and Analysis",
        "Oversaw open lab hours three times weekly to help debug course projects and implement data structure concepts such as DAG graphs, hash maps, and AVL trees resulting in a 95% positive anonymous student-tutor feedback",
      ],
    },
    {
      company: "WhizKids Computer Center",
      logo: "/logos/whiz.png",
      title: "Programming Instructor",
      date: "January 2022 - November 2022",
      points: [
        "Lectured classes of 3-5 students in topics including Python, Java, front-end web development, PyGame, data structures and algorithms, and machine learning",
        "Motivated student interest in computer science through personally developed take home projects such as weather forecasting, quiz/studying, and type racing based web-apps shown by a returning student rate of 90%",
      ],
    },
    {
      company: "UC Irvine",
      logo: "/logos/uci-main.png",
      title: "Lab Assistant: ICS 32A",
      date: "September 2021 - December 2021",
      points: [
        "Provided open lab hours three times a week for two hours, each lab to debug course projects and implement Python and programming concepts such as recursion, classes, web API's, networks/sockets, and Tkinter",
      ],
    },
    {
      company: "UC Irvine",
      logo: "/logos/uci3.svg",
      title: "Student @ UC Irvine",
      date: "September 2020 - Present",
      points: [
        "Admitted into UC Irvine in 2020 with an expected graduation date of Winter 2024",
        "Currently majoring in Computer Science with a minor in Statistics and also Informatics",
      ],
    },
  ];

  const togglePoint = (expIndex: number, pointIndex: number) => {
    const key = `${expIndex}-${pointIndex}`;
    setExpandedPoints((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const shouldTruncate = (text: string) => {
    return isMobile && text.length > 100;
  };

  return (
    <>
      {/* Spacing */}
      <div
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "50vh", overflowX: "hidden" }}
      ></div>
      <div
        ref={experienceRef}
        data-section="experience"
        className="container-fluid d-flex flex-column text-center"
        style={{ overflowX: "hidden" }}
      >
        <p
          className={`${styles.experienceTitle} display-4 pb-3`}
          style={{ marginBottom: "5px" }}
        >
          About my <span ref={el} className="red"></span>
        </p>
      </div>
      <div className="container px-4" style={{ overflowX: "hidden" }}>
        <section className="py-5">
          <ul ref={timelineRef} className={styles.timeline}>
            {experiences.map((exp, index) => (
              <li key={index} className={`${styles.timelineItem} mb-5`}>
                <span className={styles.timelineIcon}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company}-logo`}
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid gainsboro",
                    }}
                  />
                </span>
                <div
                  className={`${styles.content} container py-2 rounded hidden2`}
                  style={{ backgroundColor: "rgb(41, 37, 46)" }}
                >
                  <h5 className={`${styles.jobTitle} mb-0 mt-1`}>
                    {exp.title}
                  </h5>
                  <p className={`${styles.companyName} mb-3 mt-2`}>
                    {exp.company}
                  </p>
                  <ul>
                    {exp.points.map((point, pointIndex) => {
                      const key = `${index}-${pointIndex}`;
                      const isExpanded = expandedPoints[key];
                      const needsTruncation = shouldTruncate(point);

                      return (
                        <li
                          className={`${styles.points} ${
                            needsTruncation && !isExpanded
                              ? styles.truncated
                              : ""
                          }`}
                          key={pointIndex}
                        >
                          <p style={{ margin: 0 }}>{point}</p>
                          {needsTruncation && (
                            <div
                              className={styles.readMore}
                              onClick={() => togglePoint(index, pointIndex)}
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <p className={`${styles.date} mb-2 mx-1`}>{exp.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
