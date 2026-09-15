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
  title: "Suraj Narayan — Data Analyst · AI/ML",
  description:
    "Portfolio of Suraj Narayan, a Data Analyst working across ETL pipelines, analytics, and machine learning — with projects in AI, data science, and full-stack engineering.",
  openGraph: {
    title: "Suraj Narayan — Data Analyst · AI/ML",
    description:
      "Portfolio of Suraj Narayan, a Data Analyst working across ETL pipelines, analytics, and machine learning — with projects in AI, data science, and full-stack engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
