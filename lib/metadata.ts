// lib/metadata.ts
import type { Metadata } from "next";

export const siteConfig = {
  title: "John Peter Ndikubwimana",
  description: "Healthcare Management | Global Health | Mental Health | Research Professional",
  url: "https://your-domain.com", // Replace with your domain
  ogImage: "/og-image.png",
  twitterHandle: "@yourhandle",
  githubHandle: "yourgithub",
  linkedinHandle: "yourlinkedin",
  email: "johnpeter.ndikubwimana@example.com",
};

// Default metadata for the entire site
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Healthcare Management",
    "Global Health",
    "Mental Health",
    "Clinical Psychology",
    "Psycho-Oncology",
    "Research Professional",
    "Health Systems Strengthening",
    "Quality Improvement",
    "Rwanda Health",
    "Public Health",
    "Maternal Health",
    "Child Health",
    "Sexual Reproductive Health",
  ],
  authors: [
    {
      name: "John Peter Ndikubwimana",
    },
  ],
  creator: "John Peter Ndikubwimana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// Helper function to create page-specific metadata
export function createMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;
  
  return {
    title: title || siteConfig.title,
    description: description || siteConfig.description,
    openGraph: {
      url,
      title: title || siteConfig.title,
      description: description || siteConfig.description,
    },
    alternates: {
      canonical: url,
    },
  };
}