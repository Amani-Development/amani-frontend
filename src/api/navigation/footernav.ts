import twitter from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import vectorImage from "../../assets/icons/footerVector.svg";

export const FooterNavigation = {
  learn: [
    { name: "How to", href: "" },
    { name: "Privacy Policy", href: "" },
  ],
  company: [
    { name: "company", href: "/about-us" },
    { name: "Terms & Service", href: "/careers" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/zest-payment",
      icon: linkedinIcon,
    },

    {
      name: "Instagram",
      href: "https://instagram.com/zestpayment",
      icon: instagramIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/zestpayment",
      icon: twitter,
    },
    {
      name: "Youtube",
      href: "https://twitter.com/zestpayment",
      icon: youtubeIcon,
    },
    {
      name: "TikTok",
      href: "https://twitter.com/zestpayment",
      icon: tiktokIcon,
    },
  ],
  vector: vectorImage,
};
