import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="p-6 px-10 rounded-sm max-w-[1440px] flex justify-between items-center mx-auto bg-[rgb(28,43,53)] ">
      <img src={logo} alt="" />
      <div className=" text-white flex gap-5 ">
        <a className="hover:text-orange-700" href="#">
          Homeee
        </a>
        <a className="hover:text-orange-700" href="#">
          Shop
        </a>
        <a className="hover:text-orange-700" href="#">
          Order
        </a>
        <a className="hover:text-orange-700" href="#">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Header;
