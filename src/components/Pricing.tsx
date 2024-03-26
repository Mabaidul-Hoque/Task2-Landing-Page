// import React from 'react'

import React from "react";

const products = [
  {
    id: 1,
    imgUrl: "/demo-product-showcase-product-01.png",
    colorTitle: "Silver",
    color: "from-[#D0D0D0] to-[#9D9D9D]",
  },
  {
    id: 2,
    imgUrl: "/demo-product-showcase-product-02.webp",
    colorTitle: "Blue",
    color: "from-blue-100 to-blue-900",
  },
  {
    id: 3,
    imgUrl: "/demo-product-showcase-product-03.png",
    colorTitle: "Pink",
    color: "from-pink-200 to-pink-900",
  },
  {
    id: 4,
    imgUrl: "/demo-product-showcase-product-04.png",
    colorTitle: "Gray",
    color: "from-gray-200 to-gray-900",
  },
];
interface PricingProps {
  scrollToSection: (value: string) => void;
}
const Pricing: React.FC<PricingProps> = ({ scrollToSection }) => {
  return (
    <>
      <h1 className="text-center text-gray-800 text-[35px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] w-[90%] sm:[80%] lg:w-[75%] xl:w-2/3 leading-none font-bold mx-auto mb-20">
        Choose the perfect product for you
      </h1>
      {/* LIST OF PRODUCTS */}
      <ul className="list-none flex items-center justify-center flex-wrap gap-20 px-10">
        {products.map((product) => (
          <li key={product.id} className="flex flex-col items-center gap-4">
            <img
              width={200}
              className="hover:scale-125 transform ease-in-out duration-500 cursor-pointer"
              src={product.imgUrl}
              alt={product.colorTitle}
            />
            <p
              className={`w-12 h-12 rounded-full  bg-gradient-to-b ${product.color}`}
            />
            <p className="text-xl font-semibold text-gray-700">
              {product.colorTitle}
            </p>
          </li>
        ))}
      </ul>
      {/* PRICING CARD */}
      <div className="flex items-center justify-center text-white py-10">
        <p className="bg-gray-900 px-2 sm:px-12 md:px-20 lg:px-24 py-3 sm:py-6 text-md sm:text-2xl rounded-l font-semibold">
          Just $999
        </p>
        <button
          onClick={() => scrollToSection("pre-registration")}
          className="bg-gradient-to-r from-[#F91F83] to-[#B02EA5] px-2 sm:px-10 md:px-16 lg:px-20 py-3 sm:py-6 text-md sm:text-2xl font-semibold hover:from-[#A62CAD] hover:to-[#841CD1] rounded-r"
        >
          Pre-Booking Registration
        </button>
      </div>
    </>
  );
};

export default Pricing;
