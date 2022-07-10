import React, { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import { query } from "../../middleware/query";
import ListSummary from "../../Components/ListSummary";
const Favourites = () => {
  const [favourites, setFavourties] = useState([]);
  //const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFavourites = async (req, res) => {
      const response = await query("GET", "api/listings/getAllLiked");
      const items = response.data.favourites;
      //console.log(response.data.favourites);
      await Promise.all(
        items.map(async (item) => {
          const contents = await query("GET", "api/listings/getSingleListing", {
            id: item._id,
          });
          // setFavourties([...favourites, contents]);
          return contents;
        })
      );
      setFavourties(items);
    };
    getFavourites();
  }, []);
  return (
    <div>
      {favourites.length === 0 && <Spinner />}
      {favourites.length !== 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
            {favourites.map((favourite, idx) => {
              return <ListSummary key={idx} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourites;
