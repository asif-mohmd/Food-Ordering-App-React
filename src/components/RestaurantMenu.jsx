import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()
  const resInfo = useRestaurantMenu(resId)

  const [showIndex,setShowIndex] = useState(null) 

  if (resInfo === null) { 
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || resInfo?.cards[1]?.card?.card?.info || resInfo?.cards[2]?.card?.card?.info; 

  // const { itemCards } =
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;


  // if error comes here use cards[0] or cards[1] or cards[2] or cards[3] or cards[4] 
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.["card"]?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold">{cuisines.join(", ")}</p>
    
    {/* controlled and uncontrolled component */}
        {categories.map((category,index) => (
          <RestaurantCategory key={category?.card?.card.title} 
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {setShowIndex(index) }}
          />
        ))}
      </div>
    );
     
} 

export default RestaurantMenu;
