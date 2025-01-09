import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


/*
  -Header
    * logo
    * list items(right side)
    * cart
  -Body
    * Search bar
    * RestaurentList 
      * restaurent-cart
        * image
        * cusines
        * address
        * ratings
  -Footer
    * copyrights
    * 
    * 
    * 
*/







const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());
