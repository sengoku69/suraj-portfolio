"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";

const technologies = {
  "Data & Analytics": [
    "SQL",
    "Power BI",
    "SAP Analytics Cloud",
    "Pandas",
    "NumPy",
    "ETL Pipelines",
    "Data Validation",
    "Exploratory Data Analysis",
  ],
  "AI & Machine Learning": [
    "Python",
    "LangChain",
    "LangGraph",
    "Machine Learning",
    "LLM APIs",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
  ],
  "Software Engineering": [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "FastAPI",
    "Express",
    "REST APIs",
    "Git",
  ],
  "Web & UI": ["Next.js", "Tailwind CSS", "Vite", "MongoDB"],
  "Tools & Platforms": ["GitHub", "VS Code", "Jupyter", "Excel", "SQLite"],
  "ML & Optimisation": [
    "Scikit-learn",
    "XGBoost",
    "PuLP",
    "NLTK",
    "Regression Models",
    "K-Means",
    "RFM Analysis",
    "Matplotlib",
  ],
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative scroll-mt-24 bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">
            Technology Stack
          </span>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tools &amp; Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The stack I work with across data analytics, machine learning, and software engineering
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="mb-4 text-lg font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
