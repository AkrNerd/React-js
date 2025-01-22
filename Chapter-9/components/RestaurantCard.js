import { IMG_DATA_CDN } from "../constants";
const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {


  return (
    <div className="card-box">
      <img src={IMG_DATA_CDN + cloudinaryImageId} />

      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestaurentCard;
