import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    // console.log(err);
    const { status, statusText } = err;   //? WITH DESTRUCTURING IT 
    
    return (
        <div>
            <h1>OPPS ERROR</h1>
            <h2>SOMETHING WENT WRONG</h2>
            {/* <h2>{err.status +" :   " + err.statusText }</h2>  [ WITHOUT DESTRUCTURING IT ] */}
            <h2>{status +" :   " + statusText }</h2>
        </div>
    )
}
export default Error