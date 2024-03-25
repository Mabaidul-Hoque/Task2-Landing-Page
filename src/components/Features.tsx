import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDropletSlash,
  faHandHoldingDroplet,
  faHeadphonesSimple,
  faMicrophone,
  faTowerCell,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";

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

const Features = () => {
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
    </>
  );
};

export default Features;
