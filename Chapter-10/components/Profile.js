import { useEffect, useState } from "react";


const Profile = (props) => {
    const [count ,setCount] = useState(0)
    // const [count2 , setCount2] =useState(0)
    // console.log("render-functional");

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("setinterval");
            

        },1000)

        console.log("useffect-profile");
        
        // THIS RETURN FUNCTION IS CALLED WHEN U ARE UNMOUNTING IT 

        return () => {
            clearInterval(timer)
            // console.log("useffect return");
            
        }
        
    }, [])
    console.log("render-profile");
    
    
    return (
        <div>
            <h2>Profile Component</h2>
            <h2>Name: { props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() =>{ setCount(1)
                // setCount2(2)
            }
            }>Count-Changed</button>
        </div>
    )
}
export default Profile;