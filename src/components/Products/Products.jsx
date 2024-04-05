import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-10.jpg";
import Img5 from "../../assets/product/p-11.jpg";
import Img6 from "../../assets/product/p-12.jpg";
import Img7 from "../../assets/product/p-13.jpg";
import Img8 from "../../assets/product/p-14.jpg";
import Img9 from "../../assets/product/p-15.jpg";
import Img10 from "../../assets/product/p-16.jpg";
import Img11 from "../../assets/product/p-17.jpg";
import Img12 from "../../assets/product/p-18.jpg";
import Img13 from "../../assets/product/p-19.png";
import Img14 from "../../assets/product/p-20.png";
import Img15 from "../../assets/product/p-21.png";
import Img16 from "../../assets/product/p-22.png";



const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat Rockerz 440",
    price: "150",
    aosDelay: "",
  },
  {
    id: 3,
    img: Img3,
    title: "DP 500",
    price: "200",
    aosDelay: "",
  },
  {
    id: 4,
    img: Img4,
    title: "Boat Beats",
    price: "220",
    aosDelay: "bg-gray-400",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Noise fit Ultra",
    price: "110",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Fire-bolt Ninja",
    price: "170",
    aosDelay: "",
  },
  {
    id: 3,
    img: Img7,
    title: "Apple Ultra-8",
    price: "320",
    aosDelay: "",
  },
  {
    id: 4,
    img: Img8,
    title: "Fastrack Omega",
    price: "220",
    aosDelay: "",
  },
];
const ProductsData3 = [
  {
    id: 1,
    img: Img9,
    title: "Asus Tuf-15",
    price: "500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img10,
    title: "Dell",
    price: "420",
    aosDelay: "",
  },
  {
    id: 3,
    img: Img11,
    title: "HP Pavilion",
    price: "350",
    aosDelay: "",
  },
  {
    id: 4,
    img: Img12,
    title: "Lenovo-Ideapad",
    price: "320",
    aosDelay: "",
  },
];
const ProductsData4 = [
  {
    id: 1,
    img: Img13,
    title: "Play Station-5",
    price: "1000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img14,
    title: " Playstation VR",
    price: "450",
    aosDelay: "",
  },
  {
    id: 3,
    img: Img15,
    title: "JBL 2000",
    price: "650",
    aosDelay: "",
  },
  {
    id: 4,
    img: Img16,
    title: "Sony Pocket",
    price: "250",
    aosDelay: "",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container" id="products">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
        <ProductCard data={ProductsData3} />
        <ProductCard data={ProductsData4} />
      </div>
    </div>
  );
};

export default Products;
