"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SocialIcon } from "./ui/social-icon";

const EMAIL = "surajn2004@gmail.com";
const GITHUB = "https://github.com/sengoku69";
const LINKEDIN = "https://www.linkedin.com/in/suraj-narayan-484ab623a/";

const channels = [
  { icon: "mail" as const, label: "Email", href: `mailto:${EMAIL}`, external: false },
  { icon: "github" as const, label: "GitHub", href: GITHUB, external: true },
  { icon: "linkedin" as const, label: "LinkedIn", href: LINKEDIN, external: true },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 top-1/2 h-[min(800px,120vw)] w-[min(800px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[150px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">
            Get in Touch
          </span>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              great together
            </span>
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Interested in collaborating on data analytics, AI projects, or software development?
            I&apos;d love to connect and explore opportunities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href={`mailto:${EMAIL}`}>
                <span>Send me an email</span>
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <span>View GitHub</span>
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start justify-center gap-2 sm:gap-6"
          >
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all hover:bg-foreground/5 sm:p-4"
              >
                <div className="rounded-full bg-foreground/5 p-3 transition-all group-hover:scale-110 group-hover:bg-foreground/10">
                  {channel.icon === "mail" ? (
                    <Mail size={24} aria-hidden />
                  ) : (
                    <SocialIcon icon={channel.icon} className="h-6 w-6" />
                  )}
                </div>
                <span className="text-sm font-medium">{channel.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
