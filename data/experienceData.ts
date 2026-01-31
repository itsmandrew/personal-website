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
      "Developed a production-grade monitoring system for external vendors in Go (FX framework) with PostgreSQL, deployed on AWS EC2 via Kubernetes and Argo CD, cutting detection time by 60% and preventing $100K+ in downtime costs",
      "Designed and configured dynamic Datadog dashboards to visualize latency, error rates, and SLA breaches, enabling 30+ engineers to pinpoint faulty integrations quickly and reducing manual log investigation by 50%",
      "Instrumented multiple RESTful endpoints with the OpenTelemetry SDK, adding context propagation and trace/span attribution across services, increasing observability coverage by 40%",
    ],
  },
  {
    company: "Tesla",
    logo: "/logos/tesla-symbol.jpg",
    title: "Software Engineer Intern",
    date: "December 2024 - May 2025",
    points: [
      "Led the full-stack development of a factory analytics dashboard using React/TypeScript and Go, reducing Megapack production-line defects by 25% and savings over $500,000 annually in scrap and downtime costs",
      "Engineered Go REST APIs and backend logic to collect, validate, and stream Megapack factory metrics into Prometheus and Kafka, enabling event-driven monitoring across multiple production lines",
      "Architected a multi-section analytics UI, managing complex component state, conditional rendering paths, and data-dependent panels with React Hook Form and React Query for synchronization with factory metrics APIs",
    ],
  },
  {
    company: "Ingram Micro",
    logo: "/logos/ingram_micro.jpeg",
    title: "Software Engineer Intern",
    date: "June 2024 - December 2024",
    points: [
      "Integrated 5+ new data sources into Elasticsearch using Java and Spring Boot within the Kraken platform, increasing indexed product coverage by 40% and improving search reliability for 1000+ daily users",
      "Deployed and maintained Elasticsearch pipelines, implementing automated testing with JUnit and Mockito along with validation scripts to ensure data consistency, reduce indexing errors, and improve production search reliability",
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
    company: "San Antonio Spurs",
    logo: "/logos/spurs.jpeg",
    title: "Data Engineer Intern",
    date: "September 2023 - May 2024",
    points: [
      "Built and maintained 10+ ETL pipelines using Python and Apache Airflow to extract, transform, and load customer marketing data from external APIs into AWS Redshift, improving data freshness and increasing processing speed by 200%",
      "Served 10+ API endpoints supporting 5+ engineers, improving access to customer marketing data and accelerating development of internal dashboards and analytics pipelines",
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
