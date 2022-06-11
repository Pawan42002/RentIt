import React from "react";
import image from "../Assets/image-1.jpg";
const DetailListing = () => {
  let containerStyle =
    "flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-7 p-5";
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
          <div className={containerStyle + " pb-5"}>
            <img src={image} className="mt-3" />
            <div className="font-bold py-1">Rent per month</div>
          </div>
          <div className={containerStyle + " pb-5"}>
            <div className="font-bold">Prabhadevi,Mumbai</div>
            <div>complete address</div>
          </div>
          <div className={containerStyle + " pb-5"}>
            <div className="font-bold">Features</div>
            <div>1BHK Apartment with a total area of 400sq.ft</div>
            <div>Railway Station within 10 min walk</div>
          </div>
          <div className={containerStyle + " pb-5"}>
            <div className="font-bold">Owner Details</div>
            <div>Mobile - +91 8828262947</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailListing;
