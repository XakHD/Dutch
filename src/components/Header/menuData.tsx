import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    submenu: [
      {
        id: 101,
        title: "Home Page",
        path: "/",
        newTab: false,
      },
      // {
      //   id: 102,
      //   title: "Home Page 2",
      //   path: "/home-2",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 2,
    title: "Dashboard",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blogs",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Docs",
  //   path: "/docs",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      // {
      //   id: 41,
      //   title: "About Page",
      //   path: "/about",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Pricing Page",
      //   path: "/pricing",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "FAQ Page",
      //   path: "/faq",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blogs",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Grid 2 Page",
      //   path: "/blogs-2",
      //   newTab: false,
      // },
      {
        id: 46,
        title: "Sign In",
        path: "/auth/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "/auth/signup",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Mail Success Page",
      //   path: "/mail-success",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
