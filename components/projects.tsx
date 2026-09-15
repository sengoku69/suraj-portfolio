"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Brain,
  TrendingUp,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SocialIcon } from "./ui/social-icon";

const featuredHighlights = [
  {
    title: "Evidence-First Architecture",
    description: "Deterministic fact collection before LLM reasoning",
  },
  {
    title: "Multi-Agent System",
    description: "Specialized agents for repo, dependency, and test analysis",
  },
  {
    title: "Verification Layer",
    description: "Evidence verification ensures reasoning accuracy",
  },
  {
    title: "Production Ready",
    description: "Covered by an automated test suite and benchmark runs",
  },
];

const architecture = [
  { icon: GitBranch, title: "Repository Analysis", description: "Code structure and patterns" },
  { icon: Brain, title: "Evidence Collection", description: "Deterministic fact gathering" },
  { icon: TrendingUp, title: "Multi-Agent Processing", description: "Specialized analysis agents" },
  { icon: CheckCircle2, title: "LLM Reasoning", description: "Intelligent risk assessment" },
  { icon: BarChart3, title: "Verification and Report", description: "Evidence-backed findings" },
];

const projects = [
  {
    icon: TrendingUp,
    accent: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    title: "SupplyPrescript",
    description:
      "AI-powered supply-chain optimization using XGBoost delay prediction and PuLP prescriptive actions.",
    technologies: ["Python", "FastAPI", "XGBoost", "PuLP", "React", "Vite"],
    highlights: [
      "Delay prediction with XGBoost ML model",
      "Optimization-based prescriptive recommendations",
      "REST API with FastAPI backend",
      "Interactive React dashboard with Tailwind UI",
    ],
  },
  {
    icon: BarChart3,
    accent: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    title: "Data Analytics & ML Projects",
    description:
      "Data science projects from the Oasis Infobyte internship covering EDA, machine learning, and NLP applications.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
    highlights: [
      "Retail sales EDA with comprehensive analysis",
      "Customer segmentation using RFM & K-Means",
      "Sentiment analysis using NLP and ML",
      "House price prediction with regression",
    ],
  },
  {
    icon: ShoppingCart,
    accent: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
    title: "MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce app with product management, shopping cart, and RESTful API architecture.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    highlights: [
      "Complete CRUD operations for products",
      "User authentication and authorization",
      "Shopping cart and order management",
      "MongoDB database integration",
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">
            Featured Work
          </span>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Selected Projects
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Building analytical and intelligent systems that combine data, AI, and practical
            software engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-7xl sm:mb-16"
        >
          <div className="group relative overflow-hidden rounded-3xl border-2 border-accent/20 bg-gradient-to-br from-accent/[0.07] via-background to-background p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 sm:p-10 lg:p-12">
            <div
              aria-hidden
              className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/20 px-3 py-1.5 text-[11px] font-semibold text-accent backdrop-blur-sm sm:text-xs">
                FEATURED PROJECT
              </span>
            </div>

            <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div className="pt-10 sm:pt-8 lg:pt-0">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                    <Brain className="h-7 w-7 text-accent" aria-hidden />
                  </div>
                  <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                    RepoLens AI
                  </h3>
                </div>

                <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  An evidence-first multi-agent AI system for repository quality and risk analysis.
                </p>

                <div className="mb-8 space-y-4">
                  {featuredHighlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                        aria-hidden
                      />
                      <div>
                        <p className="mb-1 font-semibold text-foreground">{highlight.title}</p>
                        <p className="text-pretty text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>LangGraph</Badge>
                  <Badge>LangChain</Badge>
                  <Badge>LLM APIs</Badge>
                  <Badge>Pydantic</Badge>
                  <Badge>pytest</Badge>
                </div>

                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://github.com/sengoku69/RepoLens-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="github" className="h-4 w-4 shrink-0" />
                    <span>View on GitHub</span>
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                    />
                  </a>
                </Button>
              </div>

              <div className="rounded-2xl border border-border/50 bg-muted/50 p-6 backdrop-blur-sm sm:p-8">
                <h4 className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent">
                  System Architecture
                </h4>
                <div className="space-y-4">
                  {architecture.map((step) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                          <StepIcon className="h-5 w-5 text-accent" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="mb-0.5 font-medium text-sm">{step.title}</p>
                          <p className="text-pretty text-xs text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-muted/30 hover:shadow-xl hover:shadow-accent/5 sm:p-8"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent}`}
                >
                  <ProjectIcon className={`h-7 w-7 ${project.iconColor}`} aria-hidden />
                </div>
                <h3 className="mb-3 text-balance text-xl font-bold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <ul className="mt-auto space-y-2 text-xs text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-pretty leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
