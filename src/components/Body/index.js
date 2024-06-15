import { resList } from "../../utils/apidata";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";

const Body = () => {

  //State variable -> Super Powerful Variable 

  const [ listOfRestaurant, setListOfRestaurant ] = useState(resList);

   
    return(
        <div className='body'>
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>
                <button className="filter-btn"
                onClick={() => {
                  const filterList = listOfRestaurant.filter((restaurant) => restaurant.data.avgRating > 4);
                  setListOfRestaurant(filterList);
                }}> 
                Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
            {/* {resList.map((resData, index) => (
                    <RestaurantCard key={index} resData={resData} />
            ))} */}
            { 
              listOfRestaurant.map((restaurant) => (
                <RestaurantCard key= {restaurant.data.id} resData = {restaurant} />
              ))}
            </div>
        </div>
    )
}

export default Body;