import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);


useEffect(()=>{

fetchData()
},[])

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89037501599536&lng=77.64229110894304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  
    const json = await data.json()
    console.log("-------")
    console.log(json)
    console.log("-------")
     
setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

}  

console.log("Body rendered")
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant 
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>   
    </div>
  );
};
  
export default Body;