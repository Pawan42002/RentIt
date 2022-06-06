import React from "react";
import image from "../Assets/image-1.jpg";
import ListSummary from "./ListSummary";
const Profile = () => {
  return (
    <>
      <div className="flex justify-center px-4 py-5">
        <div className="flex flex-col justify-center space-y-4">
          <img src={image} className="max-w-sm" />
          <div className="flex flex-col font-bold ">
            <div className="flex justify-center">Pawankumar Nandagiri</div>
            <div className="flex justify-center">Mumbai</div>
          </div>
          <div className="flex flex-col font-medium sm:ml-3 md:ml-0 space-y-4">
            <div className="flex justify-center">Settings</div>
            <div className="cursor-pointer sm:px-2 md:px-0">Change Details</div>
            <hr />
            <div className="cursor-pointer sm:px-2 md:px-0">
              Become a Landlord
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
