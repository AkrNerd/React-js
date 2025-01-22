import { useEffect, useState } from "react";
    
const useOnline = () => {
    
    const [isOnline, setIsOnline] = useState(true);

    //logic as i need to run it once so put it inside useffect() with []
  
    useEffect(() => {
        // state will change
      
        const handleOnline = () => {
        setIsOnline(true);
      };

      //whenerver u go ONLINE this event will trigger
      window.addEventListener(
        "online", handleOnline);
        
        
        const handleOffline = () => {
        setIsOnline(false);
      };

      //whenerver u go OFFLINE this event will trigger
      window.addEventListener(
        "offline", handleOffline);
        
        
     

      // CLEAN-UP SO THAT NO-MEMEORY LEAKAGE AND APP DOES NOT GET SLOW
      return () => {
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
      };
    },[])
   

    return isOnline; // return true or false
}

export default useOnline;