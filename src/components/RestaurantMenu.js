import useRestaurantMenu from "../config/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";



const RestaurantMenu=()=>{

    
    const {resId}=useParams()
    const menuData=useRestaurantMenu(resId)
    const [showIndex,setShowIndex]=useState(null)


    if(menuData==null)
    {
        return <RestaurantMenuShimmer/>
    }

    const {name,costForTwoMessage,cuisines,avgRating,feeDetails}=menuData?.cards[0]?.card?.card?.info
    const catogories=menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="Menu text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            {catogories.map((catagory,index)=><RestaurantCategory  key={ catagory?.card?.card?.data?.title} data={catagory?.card?.card}  showItem={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    )

}

export default RestaurantMenu;


//Controlled component and uncontrolled component
//Lifting the state up
//prop drilling