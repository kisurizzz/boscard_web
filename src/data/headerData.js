// import logo from "/images/resources/logo-1.png";
// import logo2 from "/images/resources/logo-2.png";
// import logoblack from '/images/resources/logoblack.png'
// import logowhite from '/images/resources/logowhite.png'
// import logowhite2 from '/images/resources/logowhite2.png'
// import logoblack2 from '/images/resources/logoblack2.png'
// import logoblack3 from '/images/resources/logoblack3.png'
// import logowhite3 from '/images/resources/logowhite3.png'
// import logowhite4 from '/images/resources/logowhite4.png'
// import logoblack4 from '/images/resources/logoblack4.png'

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Home One",
      //   href: "/",
      // },
      // {
      //   id: 2,
      //   name: "Home Two",
      //   href: "/home2",
      // },
      // {
      //   id: 3,
      //   name: "Header Styles",
      //   href: "/",
      //   subItems: [
      //     {
      //       id: 1,
      //       name: "Header One",
      //       href: "",
      //     },
      //     { id: 2, name: "Header Two", href: "" },
      //   ],
      // },
    ],
  },
  // {
  //   id: 2,
  //   name: "Destinations",
  //   href: "/destinations",
  //   subNavItems: [
  //     { id: 1, name: "Destinations", href: "/destinations" },
  //     { id: 2, name: "Destinations Detail", href: "/destinations-details" },
  //   ],
  // },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Tours", href: "/tours" },
      // { id: 2, name: "Tours List", href: "/tours-list" },
      // { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "/news",
  //   subNavItems: [
  //     { id: 1, name: "News", href: "/news" },
  //     { id: 2, name: "News Details", href: "/news-details" },
  //   ],
  // },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "https://www.facebook.com" },
  // { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "https://www.instagram.com" },
  // { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "fab fa-whatsapp",
      content: "+254 722 121 633",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "reservations@boscardtours.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo: "/images/resources/logo-1.png",
  logo2: "/images/resources/logo-2.png",
  logowhite: '/images/resources/logowhite.png',
  logoblack: '/images/resources/logoblack.png',
  logoblack2: '/images/resources/logowhite2.png',
  logowhite2: '/images/resources/logoblack2.png',
  logowhite3: '/images/resources/logoblack3.png',
  logoblack3: '/images/resources/logowhite3.png',
  logoblack4: '/images/resources/logoblack4.png',
  logowhite4:'/images/resources/logowhite4.png'
};

export default headerData;
