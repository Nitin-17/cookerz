import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatings,
}) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h5>{totalRatings} Stars</h5>
    </div>
  );
};

export default RestaurantCard;
