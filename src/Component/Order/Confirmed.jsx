import React from "react";
import Emoji from "../../assets/emoji.json";
import Lottie from "lottie-react";

const Confirmed = () => {
  return (
    <div className="min-h-[80vh]">
      <Lottie className="h-60" animationData={Emoji} loop={true} />
      <h1 className="text-center">Thank You for Your Order</h1>
    </div>
  );
};

export default Confirmed;
