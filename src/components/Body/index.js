import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import resList from "../../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  //State variable -> Super Powerful Variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();


      // Using optional chaining to safely access nested properties
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!restaurants) {
        throw new Error("Failed to fetch restaurants data");
      }

      // Assuming setListOfRestaurants is a function defined elsewhere
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      setError(true);

      console.error("Error fetching data:", error);
      // Optionally, handle the error in the UI or state
      setListOfRestaurants(resList);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline! Please check your Internet Connection.</h1>

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              // * Filter logic
              const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRating) > 4
              );

              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>


    // <div className="body">
    //   <div className="flex filter">
    //     <div className="search m-4 p-4">
    //       <input
    //         type="text"
    //         placeholder="Search Food or Restaurant"
    //         value={searchText}
    //         onChange={(e) => {
    //           setSearchText(e.target.value);
    //         }}
    //       />
    //       <button
    //       className="px-4 py-2 bg-green-100 m-4 rounded-lg"
    //       onClick={() => {
    //         const filteredRestaurant = listOfRestaurants.filter((res) =>
    //           res.info.name.toLowerCase().includes(searchText.toLowerCase())
    //         );

    //         setFilteredRestaurant(filteredRestaurant);
    //       }}>
    //       Search
    //     </button>
    //     </div>
        
    //     <div className="search m-4 p-4 flex items-center">
    //       <button
    //       className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
    //       onClick={() => {
    //               const filteredList = listOfRestaurants.filter(
    //                 (restaurant) => restaurant.info.avgRating > 4
    //               );
    //       setListOfRestaurants(filteredList);
    //       }}>
    //         Top Rated Restaurants
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex flex-wrap">
    //     {filteredRestaurant.map((restaurant) => (
    //       <Link 
    //       style={{
    //                   textDecoration: 'none',
    //                   color: '#000',
    //             }}
    //       key={restaurant.info.id}
    //       to={"/restaurants/" + restaurant.info.id}
    //       ><RestaurantCard  resData={restaurant} /></Link>
    //     ))}
    //   </div>
    // </div>

   
    
  );
};

export default Body;