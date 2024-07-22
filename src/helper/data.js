// import { BsShieldFillCheck } from "react-icons/bs";
import {
  firstClass,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  lux,
  modern,
} from "./files";
import { back, back1, back2, back3 } from "./files";
import { BsShieldFillCheck, BsFillHouseLockFill, BsWifi } from "react-icons/bs";
import { PiShirtFoldedDuotone } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { FaWifi, FaMosquitoNet, FaDroplet } from "react-icons/fa6";
import { BiCabinet } from "react-icons/bi";
import {
  GiElectricalSocket,
  GiMirrorMirror,
  GiTowel,
  GiDirectorChair,
  GiTap,
} from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

const roomList = [
  {
    img: lux,
    label: "Luxurious Rooms",
    url: "/rooms/luxurious-rooms",
    font: "fantasy",
  },
  {
    img: modern,
    label: "Modern Rooms",
    url: "/rooms/modern-rooms",
    font: "Times New Roman",
  },
  {
    img: firstClass,
    label: "First-Class Rooms",
    url: "/rooms/first-class-rooms",
    font: "cursive",
  },
];

const aboutList = [
  ` Welcome to UGB Hostel, the premier accommodation for students, working
          class, bachelor and spinster, seeking a blend of comfort, convenience,
          and modern amenities. Our hostel is designed to provide a home away
          from home, ensuring a supportive and enriching environment for our
          residents.`,
  `
           At UGB Hostel, each apartment is thoughtfully equipped with
          state-of-the-art features to meet the needs of today’s students:`,
  `
           Our hostel is designed for your comfort and convenience. Your security
          is our primary concern and you'll find our customer care second to
          none.`,
  `
          Our hostel has taken important steps to live up to West Africa future
          model in the hospitality sector. With the best conference and
          banqueting facilities, tastefully furnished to a 7000-seater capacity,
          a world-class swimming pool, 824 excellently furnished rooms spread
          across`,
  `
           We have 9 different restaurants and 7 different bars serving a range
          of international cuisines, amongst other facilities. The hostel is
          equipped with a state of the art health and fitness centre comprising
          of a gym, a tennis/basket ball court, a volley ball court, a sauna,
          spa, salon, and nail studio. We have an in-house medical clinic as
          well.`,
];

const vmList = [
  "We aspire to be and preferred hostel in Calabar and West Africa as a whole",
  "We aspire to be the leading and preferred hostel in Calabar and West Africa as a whole.",

  "We are committed to exceeding clients expectations.",
  "We are dedicated to providing impeccable facilities and personalized services.",

  "We are proud to deliver genuine care, comfort and warmth to all our clents",
  "We pursue growth and development through continuous learning.",

  "We are constantly adapting to an ever-changing world.",

  "Eko Hotels & Suites... Nesting International Standards with African Hospitality.",
];

const valueList = [
  " Commitment to Excellence",

  "Pursuit of Growth",

  "Genuine Care",
  "Dedication",

  "Creativity",

  "Passion",

  "Pride",

  "Integrity and Discipline",

  "Socially and Environmentally Responsible",
];

const serviceList = [
  {
    label: "Safety and Security",
    img: img1,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Laundry Services",
    img: img2,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Serene Ambiance",
    img: img3,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Stable Power Supply",
    img: img4,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Studying Facility",
    img: img5,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Access to Internet",
    img: img6,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
  {
    label: "Constant Water Supply",
    img: img7,
    desc: "We have space for socializing and relaxing, often with TV, games, and seating areas.",
  },
];

const imgs = [
  {
    id: "jdknkn",
    img: back,
    head: "UGB",
    spanEle: "Hostels",
    des: "Your home away from home",
    btnTxt: "View Rooms",
    url: "/rooms",
  },
  {
    id: "rnrfknrk",
    img: back1,
    head: "UGB",
    spanEle: "Hostels",
    des: "Your home away from home",
    url: "",
    // btnTxt:'View Rooms'
  },
  {
    id: "f5i5n5i",
    img: back2,
    head: "UGB",
    spanEle: "Hostels",
    des: "Your home away from home",
  },
  {
    id: "ljlll6k6",
    img: back3,
    head: "UGB",
    spanEle: "Hostels",
    des: "Your home away from home",
  },
];

const linkArr = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Login",
    url: "/login",
  },
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Our Rooms",
    url: "/rooms",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];
const utilList = [
  {
    icon: FaWifi,
    label: "Free Wifi",
  },
  {
    icon: FaMosquitoNet,
    label: "Mosquito Net",
  },
  {
    icon: FaDroplet,
    label: "Hot Water",
  },
  {
    icon: BiCabinet,
    label: "Wardrobe",
  },
  {
    icon: GiElectricalSocket,
    label: "Wall Socket",
  },
  {
    icon: TbAirConditioning,
    label: "AC",
  },
  {
    icon: GiTowel,
    label: "Towel",
  },
  {
    icon: GiMirrorMirror,
    label: "Mirror",
  },
];
const names = [
  {
    path: "modern-rooms",
    name: "modern",
  },
  {
    path: "luxurious-rooms",
    name: "luxurious",
  },
  {
    path: "first-class-rooms",
    name: "first-class",
  },
];

const serviceData = [
  {
    icon: BsShieldFillCheck,
    title: "Safety & Security",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: PiShirtFoldedDuotone,
    title: "Laundry Services",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: BsFillHouseLockFill,
    title: "Serene Ambiance",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: HiLightBulb,
    title: "Stable Power Supply",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: GiDirectorChair,
    title: "Studying Facility",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: BsWifi,
    title: "Access to internet connection ",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
  {
    icon: GiTap,
    title: "Constant Water supply ",
    content:
      "24/7 CCTV Cameras, fencing alongside a round the clock security service that ensures your safety and quick response to emergency situations.",
  },
];

const roomChildList = [
  "Private bathroom",
  "Sitting Area / Study area",
  "Innovative Lighting system",
  "Balcony",
  "AC",
  "Towel rail",
  "Wardrobe",
  "Mosquito net",
  "Socket near bed",
  "Full size mirror",
  "Hot / cold water",
  "Free toiletries",
  "Bed and Bedsheets",
  [
    "Three (3) Carports",
    "Adult pool and Children pool.",
    "Lounge overlooking Lobby.",
    "Spa",
    "Gym",
    "24hours of power.",
    "24/7 internet connection",
    "2 General Lifts per Tower",
    "2 Semi lift per Tower",
  ],
];

export {
  roomList,
  aboutList,
  vmList,
  valueList,
  serviceList,
  imgs,
  linkArr,
  names,
  serviceData,
  utilList,
  roomChildList,
};
