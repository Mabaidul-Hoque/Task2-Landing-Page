// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDropletSlash,
  faHandHoldingDroplet,
  faHeadphonesSimple,
  faMicrophone,
  faMusic,
  faPaintbrush,
  faTowerCell,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

const featuresP1 = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon className="size-16 text-sky-400" icon={faMicrophone} />
    ),
    title: "Microphone built-in",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon className="size-16 text-sky-400" icon={faDropletSlash} />
    ),
    title: "Water resistant",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon className="size-16 text-sky-400" icon={faTowerCell} />
    ),
    title: "Powerful signal",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon className="size-16 text-sky-400" icon={faVolumeLow} />
    ),
    title: "Noise cancellation",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },

  {
    id: 5,
    icon: (
      <FontAwesomeIcon
        className="size-16 text-sky-400"
        icon={faHandHoldingDroplet}
      />
    ),
    title: "Environment friendly",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },
  {
    id: 6,
    icon: (
      <FontAwesomeIcon
        className="size-16 text-sky-400"
        icon={faHeadphonesSimple}
      />
    ),
    title: "Sleek design",
    desp: "Lorem ipsum consectetur elit eiusmod tempor incididunt.",
  },
];

const featuresP2 = [
  {
    id: 1,
    title: "Hypnotic listening",
    desp: "Quality is guaranteed by the latest wireless technology including bluetooth 5.0 high quality codec support & excellent 30 hour battery life.",
    videoUrl: "LzFLkYjay5s?si=029aIvI2oR6mNty7",
    icon: (
      <FontAwesomeIcon
        className="size-20 text-gray-300"
        icon={faHeadphonesSimple}
      />
    ),
  },
  {
    id: 2,
    title: "Dynamic designed",
    desp: "Quality is guaranteed by the latest wireless technology including bluetooth 5.0 high quality codec support & excellent 30 hour battery life.",
    videoUrl: "LzFLkYjay5s?si=029aIvI2oR6mNty7",
    icon: (
      <FontAwesomeIcon className="size-20 text-gray-300" icon={faPaintbrush} />
    ),
  },
  {
    id: 3,
    title: "Naturally interact",
    desp: "Quality is guaranteed by the latest wireless technology including bluetooth 5.0 high quality codec support & excellent 30 hour battery life.",
    videoUrl: "LzFLkYjay5s?si=029aIvI2oR6mNty7",
    icon: <FontAwesomeIcon className="size-20 text-gray-300" icon={faMusic} />,
  },
];

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* FEATURES PART ONE CONTAINER */}
      <div className="px-48">
        {/* FEATURES PART ONE HEADER */}
        <h1 className="text-center my-20 flex items-center justify-center gap-8">
          <span
            className="text-[150px] font-bold"
            style={{
              background: "linear-gradient(to bottom, #7B17DB, #E6238C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            13
          </span>
          <div className="text-5xl font-mono flex flex-col gap-2 mt-4 tracking-widest text-gray-800">
            <p>Exclusive</p>
            <p>features</p>
          </div>
        </h1>
        {/* FEATURES */}
        <div className="flex flex-wrap items-center justify-center gap-12 text-center h-[70vh]">
          {featuresP1.map((feature) => (
            <div key={feature.id} className="max-w-64">
              <div>{feature.icon}</div>
              <h2
                className="text-2xl font-semibold mt-4 mb-1 text-gray-800"
                style={{ fontFamily: "cursive" }}
              >
                {feature.title}
              </h2>
              <p className="text-lg text-gray-800">{feature.desp}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 my-20">
        <h1 className="w-fit text-white bg-green-500 rounded-full px-4 py-1">
          Impressive
        </h1>
        <h1 className="text-2xl">
          {" "}
          High quality bass and sound with much more awesome features.
        </h1>
      </div>
      {/* FEATURES PART TWO CONTAINER */}
      <div className="flex items-start gap-36">
        {/* IMAGE */}
        <img
          width={700}
          className={`ml-[-150px] sticky top-24 headpnone_logo`}
          src="/demo-product-showcase-product-05.png"
          alt="headpnoe-logo"
        />
        {/* FEATURES */}
        <div className="pr-32 mt-24 flex flex-col gap-20">
          {featuresP2.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-10">
              {feature.icon}
              <h1
                className="text-[90px] font-extrabold font-serif tracking-widest text-gray-900 leading-none"
                style={{
                  background:
                    "linear-gradient(90deg, #43c6ac 0%, #191654 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {feature.title}
              </h1>
              <p className="text-xl text-gray-600">{feature.desp}</p>
              <button
                className="w-fit bg-gray-800 text-white px-8 py-4 rounded text-xl transform duration-500 ease-in-out hover:scale-105 hover:translate-y-2 shadow-md shadow-gray-700"
                onClick={() => {
                  openModal();
                }}
              >
                <span className="transform ease-in-out duration-700 hover:translate-x-[10px] hover:scale-105 flex items-end gap-2">
                  Watch technology
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
              </button>
              <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                videoUrl={feature.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
