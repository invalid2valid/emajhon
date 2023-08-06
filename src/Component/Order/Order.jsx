import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  const [price, setPrice] = useState(0);

  const data = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    let temp = 0;
    data.forEach((element) => {
      temp = temp + element.price;
      setPrice(temp);
      console.log(element.price);
    });
  }, []);
  console.log(data);
  return (
    <div className="w-[1440px] mx-auto min-h-[85vh] my-10 p-2 flex justify-around">
      <div className="">
        {data &&
          data.map((ele) => (
            <div
              key={ele.id}
              className="w-[600px] h-[110px] border-[2px] border-gray-200 my-2 rounded-md flex items-center"
            >
              <div className="h-[90x] w-[90px]">
                <img src={ele.img} className="m-2 rounded-sm" alt="" />
              </div>
              <div className="mx-4 flex items-center justify-between w-full">
                <div>
                  <h6 className="text-xl leading-6">{ele.name}</h6>
                  <p className="mt-[6px]">Price: ${ele.price}</p>
                  <p className="mt-[6px]">Shoping Charge: ${2}</p>
                </div>
                {/* <div className=" bg-red-200 p-4 rounded-full">
                  <FaTrashAlt className="text-2xl  text-red-700 " />
                </div> */}
              </div>
            </div>
          ))}
      </div>
      <div className="rounded-lg bg-[#FFE0B3] w-1/5 h-[400px] flex flex-col p-6 text-center gap-5 text-lg font-semibold">
        <h2>Item: {data.length}</h2>
        <p> Price: ${price}</p>
        <p>Tax: $5</p>
        <p>Shiping: ${data.length * 2}</p>
        <p>Total: ${price + 5 + data.length * 2}</p>
        <div className="w-full">
          {/* <button
            onClick={handleClearCart}
            className="bg-[#FF3030] h-[48px] w-full rounded-lg mt-5 mb-4 flex justify-center items-center gap-2 text-white"
          >
            <span>Clear Cart</span> <FaTrashAlt />
          </button> */}
          <ToastContainer />
          <Link to="/thankyou">
            <button className="bg-[#FF9900] h-[48px] w-full rounded-lg mt-5 mb-4 flex justify-center items-center gap-2 text-white ">
              <span>Confirm Order </span> <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
