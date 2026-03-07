import {
  House,
  Contact,
  Info,
  Braces,
  Phone,
  ChevronsLeftRightEllipsis,
  QrCode,
  Camera,
  Briefcase,
  Search,
} from "lucide-react";

import innovation from "../pages/About/svg/innovation.svg";
import quality from "../pages/About/svg/quality.svg";
import collaboration from "../pages/About/svg/collaboration.svg";
import excellence from "../pages/About/svg/excellence.svg";

export const testimonials = [
  {
    name: "Sarah M.",
    text: "EMERELD transformed our online presence. Their web design and social media management are top-notch!",
    company: "BrightStart Co.",
  },
  {
    name: "Ahmed F.",
    text: "Professional, creative, and always on time. Highly recommend their photography and print services.",
    company: "Cairo Eats",
  },
  {
    name: "Lina G.",
    text: "Booking our business trips has never been easier. EMERELD handles everything seamlessly.",
    company: "TravelPro Solutions",
  },
];

export const socialLinks = [
  // {
  //   link: "https://www.facebook.com/share/16Lj34jRgz/",
  //   icon: <Facebook color="#231f1f" />,
  // },
  // {
  //   link: "https://www.instagram.com/emereldemarkting?igsh=MW94Z2JtN3VlcHgzZQ==",
  //   icon: <Instagram color="#231f1f" />,
  // },
  {
    link: "https://wa.me/+201034016811",
    icon: <Phone color="#231f1f" />,
  },
];

export const services = [
  {
    category: "Web Design",
    description:
      "Professional online presence development with responsive designs.",
    services: [
      {
        name: "Informational Websites",
        detail: "Custom-built sites to showcase your brand and services",
      },
      {
        name: "E-commerce Stores",
        detail:
          "Secure online shops with payment integration and inventory management",
      },
      {
        name: "Google Ads",
        detail: "Targeted advertising campaigns for maximum ROI",
      },
    ],
    icon: <ChevronsLeftRightEllipsis color="#231f1f" />,
  },
  {
    category: "SEO",
    description:
      "Search Engine Optimization to boost your visibility and organic traffic.",
    services: [
      {
        name: "On-Page SEO",
        detail: "Optimize content, meta tags, and site structure for better rankings",
      },
      {
        name: "Technical SEO",
        detail: "Improve site speed, mobile-friendliness, and crawlability",
      },
      {
        name: "Keyword Research",
        detail: "Identify high-value keywords to target your ideal audience",
      },
      {
        name: "SEO Analytics",
        detail: "Track performance and refine strategies for continuous growth",
      },
    ],
    icon: <Search color="#231f1f" />,
  },
  {
    category: "Social Media Management",
    description: "Strategic content creation across major platforms.",
    services: [
      { name: "Facebook", detail: "Brand storytelling and community building" },
      {
        name: "Instagram",
        detail: "Visual content strategy and influencer collaborations",
      },
      {
        name: "TikTok",
        detail: "Trend-driven short videos for viral potential",
      },
      {
        name: "Snapchat",
        detail: "Ephemeral content for authentic engagement",
      },
    ],
    icon: <QrCode color="#231f1f" />,
  },
  {
    category: "Professional Photography",
    description: "High-quality visual content to elevate your brand's image.",
    services: [
      {
        name: "Reels & Videos",
        detail: "Engaging short-form content for social media",
      },
      {
        name: "Product Photography",
        detail: "Studio-quality images to showcase your merchandise",
      },
      {
        name: "Photo Sessions",
        detail: "Professional portraits for teams or personal branding",
      },
      {
        name: "Food Photography",
        detail: "Mouth-watering images for menus, ads, or social media",
      },
    ],
    icon: <Camera color="#231f1f" />,
  },
];
export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <House size={18} color="#CBACF9" strokeWidth={3} />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info size={18} color="#CBACF9" strokeWidth={3} />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <Braces size={18} color="#CBACF9" strokeWidth={3} />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <Briefcase size={18} color="#CBACF9" strokeWidth={3} />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Contact size={18} color="#CBACF9" strokeWidth={3} />,
  },
];

export const projects = [
  {
    title: "Dalel eltashtebat",
    image: "dalel.png",
    description:
      "A digital directory that connects homeowners in Egypt with trusted finishing (decoration & renovation) companies.",
    features: [
      "Digital directory",
      "Trusted companies",
      "Homeowner connections",
      "Egypt-wide coverage",
    ],
    yearCompleted: 2025,
    clientType: "Home Improvement",
    domain: "daleleltashtebat.online",
    url: "https://dalel-eltashtebat.online",
  },
  {
    title: "Kayan tashteeb",
    image: "kayan.png",
    description:
      "Full-service home renovation and finishing company providing affordable payment plans for quality interior and exterior remodeling services across Egypt.",
    features: [
      "Installment plans",
      "Interior design",
      "Complete renovations",
      "Material sourcing",
    ],
    yearCompleted: 2023,
    clientType: "Home Improvement",
    domain: "kayantashteeb.online",
    url: "https://kayan-tashteebbeltaqseet.online/",
  },
  {
    title: "Winch El Mohandes",
    image: "elmohandes.png",
    description:
      "Providing furniture moving services with the highest standards of quality and safety, with comprehensive solutions including furniture disassembly, assembly, and packaging, ensuring customer satisfaction and comfort.",
    features: [
      "Furniture moving",
      "Assembly/disassembly",
      "Packing services",
      "Quality assurance",
    ],
    yearCompleted: 2023,
    clientType: "Furniture Services",
    domain: "winchelmohandes-furniture.online",
    url: "https://winchelmohandes-furniture.online/",
  },
  {
    title: "Tashteeb beltaqseet",
    image: "tashteeb.png",
    description:
      "Full-service home renovation and finishing company providing affordable payment plans for quality interior and exterior remodeling services across Egypt.",
    features: [
      "Installment plans",
      "Interior design",
      "Complete renovations",
      "Material sourcing",
    ],
    yearCompleted: 2023,
    clientType: "Home Improvement",
    domain: "tashteeb-beltaqseet.com",
    url: "https://tashteeb-beltaqseet.com",
  },
  {
    title: "Car Market",
    image: "carmarket.png",
    description:
      "Comprehensive automotive service marketplace connecting car owners with trusted mechanics, parts suppliers, and service providers throughout Egypt.",
    features: [
      "Service booking",
      "Mechanic finder",
      "Parts catalog",
      "Price comparison",
    ],
    yearCompleted: 2023,
    clientType: "Automotive Marketplace",
    domain: "carmarket-eg.online",
    url: "https://carmarket-eg.online",
  },
  {
    title: "TNT Garage DE",
    image: "tnt.png",
    description:
      "Online storefront and service platform in Egypt specializing in German automobile parts and maintenance services for brands like Volkswagen, Audi, and BMW, with 24/7 rescue and towing support.",
    features: [
      "New and used German car spare parts",
      "Specialized maintenance and diagnostics",
      "24/7 rescue and towing service",
      "Nationwide delivery across Egypt",
    ],
    yearCompleted: 2024,
    clientType: "Automotive Services & E-commerce",
    domain: "tntgaragede.com",
    url: "https://tntgaragede.com",
  },
  {
    title: "Arizona",
    image: "arizona.png",
    description:
      "Gourmet desserts and custom sweets shop offering a delightful selection of cakes, pastries, and confections made with premium ingredients and artistic presentation.",
    features: [
      "Online ordering",
      "Custom cake design",
      "Event catering",
      "Nationwide delivery",
    ],
    yearCompleted: 2022,
    clientType: "Food & Beverage",
    domain: "arizona4sweet.online",
    url: "https://arizona4sweet.online",
  },
  {
    title: "Al Haitham Doors",
    image: "alhitham.png",
    description:
      "Premium door manufacturing and installation services across Egypt, offering a wide range of custom and standard designs for residential and commercial properties.",
    features: [
      "Custom door design",
      "Professional installation",
      "Wide product range",
      "Quality materials",
    ],
    yearCompleted: 2023,
    clientType: "Manufacturing & Retail",
    domain: "alhaithamdoors.online",
    url: "https://alhaithamdoors.online",
  },
  {
    title: "Winch Mohamed Bahr",
    image: "winch.png",
    description:
      "24/7 roadside assistance and towing service operating throughout Egypt, providing fast and reliable emergency vehicle recovery and transportation services.",
    features: [
      "Emergency towing",
      "Roadside assistance",
      "Vehicle recovery",
      "Nationwide service",
    ],
    yearCompleted: 2022,
    clientType: "Automotive Services",
    domain: "winchmohamedbahr.com",
    url: "https://winchmohamedbahr.com",
  },
  {
    title: "Winch Enqaz",
    image: "winchenqaz.png",
    description:
      "24/7 roadside assistance and towing service operating throughout Egypt, providing fast and reliable emergency vehicle recovery and transportation services.",
    features: [
      "Emergency towing",
      "Roadside assistance",
      "Vehicle recovery",
      "Nationwide service",
    ],
    yearCompleted: 2026,
    clientType: "Automotive Services",
    domain: "winchenqaz.com",
    url: "https://winchenqaz.com",
  },
  {
    title: "Winch Elgomhoria",
    image: "elgomhoria.png",
    description:
      "24/7 roadside assistance and towing service operating throughout Egypt, providing fast and reliable emergency vehicle recovery and transportation services.",
    features: [
      "Emergency towing",
      "Roadside assistance",
      "Vehicle recovery",
      "Nationwide service",
    ],
    yearCompleted: 2026,
    clientType: "Automotive Services",
    domain: "winchelgomhoria.com",
    url: "https://winchelgomhoria.com/",
  },
];

export const values = [
  {
    name: "Innovation",
    description:
      "We constantly innovate to deliver advanced solutions that meet evolving market needs.",
    iconLink: innovation,
  },
  {
    name: "Quality",
    description:
      "We are committed to the highest standards of quality in all our projects and services.",
    iconLink: quality,
  },
  {
    name: "Collaboration",
    description:
      "We work as a team with our clients to achieve the best results.",
    iconLink: collaboration,
  },
  {
    name: "Excellence",
    description: "We always strive for excellence in everything we deliver.",
    iconLink: excellence,
  },
];
