"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code2, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Turning raw, messy data into clean datasets and actionable insight",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Applying ML models and LLM systems to real analytical problems",
  },
  {
    icon: Code2,
    title: "Engineering",
    description: "Building practical, maintainable pipelines and tools that hold up",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Approaching complex challenges with curiosity and systematic thinking",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // overflow-x-clip contains the +50px entrance offset below the sm breakpoint,
  // where the container has no max-width and the shifted grid would otherwise
  // extend past the right edge. It clips horizontally only — no scroll container —
  // and nothing in this section bleeds sideways by design.
  return (
    <section id="about" ref={ref} className="relative scroll-mt-24 overflow-x-clip py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">
              About
            </span>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Where data meets decisions
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="text-pretty">
                I&apos;m a BCA graduate and Data Analyst based in Mumbai, working at the intersection
                of data analytics, AI, and modern software engineering. I focus on building systems
                that are both intelligent and practical.
              </p>
              <p className="text-pretty">
                My work spans ETL pipelines and data quality, analytics and reporting with Power BI
                and SAP Analytics Cloud, and machine learning experimentation across LLMs,
                multi-agent systems, and predictive models.
              </p>
              <p className="text-pretty">
                I enjoy turning complex, messy problems into clear answers &mdash; whether that means
                cleaning a difficult dataset, building a dashboard someone actually uses, or
                exploring new AI capabilities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.25 + index * 0.1,
                  }}
                  className="group rounded-2xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/50 hover:shadow-lg hover:shadow-foreground/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon size={22} className="text-accent" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
