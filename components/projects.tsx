"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SocialIcon } from "./ui/social-icon";
import {
  capabilityAreas,
  featuredProjects,
  otherProjects,
  type Project,
} from "@/lib/projects";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null;

  return (
    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
      {project.links.map((link) => (
        <Button
          key={link.href}
          size="sm"
          variant={link.label === "Live Demo" ? "outline" : "default"}
          asChild
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              project.links.length > 1
                ? `${link.label} — ${project.name}`
                : `${project.name} on GitHub`
            }
          >
            {link.label === "Live Demo" ? null : (
              <SocialIcon icon="github" className="h-4 w-4 shrink-0" />
            )}
            <span>{link.label}</span>
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </a>
        </Button>
      ))}
    </div>
  );
}

function StatRow({ project, className = "" }: { project: Project; className?: string }) {
  if (!project.stats) return null;

  return (
    <dl className={`grid grid-cols-3 gap-4 ${className}`}>
      {/* dd/dt are visually reordered (value above label) via order utilities. */}
      {project.stats.map((stat) => (
        <div key={stat.label} className="min-w-0">
          <dd className="order-1 font-mono text-lg font-semibold leading-tight tabular-nums text-accent sm:text-xl">
            {stat.value}
          </dd>
          <dt className="order-2 mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

function CapabilityList({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <ul className={`space-y-2 text-xs text-muted-foreground sm:text-sm ${className}`}>
      {project.capabilities.map((capability) => (
        <li key={capability} className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
          />
          <span className="text-pretty leading-relaxed">{capability}</span>
        </li>
      ))}
    </ul>
  );
}

function TechBadges({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {project.technologies.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  );
}

function ProjectHeader({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <>
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
          <Icon className="h-6 w-6 text-accent" aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent sm:text-xs">
            {project.category}
          </p>
          <h3 className="text-balance text-xl font-bold leading-tight tracking-tight sm:text-2xl">
            {project.name}
          </h3>
        </div>
      </div>
      <p className="mb-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {project.description}
      </p>
    </>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const asymmetric = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-background transition-colors duration-300 hover:border-accent/30"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 ${
          asymmetric ? "-right-24" : "-left-24"
        } opacity-0`}
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <ProjectHeader project={project} />
            <TechBadges project={project} className="mb-8" />
            <ProjectLinks project={project} />
          </div>

          <div className="flex flex-col gap-8">
            <CapabilityList project={project} />
            {project.stats && (
              <div className="rounded-2xl border border-border/70 bg-muted/40 p-5 sm:p-6">
                <StatRow project={project} />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function OtherProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
    >
      <ProjectHeader project={project} />
      <TechBadges project={project} className="mb-6" />
      <CapabilityList project={project} className="mb-6" />
      {project.stats && (
        <StatRow project={project} className="mb-6 rounded-2xl border border-border/70 bg-muted/40 p-4" />
      )}
      <ProjectLinks project={project} />
    </motion.article>
  );
}

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
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Building analytical and intelligent systems that combine data, AI, and practical
            software engineering
          </p>

          <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            {capabilityAreas.map((area) => {
              const AreaIcon = area.icon;
              return (
                <li
                  key={area.label}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground sm:text-sm"
                >
                  <AreaIcon className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {area.label}
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Featured Projects
            <span aria-hidden className="h-px flex-1 bg-border" />
          </motion.h3>

          <div className="space-y-6 sm:space-y-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.name} project={project} index={index} />
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 mt-16 flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:mt-20"
          >
            Other Projects
            <span aria-hidden className="h-px flex-1 bg-border" />
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <OtherProject key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
