import React from "react";
import ReactDOM from "react-dom/client";

//- React.createElement =>(CONVERTS TO)   Object =>(CONVERTS TO)   HTML (then display on DOM)

const heading = React.createElement(
  "h1", //*  this is react
  {
    id: "title",
    key: "h1",
    style: { background: "hotpink", color: "white" },
  },
  "Hola"
);

console.log(heading); //- Its a  OBJECT then later convert to html code => display on dom

//  const heading2 = React.createElement('h1',
//    {
//      id: "title",
//      key:"h2",
//      style: { background: "lightgreen", color: "yellow" }
//    },
//    "John bro"
//  );
//!**************************************************************************************************************************
//- jsx => React.createElement =>(CONVERTS TO)   Object =>(CONVERTS TO)   HTML (then display on DOM)  [INTERNALLY JSX IS WORKING LIKE THIS ONLY] (babel does all the conversion)

const heading2 = // *   this is react element
  (
    <h1 id="title" key="h2">
      John
    </h1> //* jsx is not react , its just jsx code
    // *  jsx expression , its not package, its syntax
  );

//? (3) CONVERTING THIS REACT ELEMENT INTO FUNCTIONAL COMPONENT (here i just copied from above code and changed accordingly)
const Title = () => (
  <h3 id="title" key="h2">
    I AM THE FUNCTIONAL COMPONENT CONVERTED FROM THE REACT ELEMENT
  </h3>
);

//***************************************************************************************************************************** */

//!   package-lock.json ---> stores the exact version of our dependencies
//!  but package-lock.json inside the node_modules/ stores the transitive dependencies

//!  COMPONENTS
//!  functional based --->  new way of writing the components  ---Simple JavaScript functions that return HTML (JSX)
//!  class based ----> old way of writing the components (but imp for interviews)

//- NAME OF THE COMPONENT STARTS WITH THE CAPITAL LETTER(its not imp to write in capital but its good practice to write in capital  )

//- functional component is normal js function , its just returning the jsx code or it can also return some piece of react element as well { basically jsx is what behind the scene its react-element only }

//************************************************************************************************************************** */ */

const HeadComponent = () => {
  return <h1>THIS IS THE FUNCTIONAL COMPONENT</h1>;
};

let v = 9;
const HeadComponent2 = () => {
  return (
    <div>
      {console.log("here i can write any js code inside the {} of jsx")} //*THIS IS HOW I WRITE JS INSIDE JSX. INSIDE {}
      {v}
      {1+2+3}
      //? (2) THIS IS HOW YOU PUT THE REACT-ELE and FUNCTIONAL COMPONENT INSIDE THE REACT COMPONENT
      {heading} //- A. calling the REACT ELEMENT
      {Title()} //- B. this is also correct   
      <Title /> //- C. this is also you can write and add the functional component inside another component
      <h1>i am 1st child</h1>
      <h1>i am 2 child</h1>
    </div>
  );
};

//! if am putting the component inside another component its known as COMPONENT COMPOSITION LIKE IN ABOVE CASE TITLE ONE ...

//!         or
// const HeadComponent2 = () =>
  // without return also you can write the function component
//(   
//     <div>
//       <h1>i am 1st child</h1>
//       <h1>i am 2 child</h1>
//     </div>
//   );

const container = React.createElement(
  "div",
  null,
  [heading, heading2] //* when you have siblings like this , make sure to put keys inside props in react
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
root.render(<HeadComponent2 />); //?  (1) THIS IS HOW U, WRITE THE RENDER FUNCTION FOR FUNCTIONAL COMPONENT
// root.render(HeadComponent2 ());    //* can b written like this

//!  AT THE END OF THE DAY , REACT-ELEMENT IS THE OBJECT
//!  AT THE END OF THE DAY , FUNCTIONAL COMPONENT IS THE FUNCTION
