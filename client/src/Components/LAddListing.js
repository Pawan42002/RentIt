import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TextField from "./TextField";
import { features } from "process";
import { query } from "../middleware/query";

const LAddListing = () => {
  let containerStyle =
    "flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-10 p-5";
  const [street, setStreet] = useState(""); //
  const [city, setCity] = useState(""); //
  const [zipcode, setZipcode] = useState(""); //
  const [area, setArea] = useState(""); //
  const [location, setLocation] = useState(""); //
  const [rent, setRent] = useState(""); //
  const [features, setFeatures] = useState([]); //
  const [currFeature, setCurrfeature] = useState("");
  const [images, setImages] = useState([]); //

  const handleImageUpload = (image) => {
    let newUrl = URL.createObjectURL(image);
    setImages([...images, newUrl]);
    console.log(images);
  };
  const handleSubmit = async () => {
    // call middleware
    // create object
    const details = {
      area,
      rent,
    };
    const address = {
      street,
      city,
      zipcode,
    };
    // main object to be passed
    const props = {
      images,
      features,
      details,
      address,
    };
    const res = await query("POST", "api/listings/addListing", props, true);
    if (res) {
      alert("Listing added");
    }
    console.log(res);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
          <div className={containerStyle + " pb-10"}>
            <div className="image-input block">
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
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      handleImageUpload(e.target.files[0]);
                    }}
                  />
                </label>
              </div>

              {images.length ? (
                <div className="block p-2">
                  <div className="text-gray-500 text-lg">Preview</div>
                  <div className="flex flex-row overflow-x-auto my-2 gap-2 no-scrollbar">
                    {images.map((image) => {
                      return (
                        <div className="min-w-fit relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 absolute text-red-600 top-0 right-0"
                            fill="white"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            onClick={() =>
                              setImages([...images.filter((i) => i != image)])
                            }
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          <img src={image} className="h-24 w-24 rounded-md" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
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
              label={"Street"}
              placeholder={"Street"}
              value={street}
              setValue={setStreet}
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
            <hr />
            <h1 className="font-bold">Add a Feature</h1>
            <div className="flex  justify-center space-x-3">
              <Input
                label={"Feature"}
                placeholder={"Feature"}
                value={currFeature}
                setValue={setCurrfeature}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => {
                  if (currFeature != "") {
                    setFeatures([...features, currFeature]);
                    setCurrfeature("");
                  }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {!features.length && (
              <h1 className="text-gray-500">No features added</h1>
            )}
            {features.length > 0 && (
              <>
                <h1 className="font-bold">Listed Features</h1>
                <div>
                  {features.map((feature) => {
                    return (
                      <>
                        <div className="flex justify-between  bg-white  shadow-md rounded-lg px-4 p-5 mb-2 ">
                          <div>{feature}</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            onClick={() => {
                              setFeatures(
                                features.filter((currF) => {
                                  return currF != feature;
                                })
                              );
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            )}
            <hr />
            <Button name={"Add Listing"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LAddListing;
