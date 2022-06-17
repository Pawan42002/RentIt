import React from "react";
import image from "../Assets/image-1.jpg";
const starSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const locationSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const phoneSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);
const DetailListing = () => {
  let containerStyle =
    "flex flex-col justify-center bg-white mt-3 shadow-md rounded-md px-7 p-5";

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
          <div>
            <img src={image} className="p-1 rounded-xl" />
            <div className="bg-white shadow-md rounded-lg p-3 px-5 mt-1 py-4">
              <div className="text-xl font-medium">
                Entire apartment hosted by Polly
              </div>
              <div className="text-sm font-light">
                4 guests1 bedroom2 beds1 bathroom
              </div>
            </div>
          </div>
          <div className={containerStyle + " pb-5"}>
            <div className="flex flex-row mb-2">
              <div className="mt-2">{starSVG}</div>
              <div>
                <div className="text-xl font-bold p-1">Features</div>
                <div className="px-1 text-sm">
                  <div>1BHK Apartment with a total area of 400sq.ft</div>
                  <div>Railway Station within 10 min walk</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="mt-2">{starSVG}</div>
              <div>
                <div className="text-xl font-bold p-1">Rent</div>
                <div className="px-1 text-sm flex flex-row">
                  <div className="text-xl">$300</div>
                  <div className="mt-1">/month</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="mt-2">{locationSVG}</div>
              <div>
                <div className="text-xl font-bold p-1">Location</div>
                <div className="px-1 text-sm">
                  <div>Prabhadevi, Mumbai</div>
                </div>
              </div>
            </div>
          </div>
          <div className={containerStyle + " pb-5"}>
            <div className="flex flex-row">
              <div className="mt-2">{phoneSVG}</div>
              <div>
                <div className="text-xl font-bold p-1">Owner</div>
                <div className="px-1 text-sm">
                  <div>(+91) 81212312312</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailListing;
