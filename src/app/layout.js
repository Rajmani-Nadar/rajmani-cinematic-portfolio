import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";

const shouldEnableAnalytics = process.env.NODE_ENV !== "development";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = "https://sarang-space.site";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    template: "%s — Rajmani Nadar | Data Analyst • CRM Specialist • Full Stack Developer",
  },
  description:
    "Data Analyst, CRM Specialist, and Full Stack Developer based in Coimbatore, Tamil Nadu, India, building intelligent digital experiences with modern web technologies.",
  keywords: [
    "Data Analyst", "CRM Specialist", "Full Stack Developer", "Coimbatore Developer",
    "Next.js Developer", "React Developer", "CRM Systems", "Business Intelligence"
  ],
  authors: [{ name: "Rajmani Nadar", url: BASE }],
  creator: "Rajmani Nadar",
  publisher: "Rajmani Nadar",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    title: "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    description: "Data Analyst, CRM Specialist, and Full Stack Developer based in Coimbatore, Tamil Nadu, India, building intelligent digital experiences.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    description: "Data Analyst, CRM Specialist, and Full Stack Developer based in Coimbatore, Tamil Nadu, India, building intelligent digital experiences.",
    images: ["/og-image.png"],
    creator: "@rajmani_nadar",
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

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Rajmani Nadar",
      "url": BASE,
      "jobTitle": "Data Analyst • CRM Specialist • Full Stack Developer",
      "description": "Data Analyst, CRM Specialist, and Full Stack Developer based in Coimbatore, Tamil Nadu, India, building intelligent digital experiences with modern web technologies.",
      "knowsAbout": [
        "Data Analysis", "CRM Systems", "Full Stack Development", "Next.js", "React",
        "JavaScript", "TypeScript", "Node.js", "Business Intelligence", "Python",
        "PostgreSQL", "MongoDB", "UI/UX", "Dashboard Design"
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Freelance Web Developer",
          "occupationLocation": { "@type": "Country", "name": "India" },
          "skills": "React, Next.js, GSAP, Three.js, WebGL, Shopify, Flutter"
        },
        {
          "@type": "Occupation",
          "name": "Freelance Video Editor",
          "skills": "After Effects, Premiere Pro, DaVinci Resolve, Motion Graphics"
        },
        {
          "@type": "Occupation",
          "name": "Freelance Graphic Designer",
          "skills": "Figma, Photoshop, Illustrator, Lightroom"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Web Development",
            "description": "Cinematic portfolio websites, interactive landing pages, and immersive digital experiences with GSAP, Three.js, and Next.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Editing & Motion Design",
            "description": "Cinematic trailers, social media reels, motion graphics using After Effects, Premiere Pro, DaVinci Resolve"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX & Visual Design",
            "description": "Modern interface design, brand identity, posters, and visual concepts in Figma, Photoshop, Illustrator"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Development",
            "description": "Custom Shopify themes with Liquid, e-commerce store setup and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flutter App Development",
            "description": "Cross-platform mobile applications for iOS and Android"
          }
        }
      ],
      "sameAs": [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#localbusiness`,
      "name": "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
      "image": `${BASE}/og-image.png`,
      "url": BASE,
      "telephone": "+91-0000000000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "description": "Data analyst, CRM specialist, and full stack developer based in Coimbatore, Tamil Nadu, India.",
      "founder": { "@id": `${BASE}/#person` }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
      "description": "Portfolio of Rajmani Nadar, a data analyst, CRM specialist, and full stack developer building intelligent digital experiences.",
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": "Rajmani Nadar — Portfolio",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Work", "item": `${BASE}/work` },
          { "@type": "ListItem", "position": 4, "name": "About", "item": `${BASE}/about` },
          { "@type": "ListItem", "position": 5, "name": "Contact", "item": `${BASE}/contact` },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Portfolio Services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Creative Web Development",
          "description": "Crafting immersive websites with smooth interactions, cinematic layouts, and visually rich animations using React, Next.js, GSAP",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Motion & Video Editing",
          "description": "Creating trailers, reels, motion graphics, and cinematic edits using After Effects, Premiere Pro, and DaVinci Resolve",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "UI/Visual Design",
          "description": "Designing modern interfaces, branding, posters with focus on minimal aesthetics and strong visual identity",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Sarang offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sarang offers creative web development (React, Next.js, GSAP, Three.js), video editing and motion design (After Effects, Premiere Pro, DaVinci Resolve), UI/UX design (Figma, Photoshop), Shopify development, and Flutter mobile app development."
          }
        },
        {
          "@type": "Question",
          "name": "How can I hire Sarang for a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach out through the contact form at sarang-space.site/contact or email sarangwalle@gmail.com. Sarang is available for freelance projects worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Sarang work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sarang works with React, Next.js, GSAP, Three.js, WebGL, Tailwind CSS, Node.js, Flutter, Shopify Liquid, Python, TypeScript, MongoDB, PostgreSQL, and creative tools like After Effects, Premiere Pro, Figma, and Photoshop."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Sarang based and does he work remotely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sarang is based in India and is fully available for remote freelance projects worldwide. He has worked with clients across different countries and time zones."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical project take with Sarang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines depend on scope. A simple portfolio website typically takes 1–2 weeks. A full-stack web application or complex interactive site can take 3–6 weeks. Video editing projects are usually delivered within 3–7 days. Contact Sarang at sarang-space.site/contact for a specific estimate."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Sarang different from other freelance developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sarang combines three disciplines — web development, video editing, and visual design — in one person. He specializes in cinematic, immersive experiences with GSAP animations, Three.js 3D, and WebGL. His work focuses on feeling as much as function, creating digital experiences that are premium, smooth, and memorable."
          }
        },
        {
          "@type": "Question",
          "name": "What is Sarang's background and education?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sarang is a 19-year-old from India currently studying Cybersecurity. He has been freelancing since 2020 — starting with photo editing and graphic design, expanding into video editing in 2022, and full-stack web development in 2024. He has 6+ years of creative freelance experience."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Hire Sarang as a Freelance Developer or Editor",
      "description": "Steps to hire Sarang for freelance web development, video editing, or design work",
      "totalTime": "PT5M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Visit the contact page",
          "text": "Go to sarang-space.site/contact to find the contact form and inquiry options.",
          "url": `${BASE}/contact`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Describe your project",
          "text": "Fill out the contact form with your project type (website, video, design), rough scope, and timeline.",
          "url": `${BASE}/contact`
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Receive a response",
          "text": "Sarang responds within 24 hours to discuss requirements, timeline, and pricing."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Start the project",
          "text": "Once scope and pricing are agreed upon, work begins with regular updates and delivery milestones."
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": BASE,
      "name": "Sarang — Portfolio Designer, Website Developer, Video Editor & Photo Editor",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description": "Portfolio of Sarang — a freelance portfolio designer, website developer, video editor, and photo editor from India building cinematic digital experiences.",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-tagline", ".about-summary", "article p"]
      }
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        {shouldEnableAnalytics ? <TrackVisit /> : null}
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        {shouldEnableAnalytics ? <Analytics /> : null}
        <NewsletterPopup />
      </body>
    </html>
  );
}

