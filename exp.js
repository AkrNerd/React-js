import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Timer = () => {
    
    // const [count, setCount] = useState(0);
    const [count , setCount] = useState(0);
    // const count = arr[0];
    // const setCount = arr[1];
    // console.log(arr);
    
    function increse() {
        setCount(count+1)
    }

    return (

        <div>
            {/* <button onClick={()=> setCount(count-1)}>-</button>
            <button >{ count}</button>
            <button onClick={()=>setCount(count+1)}>+</button> */}

            <h1>COUNTER :{ count}</h1>
            <button onClick={increse}>Increse</button>
        
        
        </div>


    )




}


const Input = () => {
    const [search, setSearch] = useState("");

    return (
    <div>
            
            
           
            <input type="text " onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <h1>{ search}</h1>
            
    </div >
    )
    
}



const Counter = () => {
  const [details, setDetails] = useState({ name: "", count: 0 });

  // Function to update both 'name' and increment 'count'
  function updated() {
    setDetails((prevState) => ({
      ...prevState, // Step 1: Copy previous state
      name: "akriti", // Update 'name'
      count: prevState.count + 1, // Increment 'count'
    }));
  }

  return (
    <div>
      {/* Updating the 'name' property of the state while keeping 'count' intact */}
      <input
        type="text"
        onChange={(e) => {
          setDetails((prevState) => ({
            ...prevState, // Preserve the current 'count' value
            name: e.target.value, // Update 'name' based on user input
          }));
        }}
      />
      <h1>
        {details.name} and {details.count}
      </h1>
      <button onClick={updated}>Update Name and Increment Count</button>
    </div>
  );
};

export default Counter;

const Obj = () => {
    const [details, setDetails] = useState({  name: "Akriti" ,age:23})
    
    function updated() {
        setDetails((prevState) => ({
            ...prevState,
            name: 'kriti',
            age: '24'

        }))
    }
    return (
        <div>
            <h1> Name: {details.name}</h1>
            <h2>Age: {details.age}</h2>
            <button onClick={updated}>Click Me!</button>
        </div>
    )


}

const root = ReactDOM.createRoot(document.getElementById("roots"))
root.render(<Counter/>)


//- 1.  NEVER PASS THE STATE VARIABLE AS PARA IN THE FUNCTION AS FUNCTION THINKS IT DIFFERNET PARA.