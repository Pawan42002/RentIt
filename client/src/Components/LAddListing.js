import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TextField from "./TextField";
import { features } from "process";

const LAddListing = () => {
  let containerStyle =
    "flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-10 p-5";
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [features, setFeatures] = useState([]);
  const [currFeature, setCurrfeature] = useState("");
  const handleSubmit = () => {
    let images = ["", ""];
  };
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
          <div className={containerStyle + " pb-10"}>
            <div className="image-input">
              <label>Add Image</label>
              <div className="flex justify-center items-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <Input
              label={"Rent per Month"}
              placeholder={"Rent per Month"}
              value={rent}
              setValue={setRent}
            />
            <Input
              label={"Area in sq.ft"}
              placeholder={"Area in sq.ft"}
              value={area}
              setValue={setArea}
            />
            <Input
              label={"Location"}
              placeholder={"Location"}
              value={location}
              setValue={setLocation}
            />
            <hr />
            <h1 className="font-bold">Address</h1>
            <TextField
              label={"Address"}
              placeholder={"Address"}
              value={address}
              setValue={setAddress}
            />
            <Input
              label={"City"}
              placeholder={"City"}
              value={city}
              setValue={setCity}
            />
            <Input
              label={"ZIP Code"}
              placeholder={"ZIP Code"}
              value={zipcode}
              setValue={setZipcode}
            />

            <h1 className="font-bold">Feaures</h1>
            <Input
              label={"feature"}
              placeholder={"feature"}
              value={currFeature}
              setValue={setCurrfeature}
            />
            <Button
              name={"Add Feature"}
              onClick={() => {
                setFeatures([...features, currFeature]);
                setCurrfeature("");
              }}
            />
            <div>
              {features.map((feature) => {
                return (
                  <>
                    <div>{feature}</div>
                  </>
                );
              })}
            </div>
            <Button name={"Add Listing"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LAddListing;
