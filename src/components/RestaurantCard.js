import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costFor } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "rgb(249, 249, 248)" }}>
      <img
        className="RestaurantCardImg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="RestaurantCardName">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costFor}</h4>
      <h5>{resData.info.sla.deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
