import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()
  const resInfo = useRestaurantMenu(resId)


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.["card"]?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>

      {categories.map((categories)=> (
       < RestaurantCategory data={categories?.card?.card}/>
      ))}


     
    </div>
  );
}

export default RestaurantMenu;
