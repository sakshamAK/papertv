/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "ORIGAMI FLAMINGO - Jo Nakashima",
    views: 1543,
    chips: ["origami", "paper", "miniature"],
    thumbnail:"https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg",
    src: "https://www.youtube.com/embed/D6QM3Xed2J0",
    category: "Origami",
    creator: "Jo Nakashima"
  },
  {
    _id: uuid(),
    title: "3D Cube Stacking - Pop Up Card - Kirigami",
    views: 1543,
    chips: ["kirgami", "cubes stacking", "paper", "3d", "popup card"],
    thumbnail:"https://i.ytimg.com/vi/cScuMgYHKeM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD_1sAD2_ui20Zj1zIv6Fux5UkOQ",
    src: "https://www.youtube.com/embed/cScuMgYHKeM",
    category: "Kirigami",
    creator: "JR Paper Art"
  },
  {
    _id: uuid(),
    title: "Sculpting Spider-Man / Molding a portrait Tom Holland - Peter Parker",
    views: 1543,
    chips: ["sculpture", "clay", "modeling"],
    thumbnail:"https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g",
    src: "https://www.youtube.com/embed/HouoBQcr3zU",
    category: "Clay Modeling",
    creator: "Stecca"
  },
  {
    _id: uuid(),
    title: "How to make STOP MOTION Videos",
    views: 1543,
    chips: ["stop motion"],
    thumbnail:"https://i.ytimg.com/vi/CJ7LQXgp81w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-UdpvOWsImcY4MX8ITgBa7PbOlw",
    src: "https://www.youtube.com/embed/CJ7LQXgp81w",
    category: "Stop Motion",
    creator: "Mad Stuff With Rob"
  },
  {
    _id: uuid(),
    title: "Throwing and Trimming a Large, Indented Stoneware Bowl",
    views: 1543,
    chips: ["pottery", "clay", "decors"],
    thumbnail:"https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw",
    src: "https://www.youtube.com/embed/3a6A3_08jNo",
    category: "Pottery",
    creator: "Florian Gadsby"
  },
  {
    _id: uuid(),
    title: "Quilling Typography Tutorial|Paper quilling letter",
    views: 1543,
    chips: ["quilling", "paper", "colors"],
    thumbnail:"https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg",
    src: "https://www.youtube.com/embed/koWSpTFYLok",
    category: "Quilling",
    creator: "RRE Vlogs"
  },
  {
    _id: uuid(),
    title: "ORIGAMI FLAMINGO - Jo Nakashima",
    views: 1543,
    chips: ["origami", "paper", "miniature"],
    thumbnail:"https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg",
    src: "https://www.youtube.com/embed/D6QM3Xed2J0",
    category: "Origami",
    creator: "Jo Nakashima"
  },
  {
    _id: uuid(),
    title: "3D Cube Stacking - Pop Up Card - Kirigami",
    views: 1543,
    chips: ["kirgami", "cubes stacking", "paper", "3d", "popup card"],
    thumbnail:"https://i.ytimg.com/vi/cScuMgYHKeM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD_1sAD2_ui20Zj1zIv6Fux5UkOQ",
    src: "https://www.youtube.com/embed/cScuMgYHKeM",
    category: "Kirigami",
    creator: "JR Paper Art"
  },
  {
    _id: uuid(),
    title: "Sculpting Spider-Man / Molding a portrait Tom Holland - Peter Parker",
    views: 1543,
    chips: ["sculpture", "clay", "modeling"],
    thumbnail:"https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g",
    src: "https://www.youtube.com/embed/HouoBQcr3zU",
    category: "Clay Modeling",
    creator: "Stecca"
  },
  {
    _id: uuid(),
    title: "How to make STOP MOTION Videos",
    views: 1543,
    chips: ["stop motion"],
    thumbnail:"https://i.ytimg.com/vi/CJ7LQXgp81w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-UdpvOWsImcY4MX8ITgBa7PbOlw",
    src: "https://www.youtube.com/embed/CJ7LQXgp81w",
    category: "Stop Motion",
    creator: "Mad Stuff With Rob"
  },
  {
    _id: uuid(),
    title: "Throwing and Trimming a Large, Indented Stoneware Bowl",
    views: 1543,
    chips: ["pottery", "clay", "decors"],
    thumbnail:"https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw",
    src: "https://www.youtube.com/embed/3a6A3_08jNo",
    category: "Pottery",
    creator: "Florian Gadsby"
  },
  {
    _id: uuid(),
    title: "Quilling Typography Tutorial|Paper quilling letter",
    views: 1543,
    chips: ["quilling", "paper", "colors"],
    thumbnail:"https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg",
    src: "https://www.youtube.com/embed/koWSpTFYLok",
    category: "Quilling",
    creator: "RRE Vlogs"
  },
  {
    _id: uuid(),
    title: "ORIGAMI FLAMINGO - Jo Nakashima",
    views: 1543,
    chips: ["origami", "paper", "miniature"],
    thumbnail:"https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg",
    src: "https://www.youtube.com/embed/D6QM3Xed2J0",
    category: "Origami",
    creator: "Jo Nakashima"
  },
  {
    _id: uuid(),
    title: "3D Cube Stacking - Pop Up Card - Kirigami",
    views: 1543,
    chips: ["kirgami", "cubes stacking", "paper", "3d", "popup card"],
    thumbnail:"https://i.ytimg.com/vi/cScuMgYHKeM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD_1sAD2_ui20Zj1zIv6Fux5UkOQ",
    src: "https://www.youtube.com/embed/cScuMgYHKeM",
    category: "Kirigami",
    creator: "JR Paper Art"
  },
  {
    _id: uuid(),
    title: "Sculpting Spider-Man / Molding a portrait Tom Holland - Peter Parker",
    views: 1543,
    chips: ["sculpture", "clay", "modeling"],
    thumbnail:"https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g",
    src: "https://www.youtube.com/embed/HouoBQcr3zU",
    category: "Clay Modeling",
    creator: "Stecca"
  },
  {
    _id: uuid(),
    title: "How to make STOP MOTION Videos",
    views: 1543,
    chips: ["stop motion"],
    thumbnail:"https://i.ytimg.com/vi/CJ7LQXgp81w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-UdpvOWsImcY4MX8ITgBa7PbOlw",
    src: "https://www.youtube.com/embed/CJ7LQXgp81w",
    category: "Stop Motion",
    creator: "Mad Stuff With Rob"
  },
  {
    _id: uuid(),
    title: "Throwing and Trimming a Large, Indented Stoneware Bowl",
    views: 1543,
    chips: ["pottery", "clay", "decors"],
    thumbnail:"https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw",
    src: "https://www.youtube.com/embed/3a6A3_08jNo",
    category: "Pottery",
    creator: "Florian Gadsby"
  },
  {
    _id: uuid(),
    title: "Quilling Typography Tutorial|Paper quilling letter",
    views: 1543,
    chips: ["quilling", "paper", "colors"],
    thumbnail:"https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg",
    src: "https://www.youtube.com/embed/koWSpTFYLok",
    category: "Quilling",
    creator: "RRE Vlogs"
  },
  
];
