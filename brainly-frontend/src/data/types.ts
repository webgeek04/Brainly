export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: { href: string; label: string }[];
}