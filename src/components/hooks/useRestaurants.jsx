import { useEffect, useState } from "react"

const useRestaurants = () =>{
    let [restaurants,setRestaurants]=useState([])
    let [allRestaurants,setAllRestaurants]=useState([])
    let [filteredData,setFilteredData] = useState([])
    useEffect(()=>{
        getRestaurants()
        console.log("res")
    },[])
    async function getRestaurants(){
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return {restaurants,allRestaurants,filteredData}
}
export default useRestaurants;