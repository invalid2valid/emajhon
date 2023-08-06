import React, { useEffect, useState } from "react";
import ModifiedCard from "./ModifiedCard";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ModifyProduct = () => {
  const cartClear = () => toast("Your Cart Is Clear");
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const [filterBy, setFilterBy] = useState("See All");
  const [orginalData, setOrginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [control, setControl] = useState(true);

  const filterData = (data) => {
    setOrginalData(data);
    // const listFilter = data.map((item) => (
    //   <option value="{item.category}">{item.category}</option>
    // ));

    if (filterBy === "See All") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => {
          return item.category === filterBy;
        })
      );
    }
    handaleRowData(filteredData);
  };
  const handaleRowData = (rowData) => {
    if (!seeAll) {
      setData(rowData.slice(0, 6));
    } else {
      setData(rowData);
    }
  };

  // .slice(0, 12)
  useEffect(() => {
    // setLoader(true);
    fetch("http://localhost:8000/products").then((res) =>
      res.json().then((d) => {
        filterData(d);
        setLoader(false);
      })
    );
  }, [filteredData, control]);
  // console.log(data);

  const setLocatData = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loader) {
    return <h1 className="text-center min-h-screen">Loading</h1>;
  }

  return (
    <div className="relative flex min-h-[85vh] p-2 max-w-[1440px] mx-auto">
      <div className="w-4/5">
        <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 justify-items-left gap-6   ">
          {data.map((infos) => (
            <ModifiedCard
              //   handleAddToCart={handleAddToCart}
              data={infos}
              key={infos._id}
              //   deleteHandel={deleteHandel}
            ></ModifiedCard>
          ))}
        </div>
        <div className=" mt-5 flex justify-center">
          {!seeAll && (
            <button
              className="bg-[#FFE0B3] py-4 px-6 rounded-md font-semibold mx-auto"
              onClick={() => setSeeAll(true)}
            >
              See More
            </button>
          )}
        </div>
      </div>
      <div className=" w-1/5 rounded-lg   right-0">
        <div className="mb-2">
          <select
            className="bg-[#FFE0B3] text-center h-12 w-full rounded-lg font-semibold"
            name="filter"
            id="filter"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option className=" text-center " value="See All">
              See All
            </option>
            <option value="Men's Sneaker">Men's Sneaker</option>
            <option value="Bag">Bag</option>
            <option value="Cap">Cap</option>
            <option value="Earphones">Earphones</option>
            <option value="Bottle">Bottle</option>
            <option value="Men's T shirt">Men's T shirt</option>
          </select>
        </div>
        {/* <div className="rounded-lg bg-[#FFE0B3] w-full h-[440px] flex flex-col p-6 text-center gap-5 text-lg font-semibold">
          <h2>Item: {cart.length}</h2>
          <p> Price: ${price}</p>
          <p>Tax: $5</p>
          <p>Shiping: ${cart.length * 2}</p>
          <p>Total: ${cart.length * 2 + price + 5}</p>
          <div className="w-full">
            <button
              onClick={clearCart}
              className="bg-[#FF3030] h-[48px] w-full rounded-lg mt-5 mb-4 flex justify-center items-center gap-2 text-white"
            >
              <span>Clear Cart</span> <FaTrashAlt />
            </button>
            <ToastContainer />
            <Link to="/order" onClick={setLocatData}>
              <button className="bg-[#FF9900] h-[48px] w-full rounded-lg mt-5 mb-4 flex justify-center items-center gap-2 text-white ">
                <span>Review Order </span> <FaArrowRight />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

// export default Shop;

export default ModifyProduct;
// ModifyProduct
