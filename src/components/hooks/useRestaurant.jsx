import { useEffect, useState } from "react"

const useRestaurant = (id) =>{
    const [restaurant,setRestaurant] = useState([])
    const [restaurantMenu,setRestaurantMenu] = useState([])
    useEffect(()=>{
        getRestaurant()
    },[])
    const getRestaurant = async() =>{
        const restaurantRaw =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const data = await restaurantRaw.json()
        setRestaurant(data)
        setRestaurantMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    return {restaurant,restaurantMenu}
}
export default useRestaurant;