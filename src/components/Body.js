import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [btnName, setBtnName] = useState("Top Rated Restaurant");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.096505&lng=76.45395&is-seo-home"
    );

    const json = await data.json();
    //optional Chaining
    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //   Shimmer Effect for loading screen
  //  Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      <div className="filter">

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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

        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link to={"/restaurants/"+restaurants.info.id}><RestaurantCard key={restaurants.info.id} resData={restaurants} /></Link> 
        ))}
      </div>
      
    </div>
  );
};

export default Body;
