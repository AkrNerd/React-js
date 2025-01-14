import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText , restaurants) {
    const f_Data = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return f_Data;
}

const Body = () => {
    
    
    const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(restaurants); --> everytime i update it , this will be called that many times
  

  // empty dependency array [] => once after render
  // dep arr [searchText] => once after initial render + everytime after render (my searchText changes)

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5561437&lng=77.0999623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log("render");

  // CONDITIONAL RENDERING
  // if restaurant is empty => shimmer UI
  //if restaurant has data => actual data UI

  // early rendering , dont render componet if my restauants are not there
  if (!allRestaurants) return null;


  //  thhis is where rendering happening
  return (allRestaurants?.length===0)?<Shimmer/>: (
    <>
        <div className="search-container">
              <input
              
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e)=> setSearchText(e.target.value)}
              
              
              />

              <button className="search-btn" onClick={
                  () => {
                      //-need to filter the data from restaurants (restuant-lists) when we search 
                      const data = filterData(searchText, allRestaurants);
                      //-update the state - restaurants using setRestauants
                      setFilterRestaurants(data);
                  }

              }>Search - { searchText}</button>
              
              
      </div>

      <div className="restaurant-list-body">
        {filterRestaurants.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
