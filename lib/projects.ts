import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Brain,
  Database,
  GraduationCap,
  Landmark,
  PieChart,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export interface ProjectLink {
  label: string;
  href: string;
  external: boolean;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  /** Display name shown on the card. */
  name: string;
  /** Short category label, e.g. "AI · Multi-Agent". */
  category: string;
  description: string;
  technologies: string[];
  /** Short capability statements — only items documented in the repository. */
  capabilities: string[];
  links: ProjectLink[];
  icon: LucideIcon;
  /** Optional verified figures from the repository's own documentation. */
  stats?: ProjectStat[];
  /** "featured" projects render as hero cards; "other" projects as compact tiles. */
  tier: "featured" | "other";
}

export const projects: Project[] = [
  {
    name: "RepoLens-AI",
    category: "AI · Multi-Agent Systems",
    description:
      "An evidence-first multi-agent AI system for repository quality and risk analysis. Deterministic tools collect the facts first, LLM agents reason over them, and a verification stage rejects findings that the evidence does not support.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI-compatible APIs",
      "Gemini",
      "Pydantic",
      "pytest",
    ],
    capabilities: [
      "Deterministic evidence collection before LLM reasoning",
      "Repository, dependency, and testing analysis agents",
      "LLM reasoning with evidence verification of findings",
      "Risk scoring and structured JSON risk reports",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/RepoLens-AI",
        external: true,
      },
    ],
    icon: Brain,
    stats: [
      { value: "39", label: "tests passed" },
      { value: "10", label: "benchmark cases" },
      { value: "90.0", label: "avg. deterministic baseline score" },
    ],
    tier: "featured",
  },
  {
    name: "SupplyPrescript",
    category: "ML · Prescriptive Optimization",
    description:
      "AI-powered predictive and prescriptive supply chain optimization system. An XGBoost model predicts shipment delay probability and duration, and a PuLP optimization layer recommends corrective actions across cost/time trade-offs.",
    technologies: ["Python", "FastAPI", "XGBoost", "PuLP", "React", "Vite", "Tailwind CSS", "SQLite"],
    capabilities: [
      "Shipment delay prediction with probability and duration",
      "XGBoost machine-learning model",
      "Prescriptive optimization with PuLP",
      "Cost/time trade-off analysis with corrective action recommendations",
      "Interactive KPI dashboard and REST API",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/muskaanyadav02/MetricMind",
        external: true,
      },
    ],
    icon: TrendingUp,
    tier: "featured",
  },
  {
    name: "TokenTrack",
    category: "Web3 · Full-Stack",
    description:
      "A Web3 wallet and token tracking dashboard built with Next.js. Connect a wallet or inspect any public Ethereum address to see balances, portfolio valuation, and transaction activity in one interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Reown AppKit",
      "TanStack React Query",
      "Etherscan API",
      "DeFiLlama API",
    ],
    capabilities: [
      "Web3 wallet connection with Ethereum Mainnet and Sepolia support",
      "ETH balance and ERC-20 token tracking",
      "Portfolio valuation and allocation visualization",
      "Public wallet address inspection",
      "Transaction activity with ERC-20 transfer tracking and details",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://tokentrack-iota.vercel.app",
        external: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/tokentrack",
        external: true,
      },
    ],
    icon: Wallet,
    tier: "featured",
  },
  {
    name: "N100 Financial Intelligence",
    category: "Financial Analytics · Data Engineering",
    description:
      "An end-to-end financial analytics platform built with Python, Pandas, SQLite, and Streamlit to process, validate, and analyze financial data for 92 Nifty 100 companies.",
    technologies: ["Python", "Pandas", "SQLite", "Streamlit", "OpenPyXL", "NumPy"],
    capabilities: [
      "ETL pipeline into a normalized SQLite database",
      "16 documented data-quality validation rules",
      "Financial ratio engine: profitability, leverage, and cash-flow KPIs",
      "CAGR calculations and investment screening",
      "Interactive Streamlit dashboard with sector analysis",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/N100_Financial_Intelligence",
        external: true,
      },
    ],
    icon: Landmark,
    stats: [
      { value: "92", label: "Nifty 100 companies" },
      { value: "16", label: "data-quality validation rules" },
    ],
    tier: "featured",
  },
  {
    name: "Mutual Fund Analytics",
    category: "Data Analytics · Power BI",
    description:
      "A data analytics project analyzing mutual fund performance, investor behavior, portfolio holdings, and industry trends using Python, SQL, and Power BI.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQLite", "Power BI"],
    capabilities: [
      "Exploratory data analysis",
      "Fund performance, investor behavior, and holdings analysis",
      "Risk metrics: Value at Risk (VaR), CVaR, and Sharpe Ratio",
      "Interactive Power BI dashboards and investment insights",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/mutual_fund_analysis",
        external: true,
      },
    ],
    icon: PieChart,
    tier: "other",
  },
  {
    name: "Supply Chain ETL Pipeline",
    category: "Data Engineering · ETL",
    description:
      "An end-to-end data-engineering ETL pipeline for a supply chain dataset: extraction, cleaning, transformation, data-quality validation, and loading into SQLite for downstream analytics.",
    technologies: ["Python", "Pandas", "SQLite", "Jupyter"],
    capabilities: [
      "Extract, profile, and schema-verify raw supply chain data",
      "Missing value handling and column standardization",
      "Validation of duplicates, dates, prices, and sales",
      "Load into SQLite with row and schema verification",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/Supply-Chain-ETL-Pipeline",
        external: true,
      },
    ],
    icon: Database,
    stats: [
      { value: "180,519", label: "rows processed" },
      { value: "51", label: "columns" },
    ],
    tier: "other",
  },
  {
    name: "Customer Segmentation ML",
    category: "Machine Learning · Clustering",
    description:
      "A machine-learning project using K-Means clustering to segment mall customers based on annual income and spending score.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"],
    capabilities: [
      "Data cleaning, EDA, and feature preparation",
      "K-Means clustering with Elbow Method and Silhouette Score",
      "Customer segmentation visualization and business insights",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/Customer-Segmentation-ML",
        external: true,
      },
    ],
    icon: Users,
    stats: [
      { value: "5", label: "optimal clusters" },
      { value: "0.555", label: "silhouette score" },
    ],
    tier: "other",
  },
  {
    name: "Oasis Infobyte — Data Analytics Projects",
    category: "Data Analytics · Internship",
    description:
      "Data analytics projects completed during the Oasis Infobyte Data Analytics Internship, covering exploratory analysis, customer segmentation, sentiment analysis, and house price prediction.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn", "Jupyter"],
    capabilities: [
      "Level 1: retail sales EDA, customer segmentation, data cleaning, sentiment analysis",
      "Level 2: house price prediction",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/sengoku69/OIBISP",
        external: true,
      },
    ],
    icon: GraduationCap,
    tier: "other",
  },
];

export const featuredProjects = projects.filter((project) => project.tier === "featured");
export const otherProjects = projects.filter((project) => project.tier === "other");

/** Categories highlighted in the section header, describing the portfolio's range. */
export const capabilityAreas = [
  { icon: Brain, label: "AI & Multi-Agent Systems" },
  { icon: TrendingUp, label: "Machine Learning" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Landmark, label: "Financial Intelligence" },
  { icon: Database, label: "Data Engineering" },
  { icon: Wallet, label: "Web3" },
] as const;
