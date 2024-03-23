import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Drawer } from "antd";

const navItems = [
  {
    _id: 1,
    title: "Overview",
    ID: "overview",
  },
  {
    _id: 2,
    title: "Features",
    ID: "features",
  },
  {
    _id: 3,
    title: "Technology",
    ID: "technology",
  },
  {
    _id: 4,
    title: "Design",
    ID: "design",
  },
  {
    _id: 5,
    title: "Review",
    ID: "review",
  },
  {
    _id: 6,
    title: "Price",
    ID: "price",
  },
];
const Navbar = () => {
  const [activeIndx, setActiveIndx] = useState(0);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center justify-between px-8 sm:px-20 lg:px-10 xl:px-20 h-20 sticky top-0 bg-white opacity-80">
      {/* RESPONSIVE MENU */}
      <div>
        <Button onClick={showDrawer} className="lg:hidden">
          <FontAwesomeIcon className="size-5" icon={faBars} />
        </Button>
        <Drawer title="Menu" onClose={onClose} open={open}>
          {/* NAVBAR ITEMS */}
          <div className="flex flex-col items-center gap-8">
            {navItems.map((navItem, index) => (
              <p
                onClick={() => {
                  setActiveIndx(index);
                  onClose();
                }}
                key={navItem._id}
                className={`text-xl font-semibold hover:text-gray-500 cursor-pointer ${
                  activeIndx === index ? "text-gray-400" : ""
                }`}
              >
                {navItem.title}
              </p>
            ))}
          </div>
        </Drawer>
      </div>
      {/* ICON */}
      <img
        className="hidden sm:block"
        src="/demo-product-showcase-logo.webp"
        alt="product-showcase-logo"
      />
      {/* NAVBAR ITEMS */}
      <div className="items-center gap-8 hidden lg:flex">
        {navItems.map((navItem, index) => (
          <p
            onClick={() => setActiveIndx(index)}
            key={navItem._id}
            className={`text-xl font-semibold hover:text-gray-500 cursor-pointer ${
              activeIndx === index ? "text-gray-400" : ""
            }`}
          >
            {navItem.title}
          </p>
        ))}
      </div>

      {/* ORDER NOW BUTTON */}
      <button className="font-semibold flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full cursor-no-drop">
        <FontAwesomeIcon icon={faBagShopping} />
        Order now
      </button>
    </div>
  );
};

export default Navbar;
