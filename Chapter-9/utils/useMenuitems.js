import { useState, useEffect } from "react";
const useMenuitems = (resId) => {
  const [menuItems, setMenuItems] = useState([]); // Menu items

  // display fetch data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // fetch data
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5561437&lng=77.0999623&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log("api response", json);
    // setRestaurant(json.data.cards[2]?.card?.card?.info);
    setMenuItems(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    );
  }

  return menuItems;
}
export default useMenuitems;