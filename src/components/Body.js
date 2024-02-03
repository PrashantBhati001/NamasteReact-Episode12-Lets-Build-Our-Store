import RestaurantCard,{restaurantCardOffer} from "./RestaurantCard";
//import resList from "../config/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";


const Body=()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const [searchText,setsearchText]=useState("")

    const RestaurantCardWithOffer=restaurantCardOffer(RestaurantCard)
    const onlineStatus=useOnlineStatus()

    
    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{
    
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.148729542592013&lng=77.6095475256443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json=await data.json()            
            setlistOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
    }

    const handleTopFilterButton=()=>{

        const newList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
        setFilteredRestaurants(newList)

    }

    const handleSearchButton=()=>{
        const newarr=[]
        for(let i=0;i<listOfRestaurants.length;i++)
        {
            const dishName=listOfRestaurants[i].info.name.toLowerCase()
            if(dishName.includes(searchText.toLowerCase()))
            {
                newarr.push(listOfRestaurants[i])
            }
        }
        setFilteredRestaurants(newarr)
    }


  

   if(onlineStatus==false)
   {
    return <h1>OOPS,Looks like  you are offline!!!</h1>
   }

    return listOfRestaurants.length === 0?(<Shimmer />):(
        <div className="body m-2">
            {/* <div className="Filter flex justify-between mb-2">

                <div className="search">
                    <input type="text" className="border-solid border-2 border-slate-950" value={searchText}  onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button className="search-btn border-solid border-2 bg-stone-200 px-2" onClick={handleSearchButton}>Search</button>   
                </div>

                <button className="filter-btn border-solid border-2 bg-stone-200 px-4 rounded-lg " onClick={handleTopFilterButton}>Top price food</button>
   
            </div> */}

            <div className="res-container flex flex-wrap">
                {filteredRestaurants.map((restaurant)=> 
                <Link to={"/restaurant/"+restaurant.info.id}  key={restaurant.info.id}  className="relative group"> 

                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardWithOffer resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
                {/* {console.log(restaurant.info.aggregatedDiscountInfoV3)}
                <RestaurantCardWithOffer resData={restaurant} /> */}

                </Link>)}
            </div>

        </div>
    )
}

export default Body



