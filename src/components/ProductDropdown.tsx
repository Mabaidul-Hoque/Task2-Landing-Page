import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, message } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Product's color SILVER",
    key: "Silver",
    style: {
      fontSize: "16px",
    },
  },
  {
    label: "Product's color BLUE",
    key: "Blue",
    style: {
      fontSize: "16px",
    },
  },
  {
    label: "Product's color PINK",
    key: "Pink",
    style: {
      fontSize: "16px",
    },
  },
  {
    label: "Product's color GRAY",
    key: "Gray",
    style: {
      fontSize: "16px",
    },
  },
];

interface ProductDropdownProps {
  onSelect: (value: string) => void;
  selectedProduct: string;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({
  selectedProduct,
  onSelect,
}) => {
  const handleClick: MenuProps["onClick"] = ({ key }) => {
    onSelect(key);
    message.info(`You have chosen item ${key}`);
  };

  return (
    <Dropdown menu={{ items, onClick: handleClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <label
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
          value={selectedProduct}
          onChange={(e) => onSelect(e.target.value)}
        />
      </a>
    </Dropdown>
  );
};

export default ProductDropdown;
