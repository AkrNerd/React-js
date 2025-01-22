import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



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
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // console.log("render");

  const online = useOnline();
  //- if am offline then this will trigger
  if (!online) {
    return <h1>YOU ARE OFFLINE, PLEASE CHECK YOUR INTERNET!!</h1>
  }


  // CONDITIONAL RENDERING
  // if restaurant is empty => shimmer UI
  //if restaurant has data => actual data UI

  // early rendering , dont render componet if my restauants are not there
  if (!allRestaurants) return null;

  //  this is where rendering happening
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            //-need to filter the data from restaurants (restuant-lists) when we search
            const data = filterData(searchText, allRestaurants);
            //-update the state - restaurants using setRestauants
            setFilterRestaurants(data);
          }}
        >
          Search - {searchText}
        </button>
      </div>

      <div className="restaurant-list-body">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurentCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
