import { useEffect, useState } from "react";
import { USER_API } from "../../utils/constants";
import Shimmer from "../Shimmer";

const User = (props) => {

    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(USER_API)

        const json = await data.json()

        console.log(json);

        setUserInfo(json)
    }

    const [ userInfo, setUserInfo ] = useState({
        name: "default",
        location: "default",
        login: "@dummy",
        avatar_url: "http://dummy.com"
    });

    if (userInfo === null ) return <Shimmer/> ;

    const {
        avatar_url,
        name,
        login,
        location
    } = userInfo;

    return (  

        <div className="user-card">
            <img src={avatar_url}/>
            <h3>NAME: {name}</h3>
            <h3>LOCATION: {location}</h3>
            <h3>Github: {login}</h3>
            

        </div>
    )
}

export default User;