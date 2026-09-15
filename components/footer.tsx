"use client";

import { Mail } from "lucide-react";
import { SocialIcon } from "./ui/social-icon";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: "github" as const, label: "GitHub", href: "https://github.com/sengoku69" },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suraj-narayan-484ab623a/",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#top" className="text-lg font-semibold tracking-tight">
              Suraj Narayan
            </a>
            <p className="text-sm text-muted-foreground">
              Data Analyst · AI/ML &mdash; Mumbai, India
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-all duration-200 hover:scale-110 hover:bg-foreground/5"
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
            <a
              href="mailto:surajn2004@gmail.com"
              className="rounded-full p-2 transition-all duration-200 hover:scale-110 hover:bg-foreground/5"
              aria-label="Email"
            >
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
