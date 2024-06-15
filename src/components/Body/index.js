import { resList } from "../../utils/apidata";
import RestaurantCard from "../RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

  //State variable -> Super Powerful Variable 

  const [ listOfRestaurant, setListOfRestaurant ] = useState(resList);

  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.4594965&lng=77.0266383&carousel=true&third_party_vendor=1'
);

    const json = await data.json();

    // console.log(json);

        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);


    // setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  
  };




   
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