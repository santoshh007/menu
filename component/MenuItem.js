// components/Menu.js
import React from "react";

const MenuItem = ({ title, description, price, imageSrc }) => {
  return (
    <div>
      <div className="flex">
        <div className="mb-4 md:mb-0 md:mr-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="flex-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-900 font-semibold">Price: Rs. {price}</p>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
