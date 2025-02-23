import Card from "./Card"
import { useEffect, useState } from "react"
import Schimmer from "./Schimmer"
import useRestaurants from "./hooks/useRestaurants"
import useOnline from "./hooks/useOnline"

const Body = () =>{
    let [searchText,setSearchText] = useState("")
    const isOnline=useOnline()
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    let [restaurants,setRestaurants]=useState([])
    let [allRestaurants,setAllRestaurants]=useState([])
    useEffect(()=>{
        getRestaurants()
        console.log("res")
    },[])
    async function getRestaurants(){
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const filterData=(text,restaurants)=>{
        if(text==''){
            setFilteredRestaurants(allRestaurants)
        }
        else
        setFilteredRestaurants(restaurants?.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(text.toLowerCase())))
    }
    if(isOnline===false){
        return (<h1>no internet</h1>)
    }
    return allRestaurants?.length===0?(
    <div className="flex flex-col w-full justify-center">
        <input
            className="bg-neutral-100 w-8/10 mx-auto m-3 p-3 rounded-xl transition-all duration-300 hover:scale-95 "
            placeholder="search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
                filterData(e.target.value,allRestaurants)
            }}
        />
    <div className="grid grid-cols-4 w-8/10 mx-auto gap-10 overflow-hidden">
        {
            Array(11).fill("").map((_,index)=>(
        <Schimmer key={index}/>))
        }
    </div>
    </div>):
        (<div className="flex flex-col w-full justify-center">
            <input
                className="bg-neutral-100 w-8/10 mx-auto m-3 p-3 rounded-xl transition-all duration-300 hover:scale-95 "
                placeholder="search"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    filterData(e.target.value,allRestaurants)
                }}
            />
        <div className="grid grid-cols-4 w-8/10 mx-auto gap-10 overflow-hidden">
            {
                filteredRestaurants?.map((restaurant)=>(
                    <Card {...restaurant.info} key={restaurant.info.id}/>
                ))
            }
        </div>
    </div>
    )
}



export default Body