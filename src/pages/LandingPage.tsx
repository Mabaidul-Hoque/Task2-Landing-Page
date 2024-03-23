// import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* NAVBAR */}
      <div className="fixed top-0 w-full shadow-md z-1000">
        <Navbar />
      </div>
      {/* MAIN SECTION */}
      <div className="">
        {/* TOP CONATINER */}
        <div className="bg-[url('/bg-2.jpg')] bg-cover">
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
        </div>
        {/* OVERVIEW CONTAINER */}
        <div
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
              <h1 className="text-6xl font-bold">
                Extra bass for punchy sound.
              </h1>
              <p className="text-lg">
                Quality is guaranteed by the latest wireless technology
                including bluetooth 5.0 high quality codec support and an
                excellent 30 hour battery life.
              </p>
              <button className="bg-gray-800 px-6 py-4 text-white w-fit flex items-center justify-center rounded ">
                <span className="transform ease-in-out hover:translate-x-[10px] hover:scale-105">
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
        </div>
      </div>
      {/* FEATURES CONTAINER */}
      <div>
        {/* FEATURES HEADER */}
        <h1 className="text-center">
          <span>13</span> Exclusive features.
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
