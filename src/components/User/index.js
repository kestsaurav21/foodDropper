import { useEffect, useState } from "react";

const User = (props) => {

    useEffect(()=> {
        // API CALL
    },[])

    const [ count, setCount ] = useState(0);
    return (  

        <div className="user-card">
            <h3>Count: {count}</h3>
            <button onClick={()=> {
                setCount(count+1)
            }}>Increase</button>
            <button onClick={()=> {
                setCount(count-1)
            }}>Decrease</button>
            <h3>NAME: {props.name}</h3>
            <h3>LOCATION: {props.location}</h3>
            <h3>Contact: {props.contact}</h3>
            

        </div>
    )
}

export default User;