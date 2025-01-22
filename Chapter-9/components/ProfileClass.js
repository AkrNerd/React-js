import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    // this.state = {
    //     //its initial value
    //     count: 0,
    //     count2: 0,
    // };

    // here state is ntg bt big obj where all state variables are managed.
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("Child-Constructor -1" + this.props.name);
  }

 /* async componentDidMount() {
      // best place to make the Api call just like useffect
      
//    console.log("Child-componentDidMount-3" + this.props.name);
    const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      console.log(json);
      
    // to put the data into ui we need to create the state as i created userInfo
    // how to push the api data into my state ? by pushing inside this.setState.
    this.setState({
      userInfo: json,
      });
      
  
    
    
    
    console.log("Child-componentDidMount-3" + this.props.name);
    }
    */
    
    componentDidMount() {
        
    //    this.timer = setInterval(() => {
    //         console.log("setinterval");
            

    //     },1000)
        //  console.log("Child-componentDidMount-3" );
    }
    

    componentDidUpdate() {
        // console.log("Component did update");
        
    }

    componentWillUnmount() {

        clearInterval(this.timer)
        // console.log("Component will unmount");
        
    }

  render() {
    const { count } = this.state; // with destructuring state
    // console.log("Child-render-class-2" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        {/* <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2> */}
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>

        {/* <h2>Count-State: {count}</h2>
        <h2>Count-State-without destructuring: {this.state.count}</h2>
        <button
          onClick={
            // WE DO NOT MUTATE STATE DIRECTLY
            //NEVER DO this.state =something
            () => {
              this.setState({
                count: 1,
                count2: 2,
              });
            }
          }
        >
          Click Me!
        </button> */}
      </div>
    );
  }
}
export default Profile;


// componentDidMount()  => will be called after 1st initial render

//componentDidUpdate()  =>  after every next render(re-render) / update