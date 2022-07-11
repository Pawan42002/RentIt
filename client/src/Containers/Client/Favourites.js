import React, { useEffect, useState, useContext } from "react";
import Spinner from "../../Components/Spinner";
import { query } from "../../middleware/query";
import ListSummary from "../../Components/ListSummary";
import appContext from "../../context/appContext";
const Favourites = () => {
  const { userData, favourites, setFavourites } = useContext(appContext);
  const [loading, setLoading] = useState(true);
  const inFavPage = true;
  useEffect(() => {
    const getFavourites = async () => {
      try {
        const response = await query("GET", "api/listings/getAllLiked");
        setFavourites(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFavourites();
  }, []);
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
            {favourites.map((favourite, idx) => {
              return (
                <ListSummary
                  listing={favourite}
                  key={idx}
                  inFavPage={inFavPage}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourites;
