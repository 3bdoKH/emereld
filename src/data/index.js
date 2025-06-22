import { House, Contact, Info, Braces, Facebook, Instagram, Phone, ChevronsLeftRightEllipsis, QrCode, Camera, TicketCheck, Printer, CameraIcon } from "lucide-react";

import innovation from '../pages/About/svg/innovation.svg';
import quality from '../pages/About/svg/quality.svg';
import collaboration from '../pages/About/svg/collaboration.svg';
import excellence from '../pages/About/svg/excellence.svg';
export const testimonials = [
    {
      name: 'Sarah M.',
      text: 'EMERELD transformed our online presence. Their web design and social media management are top-notch!',
      company: 'BrightStart Co.'
    },
    {
      name: 'Ahmed F.',
      text: 'Professional, creative, and always on time. Highly recommend their photography and print services.',
      company: 'Cairo Eats'
    },
    {
      name: 'Lina G.',
      text: 'Booking our business trips has never been easier. EMERELD handles everything seamlessly.',
      company: 'TravelPro Solutions'
    }
  ];
  
export const socialLinks = [
    {
        link : "https://www.facebook.com/share/16Lj34jRgz/",
        icon :<Facebook color="#231f1f"/>,
    },{
        link: "https://www.instagram.com/emereldemarkting?igsh=MW94Z2JtN3VlcHgzZQ==",
        icon: <Instagram color="#231f1f"/>,
    },{
        link: "https://wa.me/+201095016685",
        icon: <Phone color="#231f1f"/>,
    }
]
    
export const services = [
    {
    category: "Web Design",
    description: "Professional online presence development with responsive designs.",
    services: [
        {"name": "Informational Websites", "detail": "Custom-built sites to showcase your brand and services"},
        {"name": "E-commerce Stores", "detail": "Secure online shops with payment integration and inventory management"},
        {"name": "SEO", "detail": "Search engine optimization to improve visibility and organic traffic"},
        {"name": "Google Ads", "detail": "Targeted advertising campaigns for maximum ROI"}
    ], 
    icon: <ChevronsLeftRightEllipsis color="#231f1f"/>
    },
    {
    category: "Social Media Management",
    description: "Strategic content creation across major platforms.",
    services: [
        {"name": "Facebook", "detail": "Brand storytelling and community building"},
        {"name": "Instagram", "detail": "Visual content strategy and influencer collaborations"},
        {"name": "TikTok", "detail": "Trend-driven short videos for viral potential"},
        {"name": "Snapchat", "detail": "Ephemeral content for authentic engagement"}
    ],
    icon: <QrCode color="#231f1f"/>
    },
    {
    category: "Professional Photography",
    description: "High-quality visual content to elevate your brand's image.",
    services: [
        {"name": "Reels & Videos", "detail": "Engaging short-form content for social media"},
        {"name": "Product Photography", "detail": "Studio-quality images to showcase your merchandise"},
        {"name": "Photo Sessions", "detail": "Professional portraits for teams or personal branding"},
        {"name": "Food Photography", "detail": "Mouth-watering images for menus, ads, or social media"}
    ],
    icon:<Camera color="#231f1f"/>
    },
    {
    category: "Printing Services",
    description: "Premium quality print materials for effective offline marketing.",
    services: [
        {"name": "Business Cards", "detail": "Premium cardstock with various finish options"},
        {"name": "Flyers & Brochures", "detail": "Eye-catching designs for promotions and events"},
        {"name": "Restaurant Menus", "detail": "Food photography integrated with menu design"},
        {"name": "Custom Invoice Books", "detail": "Branded financial documents with sequential numbering"},
        {"name": "Prescription Pads", "detail": "Professional medical forms with security features"},
        {"name": "Advertising Signage", "detail": "Durable indoor/outdoor signs for maximum visibility"}
    ],
    icon: <Printer color="#231f1f"/>
    },
    {
    category: "Travel Booking",
    description: "Hassle-free flight arrangements with competitive pricing.",
    services: [
        {"name": "International Flights", "detail": "Worldwide destinations with premium airline options"},
        {"name": "Domestic Flights", "detail": "Local travel with best-price guarantees"}
    ],
    icon: <TicketCheck color="#231f1f"/>
    }
]
export const navItems = [
    {
        name:'Home',
        link:'/',
        icon: <House size={18} color="#CBACF9" strokeWidth={3}/>
    },
    {
        name:'About',
        link: '/about',
        icon: <Info size={18} color="#CBACF9" strokeWidth={3}/>
    },
    {
        name:'Services',
        link:'/services',
        icon: <Braces size={18} color="#CBACF9" strokeWidth={3} />
    },
    {
        name:'Contact',
        link:'/contact',
        icon: <Contact size={18} color="#CBACF9" strokeWidth={3}/>
    }
]

export const values = [
{
    name: "Innovation",
    description: "We constantly innovate to deliver advanced solutions that meet evolving market needs.",
    iconLink: innovation
},
{
    name: "Quality",
    description: "We are committed to the highest standards of quality in all our projects and services.",
    iconLink: quality
},
{
    name: "Collaboration",
    description: "We work as a team with our clients to achieve the best results.",
    iconLink: collaboration
},
{
    name: "Excellence",
    description: "We always strive for excellence in everything we deliver.",
    iconLink: excellence
}
];