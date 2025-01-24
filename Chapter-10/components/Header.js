import { useState, useEffect } from "react";
import { logo_cdn } from "../assests/img/logo";
import { Link } from "react-router-dom";


const loginUser = () => {
  //
  return false;
}
const Tilte = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src=  {logo_cdn}
    />
  </a>
);

const Header = () => {
    // (a)const ti = "hardcode"

    

  
const[logIn , setLogIn] = useState(false)
const [title, setTitle] = useState("Food Villa")
    
    useEffect(() => {
        console.log("useffect");
        
    },[logIn]);

    console.log("render..1");
    

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-300 md:bg-amber-400">
      <Tilte />
      <h1>{title}</h1>
      {/*(a- to check if the noraml variable updates or not and ans is no becz react does not track the normal function) <button onClick={()=>ti ="yuyu"}>change</button> */}

      {/* <button onClick={() => setTitle("yes changed")}>change</button> */}

      <div className="nav">
        <ul className="flex py-10">
          <Link to="/">
            {" "}
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            {" "}
            <li className="px-2">Contact</li>
          </Link>
          {/* <a href ="/about"> <li>About</li></a> */}
          <Link to="/instamart">
            {" "}
            <li className="px-2">Instamart</li>
          </Link>

          <li className="px-2">Cart</li>
        </ul>
      </div>
      {
        // js expression
        logIn ? (
          <button
            onClick={() => {
              setLogIn(false);
            }}
          >
            logout
          </button>
        ) : (
          <button onClick={() => setLogIn(true)}>login</button>
        )
      }
    </div>
  );
}

export default Header;    