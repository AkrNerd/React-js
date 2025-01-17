// import { Outlet } from "react-router-dom";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>This is the Food Villa App</h3>
//       <Outlet/>
//     </div>
//   );
// };
// export default About;
// //* As the About componet is the parent of profile child , so that is why we imported outlet component inside the about component.




//- IF I NEED TO DIRECTLY IMPORT PROFILE INSIDE MY ABOUT I CAN DO IT WHILE IMPORTING PROFILE INSIDE MY ABOUT.

// import Profile from './Profile';
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>This is the Food Villa App</h3>
//-       < Profile/ >  without outlet also i can add profile in my about which is known as composition component
//     </div>
//   );
// };
// export default About;


import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import {Component} from "react";

// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>This is the Food Villa App</h3>

//       <ProfileClass name={"I am CLASS COMPONENT"} age={56} />
      
//       <Profile name={"I am FUNCTIONAL COMPONENT"} />
//     </div>
//   );
// };


class About extends Component{
  constructor(props) {
    super(props);
   
    // console.log("Parent-constructor-1");
    
  }
  
 componentDidMount() {
   
    


    // console.log("Parent-componentDidMount-3");
    
  }
  render() {
    // console.log("Parent-render-2");
    
    return (
      <div>
        <h1>About Us</h1>
        <h3>This is the Food Villa App</h3>

        <ProfileClass name={"FIRST CLASS CHILD"} age={56} />
        {/* <ProfileClass name={"SECOND CLASS CHILD"} age={12} /> */}

        <Profile name={"I am FUNSTIONAL COMPONENT"} />
      </div>
    );
  }
}
export default About;

/**
 * ?THIS IS HOW LIFECYCLE WORKS [CHECK ONCE IN CHATGPT]
 *- Parent-Constructor
 *- Parent-Render
 **( becz it is inside the Parent Render, so it will go to that component...and trigger profile component lifecycle )
 *- Child-Constructor 
 *- Child-Render
 *- Child-componentDidMount
 ** NOW  IT WILL COMPLETE THE FULL LIFECYCLE OF THE PROFILE COMPONENT
 *- Parent-componentDidMount
 */

 /**
  * ? when there aare 2 child components inside the parent , then the lifecyle of components will be
  * 
  * * render phase 
  * -Parent-constructor
  * -parent-render
  * -    first child-constructor
  * -    first child-render
  * -    second child -constructor 
  * -    second child -render
  * *  commit phase
  * -    first child-componentDidMount
  * -    second child -componentDidMount
  * 
  *- parent-componentDidMount
  */

  /**
   * *RENDER PHASE
   * Parent-constructor-1
   * Parent-render-2
   * Child-Constructor -1
   * Child-render-class-2
   * 
   * * COMMIT PHASE
   *  DOM UPDATED [LIKE ONCE INITIAL RENDER IS DONE IN RENDER PHASE , THEN DOM IS UPDATED]
   *- parent componentDidmount => IS CALLED BEFORE MAKING AN API CALL THAT IS WHY IT IS SHOWING HERE
   * 
   *    * API CALL
   *  console.log(json); => LOGGED INSIDE CONSOLE
   * Child-componentDidMount-3" => THIS IS LOGGED
   * Child-render-class-2  =>UPDATED DATA IS BEING RENDERED
   * COMPONENT DID UPDATE
   * 
   */
