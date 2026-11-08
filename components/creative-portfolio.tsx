"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Aperture,
  Box,
  CheckCircle2,
  Image as ImageIcon,
  Layers3,
  Mail,
  Palette,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const filters = [
  "All",
  "Retouching",
  "Product imagery",
  "Annotation",
  "Color grading",
  "2D illustration",
  "3D visual",
] as const;

type Filter = (typeof filters)[number];

const projects = [
  {
    number: "01",
    title: "Portrait retouching study",
    category: "Retouching",
    description:
      "A before-and-after visual study focused on balanced exposure, natural-looking skin detail and a consistent portrait finish.",
    position: "0% 0%",
    alt: "Conceptual before and after portrait retouching comparison",
    tools: ["Portrait cleanup", "Tone balance", "Detail control"],
  },
  {
    number: "02",
    title: "Product image presentation",
    category: "Product imagery",
    description:
      "A studio-style product concept exploring clean product separation, controlled lighting and a more expressive background.",
    position: "50% 0%",
    alt: "Conceptual headphones product visual on a studio background",
    tools: ["Product cutout", "Studio composition", "Background design"],
  },
  {
    number: "03",
    title: "Object annotation concept",
    category: "Annotation",
    description:
      "A visual example of object-level annotation, with illustrative boxes and segmentation overlays for common street-scene objects.",
    position: "100% 0%",
    alt: "Conceptual street scene with object detection boxes and segmentation overlays",
    tools: ["Bounding boxes", "Object categories", "Segmentation concept"],
  },
  {
    number: "04",
    title: "Landscape color grade",
    category: "Color grading",
    description:
      "A landscape comparison demonstrating a warmer palette, deeper contrast and a more defined visual mood.",
    position: "0% 100%",
    alt: "Before and after landscape color grading comparison",
    tools: ["Color correction", "Contrast", "Mood and tone"],
  },
  {
    number: "05",
    title: "Editorial 2D illustration",
    category: "2D illustration",
    description:
      "A stylized illustration study using simplified forms, a focused palette and a clear focal point for editorial use.",
    position: "50% 100%",
    alt: "Colorful stylized editorial illustration concept",
    tools: ["Composition", "Color palette", "Visual hierarchy"],
  },
  {
    number: "06",
    title: "3D still-life concept",
    category: "3D visual",
    description:
      "An abstract product-style scene exploring depth, material contrast, shadow and geometric balance.",
    position: "100% 100%",
    alt: "Minimal abstract three-dimensional still-life composition",
    tools: ["3D look development", "Lighting study", "Composition"],
  },
] as const;

const capabilities = [
  {
    number: "01",
    icon: ImageIcon,
    title: "Digital imaging",
    description: "Image cleanup, retouching, tonal refinement and detail-aware enhancement.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Cutouts & compositing",
    description: "Background removal, masking, object isolation and clean visual combinations.",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Image annotation",
    description: "Careful object identification, bounding-box labelling and segmentation concepts.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Graphic design & 2D",
    description: "Layout studies, illustration, colour systems and clear visual hierarchy.",
  },
  {
    number: "05",
    icon: Box,
    title: "Product & 3D visuals",
    description: "Product presentation concepts, dimensional forms, lighting and material studies.",
  },
  {
    number: "06",
    icon: Aperture,
    title: "Photo finishing",
    description: "Colour correction, consistency checks, cropping and export-ready presentation.",
  },
];

const workflow = [
  ["01", "Understand the brief", "Confirm the target, reference, output size and annotation or editing rules."],
  ["02", "Inspect the image", "Review image quality, edges, important details and any ambiguous areas."],
  ["03", "Edit or annotate", "Apply the requested treatment consistently without adding unnecessary changes."],
  ["04", "Quality check", "Check accuracy, edges, labels, visual consistency and final export requirements."],
];

export function CreativePortfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d12] text-[#f4f2ee] selection:bg-[#d7a36a]/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7a36a]/40 bg-[#d7a36a]/10 font-serif text-lg text-[#e6bc8e]">
              SN
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.18em]">VISUAL WORKS</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/45">
                Digital imaging · Graphic design
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#work">Selected work</a>
            <a className="transition hover:text-white" href="#capabilities">Capabilities</a>
            <a className="transition hover:text-white" href="#process">Workflow</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#e6bc8e] px-4 py-2.5 text-xs font-semibold text-[#17130f] transition hover:bg-[#f0cda6] sm:text-sm"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section id="top" className="relative scroll-mt-24">
        <div className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-[#8b5cf6]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-56 h-96 w-96 rounded-full bg-[#d7a36a]/10 blur-[130px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7a36a]/30 bg-[#d7a36a]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e6bc8e] sm:text-xs">
              <Sparkles size={14} /> A visual portfolio
            </div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/45">
              Digital imaging / 2D design / annotation
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
              Images with
              <span className="block font-serif italic font-normal text-[#e6bc8e]">intention.</span>
              Design with detail.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              A focused showcase of visual concepts across image refinement, product presentation,
              photo compositing, graphic design, 2D illustration and image annotation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e6bc8e] px-6 py-3.5 text-sm font-semibold text-[#17130f] transition hover:-translate-y-0.5 hover:bg-[#f0cda6]"
              >
                Explore selected work <ArrowDown size={16} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/35 hover:bg-white/5"
              >
                View capabilities <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Photo editing", "Background removal", "2D artwork", "Image annotation"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/55">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d7a36a]/15 via-transparent to-[#8b5cf6]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#171a22] p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[1.35/1] overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/creative/portfolio-cover.webp"
                  alt="Collage of conceptual digital imaging, graphic design, photo editing and image annotation examples"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">The visual index</p>
                    <p className="mt-2 text-xl font-semibold sm:text-2xl">A collection of visual studies</p>
                  </div>
                  <span className="rounded-full border border-white/25 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                    06 explorations
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-right text-[10px] leading-5 text-white/35">
              Concept showcase · AI-assisted sample visuals
            </p>
          </motion.div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-t border-white/10 bg-[#10131a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6bc8e]">01 / Selected work</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Visuals, explored <span className="font-serif italic font-normal text-[#e6bc8e]">from every angle.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Browse the collection by task type. Each card represents a visual concept and the
                kind of detail that matters in a production brief.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={[
                    "rounded-full border px-3.5 py-2 text-xs transition",
                    activeFilter === filter
                      ? "border-[#e6bc8e] bg-[#e6bc8e] text-[#17130f]"
                      : "border-white/12 text-white/55 hover:border-white/30 hover:text-white",
                  ].join(" ")}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.article
                  layout
                  key={project.number}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.28 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171b24] transition hover:-translate-y-1 hover:border-[#d7a36a]/45 hover:shadow-2xl hover:shadow-black/25"
                >
                  <div
                    role="img"
                    aria-label={project.alt}
                    className="relative aspect-[16/9] overflow-hidden bg-[#242a35] bg-no-repeat transition duration-500 group-hover:scale-[1.01]"
                    style={{
                      backgroundImage: "url('/creative/portfolio-samples.webp')",
                      backgroundSize: "300% 200%",
                      backgroundPosition: project.position,
                    }}
                  >
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0b0d12]/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                      AI-assisted concept
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur">
                      {project.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e6bc8e]">
                        {project.category}
                      </span>
                      <ArrowUpRight size={16} className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e6bc8e]" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/55">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-md bg-white/[0.055] px-2.5 py-1.5 text-[10px] text-white/55">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6bc8e]">02 / Capabilities</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              A toolkit for <span className="font-serif italic font-normal text-[#e6bc8e]">clearer visuals.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
              The showcase is organised around the core task areas requested in digital imaging
              and visual-content workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="group bg-[#11151d] p-7 transition hover:bg-[#171c26] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#e6bc8e]/65">{item.number}</span>
                    <Icon size={21} className="text-[#e6bc8e]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-y border-white/10 bg-[#10131a] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6bc8e]">03 / Workflow</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Detail is the <span className="font-serif italic font-normal text-[#e6bc8e]">difference.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55">
              A simple quality-first sequence for completing image editing and annotation briefs
              with consistency and care.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {workflow.map(([number, title, description]) => (
              <div key={number} className="grid gap-3 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                <span className="font-mono text-sm text-[#e6bc8e]">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-[#d7a36a]/25 bg-[#d7a36a]/[0.06] p-6 sm:flex-row sm:items-start sm:p-8">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d7a36a]/15 text-[#e6bc8e]">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#f4e0c9]">A note about these samples</h2>
              <p className="mt-2 max-w-4xl text-xs leading-6 text-white/55 sm:text-sm">
                The images in this showcase are AI-assisted conceptual visuals created to demonstrate
                visual directions and task categories. They are not presented as client commissions,
                manually retouched originals, or proof of prior production work. Practical editing and
                annotation ability should be assessed through original work samples or a skills test.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-20 pt-12 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1b202a] to-[#11141b] px-7 py-14 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6bc8e]">04 / Contact</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Have a visual task in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            For digital imaging, 2D annotation, photo editing or graphic design briefs, get in touch
            to discuss the task requirements and expected output.
          </p>
          <a
            href="mailto:surajn2004@gmail.com?subject=Digital%20Imaging%20and%20Graphic%20Design%20Enquiry"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e6bc8e] px-7 py-4 text-sm font-semibold text-[#17130f] transition hover:-translate-y-0.5 hover:bg-[#f0cda6]"
          >
            <Mail size={17} /> Contact by email <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:text-left">
          <span>Suraj Narayan · Visual Works</span>
          <span>Digital imaging · Graphic design · Visual annotation</span>
          <a href="#top" className="transition hover:text-white/70">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
