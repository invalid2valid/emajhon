import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const LandingPage = () => {
  const [pic, setPic] = useState(1);
  let index = 1;

  return (
    <div className="min-h-[85vh] my-10 max-w-[1440px] mx-auto flex justify-around items-center gap-20">
      <div>
        <p className="text-[#FF9900]">Sale up to 70% off</p>
        <div className="my-16">
          <h1 className="text-6xl font-bold my-2">New Collection For Fall</h1>
          <p className="text-[#2A414F] text-2xl">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>
        <button className="bg-[#FF9900] h-14 w-[203px] rounded-lg text-[#0E161A] text-[25px]">
          <Link to="/shop">SHOP NOW</Link>
        </button>
      </div>
      <div className="relative">
        {/* <div className="w-[451px] bg-[#FFE0B3]  h-[633px] rounded-lg"></div>
        <div className="w-[451px] h-[633px] absolute -top-3 bg-slate-400 -right-3 rounded-lg">
          <img
            className="object-cover rounded-lg  w-[451px] h-[633px]"
            src="photo/1.jpg"
            alt=""
          />
        </div> */}
        <Login></Login>
      </div>
    </div>
  );
};

export default LandingPage;
