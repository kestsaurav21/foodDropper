import { useEffect, useState } from "react"
import Shimmer from "../Shimmer"
import { useParams } from "react-router-dom"
import { CDN_URL, MENU_API } from "../../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";




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
        cloudinaryImageId,
        deliveryTime
    } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // const renderMenu = itemCards => {
    //     return itemCards.map((cardData) => {
    //         return <li>{cardData?.card?.info?.name}</li>
    //     })
    // }



    return  (

        <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                <FiClock />
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card">
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
                <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        // <div className="menu-card"> 
        //     <h1>{name}</h1>
        //     <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        //     <h3>{avgRating} -- {areaName} </h3>
        //     <h2>Menu</h2>
        //     <ul>
        //        {/* {renderMenu(itemCards)} */}

        //        {itemCards.map(item => (<li key={item?.card?.info.id}>{item?.card?.info?.name} - {"Rs."}
        //         {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
        //        </li>))}
        //     </ul>
          

            
        // </div>
    )
}

export default RestaurantMenu
