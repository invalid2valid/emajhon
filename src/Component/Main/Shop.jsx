import React, { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
  const [orginalData, setOrginalData] = useState([]);
  const [data, setData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [filterBy, setFilterBy] = useState("See All");
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  // console.log(cart);
  // console.log(cart);

  const filterData = (data) => {
    setOrginalData(data);
    const listFilter = data.map((item) => (
      <option value="{item.category}">{item.category}</option>
    ));

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
    fetch("products.json").then((res) => res.json().then((d) => filterData(d)));
  }, [filterBy, filteredData]);
  // console.log(data);
  return (
    <div className="relative flex min-h-[85vh] m-6 max-w-[1440px] mx-auto">
      <div className="w-4/5">
        <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 justify-items-left gap-6   ">
          {data.map((infos) => (
            <Card
              handleAddToCart={handleAddToCart}
              data={infos}
              key={infos.id}
            ></Card>
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
        <div className="rounded-lg bg-[#FFE0B3] w-full h-[80vh]"></div>
      </div>
    </div>
  );
};

export default Shop;
