import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8985899&lng=77.6514648&restaurantId=334867&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>


      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}- {"₹"}{item.card.info.price || item.card.info.defaultPrice}</li>
        ))}
      
      </ul>


    </div>
  );
}

export default RestaurantMenu;
