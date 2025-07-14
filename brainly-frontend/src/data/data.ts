import { Bookmark, Share, Lightbulb } from 'lucide-react';
import type { Feature, Testimonial, Step, NavItem, FooterSection } from './types';

// export const features: Feature[] = [
//   {
//     icon: <Bookmark className="w-8 h-8" />,
//     title: "Save Links Instantly",
//     description: "Capture any link with a single click and organize them in your personal brain collection."
//   },
//   {
//     icon: <Share className="w-8 h-8" />,
//     title: "Share Your Collections",
//     description: "Share your curated link collections with friends, teams, or the entire community."
//   },
//   {
//     icon: <Lightbulb className="w-8 h-8" />,
//     title: "Smart Organization",
//     description: "AI-powered categorization helps you find the perfect link when you need it most."
//   }
// ];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    text: "Brains has revolutionized how I organize my research. No more lost bookmarks!"
  },
  {
    name: "Marcus Rodriguez",
    role: "Developer",
    text: "The sharing feature is incredible. My team's productivity has increased by 40%."
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    text: "I've saved over 2,000 links and can find anything in seconds. Pure magic!"
  }
];

export const steps: Step[] = [
  { step: "1", title: "Save", description: "Add links instantly with our browser extension or web app" },
  { step: "2", title: "Organize", description: "Create themed collections and let AI help categorize your links" },
  { step: "3", title: "Share", description: "Share your curated collections with anyone, anywhere" }
];

export const navItems: NavItem[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" }
];

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "#", label: "Features" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Browser Extension" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" }
    ]
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy" }
    ]
  }
];