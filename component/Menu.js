import React from "react";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <div>
      <div className="mx-10 my-5">
        <MenuItem
          title="Croissant with Egg & Cheese"
          description="(Melted cheese & egg on fresh croissant)"
          price={45}
          imageSrc="/croissant.jpeg"
        />
      </div>
      <div className="mx-10 my-5">
        <MenuItem
          title="Croissant with Egg & Cheese"
          description="(Melted cheese & egg on fresh croissant)"
          price={45}
          imageSrc="/croissant.jpeg"
        />
      </div>
    </div>
  );
};
export default Menu;
