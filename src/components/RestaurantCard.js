import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costFor } =
    resData?.info;

  return (
    <div
      className="m-4 p-4 w-[250] h-96 rounded-xl bg-gray-50 hover:bg-gray-100"
    
    >
      <img
        className="rounded-lg h-52 w-56"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold pt-4">{name}</h3>

      <h4 className="font-semibold">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold">{avgRating} Stars</h4>
      <h4 className="font-semibold">{costFor}</h4>
      <h5 className="font-semibold">{resData.info.sla.deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
