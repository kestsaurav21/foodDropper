import { FiClock } from "react-icons/fi";
import { CDN_URL } from "../../utils/constants";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { 
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;

  console.log(resData);

  return (
    <div className="m-20 p-2 w-[250px] h-[400px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <div>
        <img
          className="h-40 w-full object-cover rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div className="res-card-content">
        <h3 className="font-bold py-4 text-lg ">{name}</h3>

        
        <h4 className="flex items-center">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        
        <h4 className="flex items-center">
          <span className="icons">
            <FiClock />
          </span>
          <span> {resData?.info?.sla?.deliveryTime} minutes</span>
        </h4>
        <h4 className="item-price">{costForTwo} </h4>
        <h3 className="text-ellipsis overflow-hidden ...">{cuisines.join(', ')}</h3>
      </div>
    </div>
    )
}


export default RestaurantCard;