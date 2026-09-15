"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { SocialIcon } from "./ui/social-icon";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on Escape and lock background scroll while it is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-full transition-all duration-300",
              isScrolled
                ? "border border-border bg-background/80 px-4 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur-xl sm:px-6 sm:py-3"
                : "px-2 sm:px-6"
            )}
          >
            <motion.a
              href="#top"
              className="min-w-0 truncate text-base font-semibold tracking-tight sm:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Suraj Narayan
            </motion.a>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-full p-2 transition-colors hover:bg-foreground/5 md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-24 z-40 max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-3xl border border-border bg-background shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-border py-3 text-base font-medium text-foreground transition-colors last:border-0 hover:text-accent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <div className="mt-6 flex gap-4 border-t border-border pt-6">
                  <a
                    href="https://github.com/sengoku69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-colors hover:bg-foreground/5"
                    aria-label="GitHub"
                  >
                    <SocialIcon icon="github" className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suraj-narayan-484ab623a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-colors hover:bg-foreground/5"
                    aria-label="LinkedIn"
                  >
                    <SocialIcon icon="linkedin" className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:surajn2004@gmail.com"
                    className="rounded-full p-2 transition-colors hover:bg-foreground/5"
                    aria-label="Email"
                  >
                    <Mail size={20} aria-hidden />
                  </a>
                </div>

                <Button className="mt-6 w-full" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get in touch
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
