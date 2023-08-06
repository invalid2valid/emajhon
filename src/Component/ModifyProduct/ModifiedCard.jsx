import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const ModifiedCard = (props) => {
  const { img, name, seller, ratings, price, _id } = props.data;
  const { user } = useContext(AuthContext);
  const [btncondition, setbtnCondition] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setbtnCondition(false);
    } else {
      setbtnCondition(true);
    }
  }, [user]);

  // console.log("hello");

  const deleteHandel = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    //   .then((data) => (setControl(!control), console.log(data)));
  };

  return (
    <div
      data-aos="fade-up"
      className="w-[300px] h-[510px] border-2 border-[#95A0A7] rounded-md relative"
    >
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
      <div
        // disabled={btncondition}
        // onClick={() => props.handleAddToCart(props.data)}
        className=" items-center flex justify-center gap-3 font-bold w-full py-2 bg-[#FFE0B3]  absolute bottom-0 hover:bg-orange-400 rounded-b-md"
      >
        <div className="">
          <Link to={`/update/${_id}`} className="p-2 mx-2 bg-white rounded-md">
            Update
          </Link>
          <button
            onClick={() => deleteHandel(_id)}
            className="p-2 mx-2 bg-white rounded-md"
          >
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

// export default Card;

export default ModifiedCard;
/**<Link to={`/update/${toy._id}`} className="btn btn-ghost btn-xs">
            Update
          </Link> */
