import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

const Update = () => {
  //   const notify = () => toast("Item Updated");
  const [selectedOption, setSelectedOption] = useState("");

  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/singleitem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setSelectedOption(data.category);
        console.log(data); // Move the console.log inside the .then block
      });
    console.log("hello");
  }, []);
  console.log(id);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const img = form.img.value;
    console.log(name, seller, price, ratings, img);

    const addData = {
      name: name,
      seller: seller,
      category: selectedOption,
      price: price,
      ratings: ratings,
      img: img,
    };

    fetch(`http://localhost:8000/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "update fetch"));
    from.reset();
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="bg-red-300  w-1/2  py-10 px-5 rounded-lg">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
          action=""
        >
          <input
            className="m-2 p-2 text-lg w-full items-center"
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={item.name}
          />
          <input
            className="m-2 p-2 text-lg w-full items-center"
            type="text"
            placeholder="Seller"
            name="seller"
            defaultValue={item.seller}
          />
          <select
            value={selectedOption}
            onChange={handleChange}
            className="select m-2 p-2 text-lg w-full items-center"
          >
            <option value="" disabled>
              Category
            </option>
            <option value="Men's Sneaker">Men's Sneaker</option>
            <option value="Bag">Bag</option>
            <option value="Cap">Cap</option>
            <option value="Earphones">Earphones</option>
            <option value="Bottle">Bottle</option>
            <option value="Men's T shirt">Men's T shirt</option>
          </select>
          <input
            className="m-2 p-2 text-lg w-full items-center"
            type="number"
            placeholder="Price"
            name="price"
            defaultValue={item.price}
          />
          <input
            className="m-2 p-2 text-lg w-full items-center"
            type="number"
            placeholder="Ratings"
            min={0}
            max={5}
            name="ratings"
            defaultValue={item.ratings}
          />
          <input
            className="m-2 p-2 text-lg w-full items-center"
            type="url"
            placeholder="Photo url"
            name="img"
            defaultValue={item.img}
          />
          <input
            className="m-2 p-2 text-lg w-full items-center bg-white cursor-pointer"
            type="Submit"
          />
          {/* <button>Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Update;
