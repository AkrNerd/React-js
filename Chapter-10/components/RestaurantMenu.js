import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_DATA_CDN } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useMenuitems from "../utils/useMenuitems";
// useParams hook reads the DYNAMIC url

const RestaurantMenu = () => {
  const params = useParams();
  // const {id} = useParams();  YOU CAN DIRECTLY WRITE THE DESTRUCTION ON THE FLY
  const { resId } = params;
  console.log("Dynamic resId from URL:", resId);

  const restaurant = useRestaurantMenu(resId);

  const menuItems = useMenuitems(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant : {resId}</h1>
        <img src={IMG_DATA_CDN + restaurant.cloudinaryImageId} />
        <h2>{restaurant.name}</h2>
        {/* <h2>ID: {restaurant.id}</h2> */}
        <h2>Rating : {restaurant.avgRating} stars</h2>
        <p>City: {restaurant.city}</p>
      </div>

      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(menuItems?.card?.card?.itemCards).map((items) => (
            <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
          ))}
        </ul> */}
        <ul>
          {menuItems?.card?.card?.itemCards ? (
            Object.values(menuItems.card.card.itemCards).map((items) => (
              <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
            ))
          ) : (
            <li>No menu items available</li>
          )}
        </ul>
      </div>
      {/* <div>{console.log(Object.values( menuItems.card.card.itemCards))}</div> */}
    </div>
  );
};
export default RestaurantMenu;
