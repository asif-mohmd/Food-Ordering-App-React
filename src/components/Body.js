import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { LIST_OF_RESTAURANTS } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [btnName, setBtnName] = useState("Top Rated Restaurant");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  function hai(){
    function hai(){

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_OF_RESTAURANTS);
    const json = await data.json();

    // Swiggy changing the API . So this console.log help to find the card[number] array nummber
    console.log(json);

    //optional Chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );


    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like your offline!Please check your internet connection!</h1>
    );

  //   Shimmer Effect for loading screen

  //   Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-0.5 bg-red-300 m-1 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-2 p-4 flex items-center">
          <button
            className="filter-btn bg-red-300 px-2 py-1 m-1 rounded-lg"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredList);

              btnName === "Top Rated Restaurant"
                ? setBtnName("Show All Restaurants")
                : setBtnName("Top Rated Restaurant");
              btnName === "Top Rated Restaurant"
                ? setFilteredRestaurant(filteredList)
                : setFilteredRestaurant(listOfRestaurants);
            }}
          >
            {btnName}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {restaurants.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
