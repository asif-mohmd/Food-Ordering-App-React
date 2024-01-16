import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  return (
    <div className="m-4 p-4 w-[400] h-auto rounded-xl bg-gray-200 hover:bg-gray-100  ">
      <h1 className="font-extrabold">{name}</h1>
      <h2 className="font-bold">{cuisines.join(", ")}</h2>
      <h3 className="font-bold">{costForTwoMessage}</h3>

      <ul className="font-medium pt-5">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- {"₹ "}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
