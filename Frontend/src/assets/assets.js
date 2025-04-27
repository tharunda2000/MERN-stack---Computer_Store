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
        bgColor:"#1E90FF",

    },

    {
        text: "	Graphics Cards",
        path: "graphiccards",
        image: gpu,
        bgColor:"#FF4500",

    },

    {
        text: "Processors",
        path: "Processors",
        image: processor,
        bgColor:"#8A2BE2",

    },

    {
        text: "	Gaming Accessories",
        path: "Accessoriess",
        image: accessories,
        bgColor:"#00CED1",

    },

    {
        text: "Monitors",
        path: "Monitors",
        image: monitor,
        bgColor:"#32CD32",

    },

    {
        text: "Storage Devices",
        path: "Storage",
        image: storage,
        bgColor:"#FFD700",

    },

    {
        text: "	PC Cases",
        path: "Casings",
        image: casing,
        bgColor:"#FF69B4",

    },
]