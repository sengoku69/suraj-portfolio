import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Narayan | Digital Imaging & Graphic Design",
  description:
    "A focused visual portfolio showcasing conceptual studies in digital imaging, photo editing, product presentation, graphic design, 2D illustration, image annotation and 3D visual concepts.",
  openGraph: {
    title: "Suraj Narayan | Digital Imaging & Graphic Design",
    description:
      "Conceptual visual studies across photo editing, graphic design, 2D illustration, image annotation and product imagery.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
