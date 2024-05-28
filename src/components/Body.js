import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [resNewList, setResNewList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional chaining
    setResNewList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // conditional rendering

  // if(resNewList.length === 0){
  //   return <Shimmer />
  // }

  return resNewList.length === 0 ? <Shimmer /> : (
    <>
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = resNewList.filter(
                (res) => res.info.avgRating > 4.0
              );
              setResNewList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {resNewList?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div> 
    </>
  );
}

export default Body;
