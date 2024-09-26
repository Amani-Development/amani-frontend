import twitter from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import vectorImage from "../../assets/icons/footerVector.svg";

export const FooterNavigation = {
  learn: [
    { name: "Demo", href: "" },
    { name: "Developers", href: "" },
    { name: "How to", href: "" },
  ],
  company: [
    { name: "Terms & Service", href: "/about-us" },
    { name: "Privacy Policy", href: "/careers" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/zestpayment",
      icon: twitter,
    },
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
  ],
  vector:vectorImage
};
