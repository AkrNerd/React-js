import { IMG_DATA_CDN } from "../constants";
const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {


  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
      <img src={IMG_DATA_CDN + cloudinaryImageId} />

      <h2 className="font-bold xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestaurentCard;
