import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurantCard";
import { useState } from "react";



//-  what is state? --> used to store data and updates it accordingly
//-  what is Hooks? --> normal js function , we can create our own hooks as well
//- useState? --> its a hook func which is used to create the local state variable inside the components


// normal js function to filter the restaunt list data 
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info?.name.includes(searchText)
  );
}



const Body = () => {
 

  // searchTxt is a local state variable
  const [searchText, setSearchText] = useState(""); //todo used to create local state variable........  returns =[variable name, fucntion to update the variable]

  // const [searchClicked, setSearchClicked] = useState("false");

  const [restaurants, setRestaurants] = useState( restaurantList );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          //- e.target.value => whatever u write in input , it will display as e is eventlistener, target is input field  , value is your value [also i used e because it will read what i type.]
        />
      </div>

      {/* <h1>{searchText}</h1> //? NOW THIS IS 2 WAY DATA BINDING U CAN SEE THE CHANGES DIRECTLY ON UI AND READING AS WELL (SEARCH FOR IT , IF U HAVE CONFUSION) */  }
      

      {/* <h1>{searchClicked }</h1> */}

      <button className="search-btn" onClick={() => {
        // if (searchClicked === "true") {
        //   setSearchClicked("false")
          
        // } else {
          
        //   setSearchClicked("true")
        // }

        //-need to filter the data from restaurants (restuant-lists)
        
        const data = filterData(searchText, restaurants);
        
        //-update the state - restaurants using setRestauants
        
        setRestaurants(data);




      }}>Search-</button>

      <div className="restaurant-list-body">
        {/***********USING MAP FUNCTION********** */}
        {restaurants.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant.info} key={restaurant.info?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;




/**
 *  //-  THIS IS FOR UNDERSTANDING PURPOSE , HERE WE AEW USING HARDCODE DATA TO MANIPUALTE THE VALUE INSIDE THE INPUT ELE , READ FIRST , IF U DONT GET IT , PASTE IT AND RUN AND SEE :)
 *     const Body = () => {
  const searchTxt = "KFC";
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <button className="search-btn">Search</button>
      <div className="restaurant-list-body">
        {/***********USING MAP FUNCTION********** }
        {restaurantList.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};   */




