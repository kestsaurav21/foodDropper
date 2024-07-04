import { useParams } from "react-router-dom"
import { CDN_URL } from "../../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerMenu from "../ShimmerMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null ) return <ShimmerMenu/> ;

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

    return  (
      <div class="menu">
    <header class="menu-header h-30vh bg-black text-gray-100 flex justify-center items-center gap-7.5">
    <div class="menu-header-left">
      <img class="w-62.5 h-42.5 rounded-md object-cover object-center" src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
    </div>
    <div class="menu-header-right">
      <div class="top text-center">
        <h1 class="text-4xl font-normal">{name}</h1>
        <h3 class="font-normal opacity-70 mt-1.25">{cuisines.join(', ')}</h3>
      </div>
      <div class="bottom flex gap-5 items-center mt-5 p-10">
        <h4 class="border-r-4 border-gray-300 pr-5">
          <span class="icons relative top-0.5 mr-0.75">
            <AiOutlineStar />
          </span>
          <span>{avgRating}</span>
        </h4>
        <h4 class="border-r-4 border-gray-300 pr-5">
          <span class="icons relative top-0.5 mr-0.75">
            <FiClock />
          </span>
          <span>{deliveryTime} MINS</span>
        </h4>
        <h3 class="ml-5">{costForTwoMessage}</h3>
      </div>
    </div>
  </header>

  <div class="menu-main mt-20 mx-37.5">
    <h2 class="text-4xl opacity-80 text-center" >Menu</h2>
    <h3 class="items opacity-60 text-2xl font-normal uppercase tracking-wider mt-2.5 text-center">{itemCards.length} items</h3>
    <div class="menu-main-card-container mt-12.5 rounded-md ">
      {itemCards.map((item) => (
        <div key={item.card.info.id} class="menu-card flex items-center justify-between gap-12.5 bg-white p-5 border-b border-gray-700">
          <div class="menu-card-left">
            <h2 class="menu-name text-2xl opacity-80">{item.card.info.name}</h2>
            <h3 class="menu-price font-normal opacity-80 mt-1.25">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
            <h4 class="menu-description font-normal opacity-80 mt-3.75">{item.card.info.description}</h4>
          </div>
          <div class="menu-card-right">
            <img class="h-[250px] w-[250px] rounded-md object-cover object-center" src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


   
    )
}

export default RestaurantMenu
