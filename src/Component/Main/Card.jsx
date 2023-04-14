import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const { img, name, seller, ratings, price, id } = data;
  // console.log("hello");
  return (
    <div className="w-[300px] h-[510px] border-2 border-[#95A0A7] rounded-md relative">
      <img
        className="w-[286px] h-[286px] m-[7px] rounded-md mx-auto"
        src={img}
        alt=""
      />
      <div className="ml-[14px]">
        <h6 className="text-xl leading-6">{name}</h6>
        <p className="mt-[6px]">Price: ${price}</p>
        <p className="mt-[6px]">Manufacturer: {seller}</p>
        <p className="mt-[6px]">Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => data.handleAddToCart(data)}
        className="items-center flex justify-center gap-3 font-bold w-full py-2 bg-[#FFE0B3]  absolute bottom-0 hover:bg-orange-400 rounded-b-md"
      >
        <p>Add to Cart</p> <ShoppingCartIcon className="h-5 " />
      </button>
    </div>
  );
};

export default Card;
