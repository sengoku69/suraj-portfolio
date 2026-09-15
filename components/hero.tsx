"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { SocialIcon } from "./ui/social-icon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const socials = [
  { icon: "github", href: "https://github.com/sengoku69", label: "GitHub" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/suraj-narayan-484ab623a/", label: "LinkedIn" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/4 h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 rounded-full bg-accent blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 pt-28 pb-24 sm:px-6 sm:pt-32 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Suraj Narayan
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-muted-foreground sm:text-2xl"
          >
            Data Analyst · AI/ML Enthusiast
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Turning data into decisions
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              from pipeline to insight
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-xl"
          >
            Building analytics pipelines and machine learning systems that turn complex, messy data
            into clear and practical insight
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#projects">
                <span>View my work</span>
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                <Mail size={18} aria-hidden />
                <span>Get in touch</span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 transition-all duration-200 hover:scale-110 hover:bg-foreground/5"
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} className="h-5 w-5" />
              </a>
            ))}
            <a
              href="mailto:surajn2004@gmail.com"
              className="rounded-full p-3 transition-all duration-200 hover:scale-110 hover:bg-foreground/5"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground/20 p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-foreground/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
