import { useEffect, useState } from "react";

// import React, { useState, useEffect } from "react";
const slidingImages = [
  {
    id: 1,
    title: "Aluminium",
    cat: "Cups",
    imgUrl: "/demo-product-showcase-slider-01.jpg",
  },
  {
    id: 2,
    title: "Stainless",
    cat: "Frame",
    imgUrl: "/demo-product-showcase-slider-02.jpg",
  },
  {
    id: 3,
    title: "canopy",
    cat: "Spanning",
    imgUrl: "/demo-product-showcase-slider-03.jpg",
  },
  {
    id: 4,
    title: "Mesh",
    cat: "Textile",
    imgUrl: "/demo-product-showcase-slider-04.jpg",
  },
  {
    id: 5,
    title: "Digital",
    cat: "Control",
    imgUrl: "/demo-product-showcase-slider-05.jpg",
  },
  {
    id: 6,
    title: "Audible",
    cat: "Range",
    imgUrl: "/demo-product-showcase-slider-06.jpg",
  },
  {
    id: 7,
    title: "Fidelity",
    cat: "Audio",
    imgUrl: "/demo-product-showcase-slider-07.jpg",
  },
];

const SlidingImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide + 1 + slidingImages.length) % slidingImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, slidingImages.length]);

  return (
    <div className="flex items-center justify-center flex-wrap list-none gap-4 py-10">
      {slidingImages.map((image, index) => (
        <li
          key={image.id}
          className={`flex flex-col items-center justify-center gap-2 ${
            index === currentSlide ? "opacity-100" : "opacity-50"
          }`}
        >
          <img className="rounded-full" src={image.imgUrl} alt={image.title} />
          <h5 className="text-white text-xl font-semibold">{image.title}</h5>
          <p className="text-gray-500">{image.cat}</p>
        </li>
      ))}
    </div>
  );
};

export default SlidingImages;
