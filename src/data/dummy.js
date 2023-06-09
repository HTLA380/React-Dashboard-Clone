import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
// import product1 from './product1.jpg';
// import product2 from './product2.jpg';
// import product3 from './product3.jpg';
// import product4 from './product4.jpg';
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
// import product8 from './product8.jpg';

export const links = [
  {
    title: "Dashboard",
    links: [{ name: "ecommerce", icon: <FiShoppingBag /> }],
  },
  {
    title: "Pages",
    links: [
      { name: "orders", icon: <AiOutlineShoppingCart /> },
      { name: "employees", icon: <IoMdContacts /> },
      { name: "customers", icon: <RiContactsLine /> },
    ],
  },
  {
    title: "Apps",
    links: [
      { name: "calendar", icon: <AiOutlineCalendar /> },
      { name: "kanban", icon: <BsKanban /> },
      { name: "editor", icon: <FiEdit /> },
      { name: "color-picker", icon: <BiColorFill /> },
    ],
  },
  {
    title: "Charts",
    links: [
      { name: "line", icon: <AiOutlineStock /> },
      { name: "bar", icon: <AiOutlineBarChart /> },
      { name: "pie", icon: <FiPieChart /> },
      { name: "financial", icon: <RiStockLine /> },
      { name: "color-mapping", icon: <BsBarChart /> },
      { name: "pyramid", icon: <GiLouvrePyramid /> },
      { name: "stacked", icon: <AiOutlineBarChart /> },
    ],
  },
];

export const CartItems = [
  {
    image: product5,
    name: "butterscotch ice-cream",
    category: "milk product",
    price: 250,
  },
  {
    image: product6,
    name: "supreme fresh tomato",
    category: "vegetable Item",
    price: 450,
  },
  {
    image: product7,
    name: "red color candy",
    category: "food item",
    price: 190,
  },
];

export const messageData = [
  {
    image: avatar2,
    title: "Roman Joined the Team!",
    description: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    title: "New message received",
    description: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    title: "New Payment received",
    description: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    title: "Jolly completed tasks",
    description: "Assign her new tasks",
    time: "1:12 AM",
  },
];
