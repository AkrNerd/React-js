import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_DATA_CDN } from "../constants";
import Shimmer from "./Shimmer";
// useParams hook reads the DYNAMIC url

const RestaurantMenu = () => {
  const params = useParams();
  // const {id} = useParams();  YOU CAN DIRECTLY WRITE THE DESTRUCTION ON THE FLY
  const { resId } = params;
 console.log("Dynamic resId from URL:", resId);

  const [restaurant, setRestaurant] = useState(null);

  const [menuItems, setMenuItems] = useState([]); // Menu items

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    const data = await fetch(
       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5561437&lng=77.0999623&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      
    );
    const json = await data.json();
    console.log("api response",json);
    setRestaurant(json.data.cards[2]?.card?.card?.info);
    setMenuItems(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    );
  }

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
