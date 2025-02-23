import Card from "./Card"
import { restaurantList } from "../../constants"
import { useEffect, useState } from "react"
import Schimmer from "./Schimmer"
import { Footer } from "./Footer"
import useRestaurants from "./hooks/useRestaurants"
import useOnline from "./hooks/useOnline"

const Body = () =>{
    // let [restaurants,setRestaurants]=useState([])
    // let [allRestaurants,setAllRestaurants]=useState([])
    let [searchText,setSearchText] = useState("")
    const {restaurants,allRestaurants,filteredData} = useRestaurants();
    const isOnline=useOnline()
    const filterData=(text,restaurants)=>{
        if(text==''){
            filteredData=allRestaurants
        }
        else
        filteredData = restaurants?.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(text.toLowerCase()))
        return filteredData
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
                setRestaurants(filterData(e.target.value,allRestaurants))
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
                    setRestaurants(filterData(e.target.value,allRestaurants))
                }}
            />
        <div className="grid grid-cols-4 w-8/10 mx-auto gap-10 overflow-hidden">
            {
                restaurants?.map((restaurant)=>(
                    <Card {...restaurant.info} key={restaurant.info.id}/>
                ))
            }
        </div>
    </div>
    )
}



export default Body