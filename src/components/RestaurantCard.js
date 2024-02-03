import {CDN_URL} from "../config/constant";
import { MENU_URL } from "../config/constant";

const RestaurantCard=(props)=>{

    const {resData}=props
    const{avgRating,cloudinaryImageId,costForTwo,cuisines,name,sla}=resData.info

    return (
        <div className="res-card w-[225px] p-2 m-3 bg-slate-200 hover:bg-slate-400">
            <img className="card-logo  rounded-lg h-[250px]" src={CDN_URL+cloudinaryImageId} alt="Image not found" />
            <h3 className="font-bold text-lg my-1">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}


export const restaurantCardOffer=(RestaurantCard)=>{
    return (props)=>{

        const {resData}=props
        return (
            <div>
                <RestaurantCard  {...props}/>
                {
                    <>
                        
                        {(<div className="absolute font-montserrat  top-[230px] left-7 text-white opacity-90 font-extrabold text-lg group-hover:scale-95 transition-transform">
                            {resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
                            {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
                        </div>
                        )}
                    </>
                }
            </div>
        )
    }
}
export default RestaurantCard;


//Higher Order Component is a function which takes a component and enhances it and return a component.