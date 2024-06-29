import { useEffect, useState } from "react"
import Shimmer from "../Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../../utils/constants";




const RestaurantMenu = () => {


    const { resId } = useParams();
    console.log(resId);

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            MENU_API+ resId)
        
        const json = await data.json();

        console.log(json);

        setResInfo(json.data)

    }

    if (resInfo === null ) return <Shimmer/> ;

    const {name,
        areaName,
        cuisines,
        costForTwoMessage,
        avgRating,
    } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // const renderMenu = itemCards => {
    //     return itemCards.map((cardData) => {
    //         return <li>{cardData?.card?.info?.name}</li>
    //     })
    // }



    return  (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>{avgRating} -- {areaName} </h3>
            <h2>Menu</h2>
            <ul>
               {/* {renderMenu(itemCards)} */}

               {itemCards.map(item => (<li key={item?.card?.info.id}>{item?.card?.info?.name} - {"Rs."}
                {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
               </li>))}
            </ul>
          

            
        </div>
    )
}

export default RestaurantMenu
