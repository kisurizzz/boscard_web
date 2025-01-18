import logo from "@/images/resources/footer-logo.png";
import logo2 from "@/images/resources/logowhite4.png"

const social = [
  // { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "https://www.facebook.com" },
  // { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "https://www.instagram.com" },
];

const footerData = {
  logo,
  logo2,
  social,
  year: new Date().getFullYear(),
  author: "Boscard",
  about:
    "Welcome to our Tour and Travel Company.",
  icons: [
    {
      id: 1,
      icon: "fab fa-whatsapp",
      content: "+254 722 121 633",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "reservations@boscardtours.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Westlands close, Nairobi",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    // { id: 2, link: "#", title: "Community Blog" },
    // { id: 3, link: "#", title: "Rewards" },
    // { id: 4, link: "#", title: "Work with Us" },
    // { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    // { id: 1, link: "#", title: "Account" },
    // { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    // { id: 4, link: "#", title: "Affilitate Program" },
    // { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
