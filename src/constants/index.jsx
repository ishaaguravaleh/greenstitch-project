import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import img1 from "../assets/Sakshiproject/img6.png"
import img2 from "../assets/Sakshiproject/img8.0.png"
import img3 from "../assets/Sakshiproject/img7.png"
import img4 from "../assets/Sakshiproject/img9.0.png"

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Water & Energy Consumption",
    description:
      "Experience the power of scalable cloud infrastructure that grows with your business. Our secure and reliable solutions ensure seamless access to your data anytime, anywhere.",
  },
  {
    icon: <Fingerprint />,
    text: "Textile Waste & Landfills",
    description:
      "Protect your valuable data with our advanced cybersecurity measures. We tailor our security systems to your unique needs, ensuring your business remains safe from evolving threats.",
  },
  {
    icon: <ShieldHalf />,
    text: "Chemical Pollution",
    description:
      "Transform your ideas into reality with our bespoke software development services. We design high-performance applications specifically tailored to optimize your operations and enhance productivity.",
  },
  {
    icon: <BatteryCharging />,
    text: "Carbon Footprint",
    description:
      "Leverage the power of data to drive informed decision-making. Our intelligent data analytics solutions provide you with actionable insights, enabling you to stay ahead of the competition.",
  },
  {
    icon: <PlugZap />,
    text: "Unfair Employment",
    description:
      "Streamline your development processes with our expert DevOps integration. We help automate workflows, improve collaboration, and deliver high-quality software faster than ever.",
  },

];

export const checklistItems = [
  {
    title: "Social & Ethical Benefits:",
    description: "Sustainable fashion promotes ethical practices and fair labor conditions.",
    subpoints: [
      "Fair Trade & Ethical Labor",
      "Encourages Transparency",
      "Supports Artisanal Craftsmanship"
    ]
  },
  {
    title: "Health Benefits:",
    description: "Choosing sustainable fashion reduces exposure to harmful chemicals.",
    subpoints: [
      "Avoids Harmful Chemicals",
      "Better Air & Water Quality"
    ]
  },
  {
    title: "Consumer Benefits:",
    description: "Sustainable fashion offers unique designs and encourages mindful consumption.",
    subpoints: [
      "Unique & High-Quality Designs",
      "Encourages Mindful Consumption",
      "Enhances Personal Style"
    ]
  }
];


export const pricingOptions = [
  {
    title: "Clothes",

    image: img1,
  },
  {
    title: "Footwear",
    // price: "$499",
    // features: ["Cloud Solutions", "Basic Cybersecurity", "Email Support"],
    image: img2,
  },
  {
    title: "Accesories",
    // price: "$999",
    // features: [
    //   "Advanced Cloud Solutions",
    //   "Comprehensive Cybersecurity",
    //   "Custom Software Development",
    //   "24/7 Email and Chat Support",
    // ],
    image: img3,
  },

  {
    title: "Home Decor",
    image: img4,
  }
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];


export const targetItems = [
  {
    title: "Metro Cities",
    description:
      "We begin by understanding your unique business needs through in-depth consultations. Our team collaborates with you to define objectives and identify challenges.",
  },
  {
    title: "Young professionals (25-35 years old)",
    description:
      "Next, we create a tailored plan that outlines the project scope, timelines, and resource allocation. This strategic approach ensures a clear path forward for all stakeholders.",
  },
  {
    title: "Students who are more conscious about environmental issues",
    description:
      "Our experienced team executes the plan, utilizing best practices and innovative technologies. We prioritize quality and efficiency at every stage of the development process.",
  },
  {
    title: "Middle and upper-middle-class individuals",
    description:
      "After deployment, we provide continuous support and monitor performance. Our commitment to optimization ensures your solutions evolve alongside your business needs.",
  },

  {
    title: "Sustainability advocates and influencers"
  },

  {
    title: "Eco-conscious families looking to invest in long-lasting, ethical products"
  }
];



export const marketingStrategies = [
  {
    title: "Highlight sustainability in branding & product descriptions.",
    description:
      "We begin by understanding your unique business needs through in-depth consultations. Our team collaborates with you to define objectives and identify challenges.",
  },
  {
    title: "Leverage social media & influencers to attract eco-conscious buyers.",
    description:
      "Next, we create a tailored plan that outlines the project scope, timelines, and resource allocation. This strategic approach ensures a clear path forward for all stakeholders.",
  },
  {
    title: "Be transparent – Show sourcing & sustainability proof",
    description:
      "Our experienced team executes the plan, utilizing best practices and innovative technologies. We prioritize quality and efficiency at every stage of the development process.",
  },
  {
    title: "Use eco-friendly packaging for a greener brand image.",
    description:
      "After deployment, we provide continuous support and monitor performance. Our commitment to optimization ensures your solutions evolve alongside your business needs.",
  },
];


export const successStories = [
  {
    title: "Eco-Friendly Materials ",
    // price: "$0",
    // features: [
    //   "Basic Cloud Solutions",
    //   "Limited Cybersecurity Features",
    //   "Community Support",
    // ],
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Fair Trade & Ethical Sourcing",
    // price: "$499",
    // features: ["Cloud Solutions", "Basic Cybersecurity", "Email Support"],
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Worn Wear Program ",
    // price: "$999",
    // features: [
    //   "Advanced Cloud Solutions",
    //   "Comprehensive Cybersecurity",
    //   "Custom Software Development",
    //   "24/7 Email and Chat Support",
    // ],
    image: "https://via.placeholder.com/100",
  },

  {
    title: "Innovative Technologies ",
    image: "https://via.placeholder.com/100",
  },

  {
    title: "Activism & Awareness ",
    image: "https://via.placeholder.com/100",
  }
];

export const teamMembers = [
  {
    name: "Sanjana Boorela        ",
    role: "S2443",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  {
    name: "Sarthak Khandelwal ",
    role: "S2445",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  {
    name: "Shakkshi Gurvale",
    role: "S2446",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  {
    name: "Shreya Prakash",
    role: "S2447",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  {
    name: "Shrushti Tawari",
    role: "S2448",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  {
    name: "Simran Patnaik",
    role: "S2450",
    image: "https://via.placeholder.com/100", // Sample image URL
  },
  // Add more team members as needed
];