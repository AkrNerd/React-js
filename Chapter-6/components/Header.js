import { useState } from "react";

const loginUser = () => {
  //
  return false;
}
const Tilte = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EvdQEij3J09ngqLGap5o-90-ieZLmTxb3uOqDgaRmYipP6cFAWE7ql10Zbnj16hX2Mw&usqp=CAU"
    />
  </a>
);

const Header = () => {
  // (a)const ti = "jj"
  
  const[logIn , setLogIn] =useState(false)
  const[title , setTitle] = useState("Food Villa")
  return (
    <div className="header">
      <Tilte />
      <h1>{title}</h1>
      {/*(a- to check if the noraml variable updates or not and ans is no becz react does not track the normal function) <button onClick={()=>ti ="yuyu"}>change</button> */}
      <button onClick={() => setTitle("yes changed")}>change</button>

      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        // js expression
        logIn ? (
          <button onClick={()=>{setLogIn(false)}}>logout</button>
        ) : (
            <button onClick={()=> setLogIn(true)}>login</button>
          )
      }
    
    </div>
  );
}

export default Header;    