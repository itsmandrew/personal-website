"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./Experience.module.css";
import { experiences } from "@/data/experienceData";
import {
  useTypedAnimation,
  useIntersectionObserver,
  useElementObserver,
  useMobileDetection,
} from "@/hooks";

export default function Experience() {
  const timelineRef = useRef<HTMLUListElement>(null);
  const [expandedPoints, setExpandedPoints] = useState<{
    [key: string]: boolean;
  }>({});
  const isMobile = useMobileDetection();

  const el = useTypedAnimation({
    strings: ["experience", "journey", "story"],
  });

  useElementObserver(timelineRef, styles.animate, 0.1);

  useIntersectionObserver({
    selectors: [`.${styles.hidden2}`],
    showClass: styles.show,
  });

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
                    className={styles.logoImage}
                  />
                </span>
                <div className={styles.hidden2}>
                  <div
                    className={`${styles.content} ${styles.contentBox} container py-2 rounded`}
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
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
