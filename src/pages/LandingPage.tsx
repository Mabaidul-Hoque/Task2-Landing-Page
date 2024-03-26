import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import Features from "../components/Features";
import SlidingImages from "../components/SlidingImages";
import Technology from "../components/Technology";
import Pricing from "../components/Pricing";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import ProductDropdown from "../components/ProductDropdown";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductSelection = (product: string) => {
    setSelectedProduct(product);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full shadow-md">
        <Navbar scrollToSection={scrollToSection} />
      </nav>
      {/* MAIN SECTION */}
      <main className="">
        {/* TOP CONATINER */}
        <section id="top-section" className="bg-[url('/bg-2.jpg')] bg-cover">
          <div className="flex items-center justify-center pt-28">
            <img src="/demo-product-showcase-rev-slider-01.png" />
          </div>
          <div className="flex items-center justify-between px-24 mb-10">
            <div className="text-white">
              <p className="text-xl">Audio technology</p>
              <p className="text-3xl font-semibold">Adative EQ</p>
            </div>
            <div className="text-white">
              <p className="text-xl">Effective sensors</p>
              <p className="text-3xl font-semibold">Accelerometer</p>
            </div>
          </div>
          {/* VIDEO PLAY */}
          <div className="flex items-center justify-center text-2xl pb-10">
            <button
              className="bg-white px-4 py-2 rounded-full hover:bg-black hover:text-white"
              onClick={showModal}
            >
              PLAY{" "}
              <FontAwesomeIcon className="text-[#9E18C1]" icon={faCirclePlay} />{" "}
              VIDEO
            </button>
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
              width={750}
            >
              <iframe
                width="650"
                height="315"
                src="https://www.youtube.com/embed/91BUM3WhCfo?si=SsM2BxgLV8fEjcvF"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </section>
        {/* OVERVIEW CONTAINER */}
        <section
          id="overview"
          className="py-20 bg-gradient-to-b from-gray-200 to-sky-200"
        >
          {/* OVERVIEW HEADER */}
          <h1 className="text-center text-3xl mb-10">
            The best rated headphone on{" "}
            <a
              className="font-semibold hover:underline hover:text-blue-500"
              href="https://www.amazon.com/"
              target="_blank"
            >
              Amazon.com
            </a>
          </h1>
          {/* OVERVIEW MIDDLE */}
          <div className="flex items-center gap-20 mr-36">
            <img width={650} src="/demo-product-showcase-01.webp" />
            <div className="flex flex-col gap-10 mt-20">
              <h1 className="text-6xl font-bold tracking-widest text-gray-900">
                Extra bass for punchy sound
              </h1>
              <p className="text-lg">
                Quality is guaranteed by the latest wireless technology
                including bluetooth 5.0 high quality codec support and an
                excellent 30 hour battery life.
              </p>
              <button
                onClick={() => scrollToSection("features")}
                className="bg-gray-800 px-6 py-4 text-white w-fit flex items-center justify-center rounded transform duration-500 ease-in-out hover:scale-105 hover:translate-x-2 shadow-md shadow-gray-700"
              >
                <span className="transform ease-in-out duration-700 hover:translate-x-[10px] hover:scale-105">
                  Explore features
                  <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
                </span>
              </button>
            </div>
          </div>
          {/* OVERVIEW END */}
          <div className="flex items-center justify-between px-32 mt-20">
            {/* ONE */}
            <div className="flex items-center gap-4 text-2xl">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white">
                01
              </div>
              <p className="text-gray-900">Feel the shape of comfort.</p>
            </div>
            {/* TWO */}
            <div className="flex items-center gap-4 text-2xl">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white">
                02
              </div>
              <p className="text-gray-900">Transform your great journey.</p>
            </div>
            {/* THREE */}
            <div className="flex items-center gap-4 text-2xl">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white">
                03
              </div>
              <p className="text-gray-900">Hear the world around you.</p>
            </div>
          </div>
        </section>
        {/* FEATURES CONTAINER */}
        <section
          id="features"
          className="py-20 bg-gradient-to-b from-slate-200 to-emerald-200"
        >
          <Features />
        </section>
        {/* TECHNOLOGY  CONTAINER*/}
        <section
          id="technology"
          className="py-20 bg-gradient-to-b from-violet-100 to-teal-100"
        >
          <Technology />
        </section>
        {/* DESIGN  CONTAINER*/}
        <section
          id="design"
          className="py-20 bg-[url('/bg-logo-6.webp')] bg-no-repeat bg-cover bg-center min-h-screen"
        >
          <div className="flex items-center justify-center py-28">
            <h1 className="text-center text-[#EAEAEA] text-[100px] w-1/2 leading-none font-bold ">
              A radically original composition
            </h1>
          </div>
          <SlidingImages />
        </section>
        {/* DESIGN  SUB_SECTION*/}
        <section className="bg-gray-700 text-white py-10 text-center">
          <div className="flex items-center justify-center mb-8">
            <img
              width={50}
              className="bg-transparent text-red-500"
              src="https://cdn-icons-png.freepik.com/512/3355/3355318.png"
            />
          </div>
          <div className="flex items-start justify-center gap-20">
            <div className="border-b border-gray-400 w-32" />
            <p>AWARDED ERGONOMICALLY PAINLESS AWESOME HEADPHONE DESIGNED</p>
            <div className="border-b border-gray-400 w-32" />
          </div>
        </section>
        {/* PRICING CONATINER */}
        <section
          id="price"
          className="py-20 bg-gradient-to-b from-[#71c6d3] to-[#c5e3e9]"
        >
          <Pricing scrollToSection={scrollToSection} />
        </section>
        {/* PRE-BOOKING REGISTRATION FORM */}
        <div
          id="pre-registration"
          className="h-screen bg-gradient-to-b from-[#b4b3e7] to-[#8ddaa7] flex items-center justify-center gap-32 px-20"
        >
          <div className="w-1/2">
            <ImageCarousel />
          </div>
          <form className="bg-sky-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem] min-h-[50vh]">
            {/* NAME */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            {/* EMAIL  */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {/* CHOOSE PRODUCT */}
            <div className="mb-6">
              {/* <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="email"
              >
                Choose product
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="product"
                type="text"
                placeholder="Choose your favourite color"
              /> */}
              {/* PRODUCT DROPDOWN */}
              <ProductDropdown
                selectedProduct={selectedProduct}
                onSelect={handleProductSelection}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register here
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* FOOTER */}

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default LandingPage;
