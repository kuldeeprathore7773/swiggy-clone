import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRatingString, cuisines, areaName } = resData.info;
    return (
      <div className="res-card">
        <img
          src={ CDN_URL
             +
            resData.info.cloudinaryImageId
          }
          alt="food-img"
          className="card-food-img"
        />
        <h3>{name}</h3>
        <p>{avgRatingString}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    );
  };

export default RestaurantCard;