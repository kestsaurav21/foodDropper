import { resList } from "../../utils/apidata";
import RestaurantCard from "../RestaurantCard";

const Body = () => {
    return(
        <div className='body'>
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>
            </div>
            <div className='res-container'>
            {/* {resList.map((resData, index) => (
                    <RestaurantCard key={index} resData={resData} />
            ))} */}
            { 
              resList.map((restaurant) => (
                <RestaurantCard key= {restaurant.data.id} resData = {restaurant} />
              ))}
            </div>
        </div>
    )
}

export default Body;