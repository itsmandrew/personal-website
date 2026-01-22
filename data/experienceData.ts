export interface Experience {
  company: string;
  logo: string;
  title: string;
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    company: "SoFi",
    logo: "/logos/sofi-lg.png",
    title: "Software Engineer Intern",
    date: "June 2025 - September 2025",
    points: [
      "Architected and built an internal monitoring system for 10+ vendor services, reducing service level agreement breaches by 85%, cutting detection time by 60%, and avoiding over $700K in downtime-related costs",
      "Designed a real-time dashboard to visualize vendor uptime and service health, serving 40+ engineers across multiple teams and reducing manual investigation time by 50%",
    ],
  },
  {
    company: "Tesla",
    logo: "/logos/tesla-symbol.jpg",
    title: "Software Engineer Intern",
    date: "January 2025 - May 2025",
    points: [
      "Delivered a real-time data streaming system for granular assembly line metrics, reducing defects and cycle time, resulting in over $2M+ in annual cost savings for the Megapack production line",
      "Built and deployed 10+ internal APIs to streamline access to production and telemetry data, reducing data retrieval time by 70% and enabling 30+ engineers to build and debug systems more efficiently",
    ],
  },
  {
    company: "Ingram Micro",
    logo: "/logos/ingram_micro.jpeg",
    title: "Software Engineer Intern",
    date: "June 2024 - December 2024",
    points: [
      "Instrumented backend services to expose key performance metrics, improving visibility into latency, error rates, and throughput, and reducing incident detection time by 50%",
      "Implemented a centralized logging pipeline to aggregate logs across 5+ microservices, reducing log search latency by 70% and accelerating root cause analysis for engineering and support teams",
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
    logo: "/logos/uci3.svg",
    title: "Student @ UC Irvine",
    date: "September 2020 - Present",
    points: [
      "Admitted into UC Irvine in 2020 with an expected graduation date of Winter 2024",
      "Currently majoring in Computer Science with a minor in Statistics and also Informatics",
    ],
  },
];
