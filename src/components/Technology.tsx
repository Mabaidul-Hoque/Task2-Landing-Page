import {
  faHeadphonesSimple,
  faMusic,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";
import { useState } from "react";

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

const Technology = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-start sm:gap-4 gap-2 md:gap-6 lg:gap-12 xl:gap-36">
        {/* IMAGE */}
        <img
          className={`ml-[-100px] sm:ml-[-140px] md:ml-[-150px] lg:ml-[-180px] xl:ml-[-150px] w-[70vw] sm:w-[70vw] md:w-[60vw] lg:w-[55vw] xl:max-w-[50vw] sticky top-24 headpnone_logo`}
          src="/demo-product-showcase-product-05.png"
          alt="headpnoe-logo"
        />
        {/* FEATURES */}
        <div className="md:pr-10 lg:pr-12 xl:pr-32 mt-24 flex flex-col gap-20 ">
          {featuresP2.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-10">
              {feature.icon}
              <h1
                className="text-[28px] sm:text-[50px] md:text-[65px] lg:text-[90px] font-extrabold font-serif tracking-widest text-gray-900 leading-none"
                style={{
                  background:
                    "linear-gradient(90deg, #43c6ac 0%, #191654 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {feature.title}
              </h1>
              <p className="lg:text-xl text-gray-600">{feature.desp}</p>
              <button
                className="w-fit bg-gray-800 text-white px-6 py-2 sm:px-8 sm:py-4 rounded sm:text-xl transform duration-500 ease-in-out hover:scale-105 hover:translate-y-2 shadow-md shadow-gray-700"
                onClick={() => {
                  openModal();
                }}
              >
                <span className="transform ease-in-out duration-700 hover:translate-x-[10px] hover:scale-105 flex items-center sm:items-end gap-2">
                  Watch<span className="hidden sm:block"> technology</span>
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

export default Technology;
