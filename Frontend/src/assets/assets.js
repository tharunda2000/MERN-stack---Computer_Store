import logo from '../assets/logo.png'
import mainBanner from '../assets/banner.png'
import smallBanner from '../assets/banner-sm.jpg'
import whiteArrow from '../assets/arrow-right-line.png'

import laptop from '../assets/laptop.png'
import gpu from '../assets/gpu.png'
import casing from '../assets/casing.png'
import accessories from '../assets/assesories.png'
import storage from '../assets/ssd.png'
import processor from '../assets/processor.png'
import monitor from '../assets/monitor.png'

export const assets = {
    logo,mainBanner,smallBanner,whiteArrow,
}

export const catagories = [
    {
        text: "Gaming Laptops",
        path: "Laptops",
        image: laptop,
        bgColor:"#87CEFA",

    },

    {
        text: "	Graphics Cards",
        path: "graphiccards",
        image: gpu,
        bgColor:"#FFA07A",

    },

    {
        text: "Processors",
        path: "Processors",
        image: processor,
        bgColor:"",
        bgColor:"#D8BFD8",

    },

    {
        text: "	Gaming Accessories",
        path: "Accessoriess",
        image: accessories,
        bgColor:"	#AFEEEE",

    },

    {
        text: "Monitors",
        path: "Monitors",
        image: monitor,
        bgColor:"#98FB98",

    },

    {
        text: "Storage Devices",
        path: "Storage",
        image: storage,
        bgColor:"#FAFAD2",

    },

    {
        text: "	PC Cases",
        path: "Casings",
        image: casing,
        bgColor:"#FFB6C1",

    },
]

export const dummyProducts = [
  {
    id: "1",
    name: "ASUS ROG Strix G15 Gaming Laptop",
    description: "Powerful gaming laptop with Ryzen 9 CPU, RTX 4070 GPU, and 16GB RAM.",
    price: 1599.99,
    offerPrice: 1439.99,
    category: "Laptops",
    image: "https://www.sense.lk/images/uploads/product/47471_2150_ASUS-G533QS-5900HX-1.png",
    brand: "ASUS",
    rating: 4.7,
    stock: 12,  
    colors: ["#000000", "#1E90FF"],
    features: [
      "AMD Ryzen 9 5900HX",
      "NVIDIA RTX 4070",
      "16GB DDR5 RAM",
      "1TB SSD"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "2",
    name: "NVIDIA GeForce RTX 4090",
    description: "Ultimate graphics card for 4K gaming and rendering tasks.",
    price: 1999.99,
    offerPrice: 1799.99,
    category: "Graphics Cards",
    image: "https://www.sense.lk/images/uploads/product/2023/04/202304251314441.png",
    brand: "NVIDIA",
    rating: 4.9,
    stock: 5,
    colors: ["#FFFFFF", "#FFD700"],
    features: [
      "24GB GDDR6X Memory",
      "DLSS 3.5 Support",
      "Ray Tracing Enabled"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "3",
    name: "Intel Core i9-14900K Processor",
    description: "Top-tier 14th Gen CPU with 24 cores and 32 threads for gamers and creators.",
    price: 699.99,
    offerPrice: 629.99,
    category: "Processors",
    image: "https://www.sense.lk/images/uploads/product/2024/04/20240402131528i9.png",
    brand: "Intel",
    rating: 4.8,
    stock: 18,
    colors: ["#0F52BA"],
    features: [
      "24 Cores / 32 Threads",
      "Turbo up to 6.0GHz",
      "Unlocked for Overclocking"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "4",
    name: "Logitech G Pro X Wireless Headset",
    description: "Professional-grade wireless gaming headset with Blue VO!CE mic technology.",
    price: 229.99,
    offerPrice: 206.99,
    category: "Accessories",
    image: "https://www.sense.lk/images/uploads/product/2024/07/20240725135045_1.png",
    brand: "Logitech",
    rating: 4.5,
    stock: 25,
    colors: ["#FFFFFF", "#000000"],
    features: [
      "DTS Headphone:X 2.0",
      "20+ Hours Battery Life",
      "Pro-G 50mm Drivers"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "5",
    name: "Odyssey G5 Monitor",
    description: "32-inch curved QHD gaming monitor with 240Hz refresh rate.",
    price: 699.00,
    offerPrice: 629.10,
    category: "Monitors",
    image: "https://www.sense.lk/images/uploads/product/52565_1643_SAMSUNG-Odyssey-G5-LC32G55TQWEXXM.png",
    brand: "Samsung",
    rating: 4.6,
    stock: 10,
    colors: ["#1E1E1E"],
    features: [
      "32-inch QHD 2560x1440",
      "240Hz Refresh Rate",
      "HDR600 Certified"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "6",
    name: "MSI SPATIUM M371 1TB M.2 NVMe",
    description: "High-performance gaming SSD with PCIe Gen4 speed.",
    price: 249.99,
    offerPrice: 224.99,
    category: "Storage",
    image: "https://www.sense.lk/images/uploads/product/2024/01/202401291321031.png",
    brand: "MSI",
    rating: 4.7,
    stock: 30,
    colors: ["#000000"],
    features: [
      "Read speeds up to 7300MB/s",
      "1TB Storage Capacity",
      "Heatsink Included"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "7",
    name: "ASUS ROG STRIX HELIOS GX601",
    description: "Premium tempered glass PC case with RGB fans included.",
    price: 169.99,
    offerPrice: 152.99,
    category: "Casings",
    image: "https://www.sense.lk/images/uploads/product/41738_3303_ASUS-ROG-STRIX-HELIOS-GX601-1.png",
    brand: "ASUS",
    rating: 4.6,
    stock: 20,
    colors: ["#FFFFFF", "#000000"],
    features: [
      "Tempered Glass Panels",
      "Pre-installed RGB Fans",
      "USB-C Front Panel Port"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "8",
    name: "GAMEMAX KG801 Mechanical Keyboard",
    description: "High-end mechanical keyboard with optical switches and dynamic lighting.",
    price: 229.99,
    offerPrice: 206.99,
    category: "Accessories",
    image: "https://www.sense.lk/images/uploads/product/52661_1569_GAMEMAX-KG801.png",
    brand: "GAMEMAX",
    rating: 4.8,
    stock: 22,
    colors: ["#000000", "#00CED1"],
    features: [
      "AXON Hyper-Processing Technology",
      "RGB Backlit",
      "PBT Double-Shot Keycaps"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "9",
    name: "ASUS ROG STRIX XG259CMS 24.5'' IPS 310Hz",
    description: "34-inch QD-OLED ultrawide gaming monitor with 175Hz refresh rate.",
    price: 1299.99,
    offerPrice: 1169.99,
    category: "Monitors",
    image: "https://www.sense.lk/images/uploads/product/2025/04/20250403172922_1.png",
    brand: "ASUS",
    rating: 4.9,
    stock: 8,
    colors: ["#1A1A1A", "#32CD32"],
    features: [
      "3440x1440 IPS Panel",
      "310Hz Refresh Rate",
      "HDR True Black 400"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  },
  {
    id: "10",
    name: "V-COLOR GOLDEN ARMIS DDR5 32GB",
    description: "High-performance DDR4 gaming memory with customizable RGB lighting.",
    price: 149.99,
    offerPrice: 134.99,
    category: "Accessories",
    image: "https://www.sense.lk/images/uploads/product/70942_541_V-COLOR-GOLDEN-ARMIS-DDR5-1.png",
    brand: "Crucial",
    rating: 4.6,
    stock: 35,
    colors: ["#FFFFFF", "#8A2BE2"],
    features: [
      "32GB (2x16GB) DDR4 6000MHz",
      "RGB Lighting",
      "Aluminum Heat Spreader"
    ],
    createdAt: "2024-04-28T10:00:00.000Z",
    updatedAt: "2024-04-28T10:00:00.000Z"
  }
];