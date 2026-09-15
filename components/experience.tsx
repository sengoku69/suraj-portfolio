"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, GraduationCap, type LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";

type Experience = {
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    type: "work",
    role: "Data Analyst",
    company: "Axlero Innovative Solutions",
    period: "2026 – Present",
    description:
      "Handling Python-based data processing, ETL pipelines, and analytical workflows to support supply-chain and business intelligence operations.",
    highlights: [
      "Built ETL pipelines for cleaning, validating, and transforming large supply-chain datasets",
      "Performed data quality checks and automated repetitive data preparation workflows",
      "Developed KPI dashboards and analytical reports using Power BI and Jupyter notebooks",
      "Queried and managed structured data using SQL and SQLite",
      "Collaborated via GitHub for version-controlled analytical workflows",
    ],
    technologies: ["Python", "Pandas", "SQL", "SQLite", "Power BI", "Jupyter", "Git"],
  },
  {
    type: "work",
    role: "Financial Data Analyst Intern",
    company: "Bluestock Fintech",
    period: "3 months",
    description:
      "AI research and financial data analysis internship focused on SAP Analytics Cloud, data pipelines, and business insight generation.",
    highlights: [
      "Conducted AI research and applied findings to financial data workflows",
      "Built and maintained ETL pipelines for financial data collection, cleaning, and transformation",
      "Analysed datasets and produced visualisations to surface business insights",
      "Worked with SAP Analytics Cloud (SAP SAC) for financial reporting and dashboards",
      "Used Python, SQL, Excel, and Power BI across data analysis and reporting tasks",
    ],
    technologies: ["Python", "SQL", "SAP Analytics Cloud", "Power BI", "Excel", "APIs"],
  },
  {
    type: "work",
    role: "Data Analyst Intern",
    company: "Oasis Infobyte",
    period: "2026",
    description:
      "Data science internship delivering end-to-end ML and analytics projects across retail, NLP, and real-estate domains.",
    highlights: [
      "Performed retail sales exploratory data analysis with trend and seasonality insights",
      "Implemented customer segmentation using RFM analysis and K-Means clustering",
      "Built a sentiment analysis system using NLTK and machine learning classifiers",
      "Developed house price prediction models using regression techniques",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
  },
  {
    type: "education",
    role: "BCA Graduate",
    company: "Somaiya Vidyavihar University",
    period: "Graduated 2025",
    description:
      "Bachelor of Computer Applications with focus on data structures, algorithms, and database systems.",
    highlights: [
      "Core coursework in data structures, algorithms, and databases",
      "Developed academic projects in Python, Java, and web technologies",
      "Built a strong foundation in programming and analytical problem solving",
    ],
    technologies: ["Python", "Java", "SQL", "Web Development"],
  },
];

function TimelineMarker({ icon: Icon, isEducation }: { icon: LucideIcon; isEducation: boolean }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
        isEducation
          ? "border-border bg-background text-muted-foreground"
          : "border-accent bg-accent text-accent-foreground"
      }`}
    >
      <Icon size={17} aria-hidden />
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="relative scroll-mt-24 bg-muted/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-muted/40 to-background/0" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">
            Experience
          </span>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Journey &amp; Learning
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Data analytics, AI research, and analytical engineering across real-world projects and
            internships
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline rail — centred on the 40px marker column */}
            <div
              aria-hidden
              className="absolute bottom-5 left-5 top-5 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block"
            />

            <ol className="space-y-6">
              {experiences.map((exp, index) => {
                const isEducation = exp.type === "education";
                const Icon = isEducation ? GraduationCap : Briefcase;

                return (
                  <motion.li
                    key={`${exp.role}-${exp.company}`}
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4 md:gap-6"
                  >
                    <div className="hidden shrink-0 flex-col items-center md:flex">
                      <TimelineMarker icon={Icon} isEducation={isEducation} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <div className="min-w-0 flex-1">
                            {/* Compact marker for small screens, where the rail is hidden */}
                            <div className="mb-3 flex items-center gap-2 md:hidden">
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                                  isEducation
                                    ? "bg-muted text-muted-foreground"
                                    : "bg-accent text-accent-foreground"
                                }`}
                              >
                                <Icon size={14} aria-hidden />
                              </span>
                              <span className="text-xs font-medium text-muted-foreground">
                                {isEducation ? "Education" : "Work"}
                              </span>
                            </div>

                            <h3 className="text-balance text-xl font-bold leading-7 text-foreground">
                              {exp.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>

                          {/* h-7 matches the h3 line box, so the chip stays optically
                              aligned with the role title however the title wraps. */}
                          <div className="flex h-7 shrink-0 items-center gap-1.5 self-start rounded-full border border-border bg-muted/50 px-3 text-xs font-medium text-muted-foreground">
                            <Calendar size={13} className="shrink-0" aria-hidden />
                            <span className="whitespace-nowrap leading-none">{exp.period}</span>
                          </div>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>

                        <ul className="mb-5 space-y-2">
                          {exp.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2.5 text-sm">
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                              />
                              <span className="text-pretty leading-relaxed text-muted-foreground">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
