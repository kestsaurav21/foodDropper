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

        <div className="p-2.5 shadow-sm bg-white mx-auto w-1/2 text-center">
            <img className="w-50 h-50 rounded-full shadow-md mx-auto" src={avatar_url}/>
            <h3 className="mt-6">NAME: {name}</h3>
            <h3 className="mt-6">LOCATION: {location}</h3>
            <h3 className="mt-6">Github: {login}</h3>
        </div>
    )
}

export default User;