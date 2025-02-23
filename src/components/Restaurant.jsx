import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import Schimmer from "./Schimmer";
import MenuCategories from "./MenuCategories";
import useRestaurant from "./hooks/useRestaurant";
const Restaurant = () =>{
    const {id} = useParams();
    const [tab,setTab] = useState('online')
    const [search,setSearch] = useState("")
    // const [restaurant,setRestaurant] = useState([])
    // const [restaurantMenu,setRestaurantMenu] = useState([])
    const {restaurant,restaurantMenu} = useRestaurant(id)
    
    return (
        restaurant?.length!=0?(
        <div className="flex flex-col w-4xl h-auto pt-10 mx-auto ">
            <div className="grid grid-rows-8 w-full h-80  m-2 rounded-4xl bg-neutral-100 ">
                <div className="row-span-3 border-b border-neutral-300">
                    <h1 className="p-3 font-bold mt-5 text-3xl">{restaurant?.data?.cards[0]?.card?.card?.text}</h1>
                    <div className="flex flex-row h-10 items-end">
                        <p className={`ml-4 font-bold ${tab==='online'?"  border-b-5 rounded-b border-orange-500 pb-1":"pb-2"}`}
                            onClick={()=>setTab('online')}
                        >{restaurant?.data?.cards[1]?.card?.card?.tabs[0]?.title}</p>
                        <p className={`ml-4 font-bold ${tab!='online'?"  border-b-5 rounded-b border-orange-500 pb-1":"pb-2"}`}
                            onClick={()=>setTab('dineout')}
                        >{restaurant?.data?.cards[1]?.card?.card?.tabs[1]?.title}</p>
                    </div>
                </div>
                <div className="flex row-span-4 bg-gradient-to-t from-black/15 to-transparent rounded-b-4xl">
                    <div className="w-full m-4 rounded-4xl bg-white border border-neutral-300">
                        <p className="flex items-center pl-3 pt-3 pb-1 font-bold">
                            <img  className="w-4 h-4 mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZZDDZdrwOTUL--HgKdSA_22ZgBciqwXhPg&s" alt="star"/>{restaurant?.data?.cards[2]?.card?.card?.info?.avgRating} (
                                    <span>{restaurant?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
                                </span>) <BsDot className="text-neutral-500"></BsDot>
                                <span>{restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</span>
                        </p>
                        <p className="pl-3 w-full text-sm text-red-600 overflow-hidden truncate text-ellipsis">{restaurant?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
                        <div className="flex">
                            <div className="flex flex-col justify-between ml-3 w-3/100 h-12"><BsDot className="text-neutral-500"></BsDot><BsDot className="text-neutral-500"></BsDot></div>
                            <div className="flex flex-col justify-between ml-1 w-95/100 h-12">
                                <div className="flex flex-row">
                                <p className="text-sm font-bold">Outlet</p>
                                <p className="text-sm font-light ml-3">{restaurant?.data?.cards[2]?.card?.card?.info?.locality}</p>
                                </div>
                                <p className="text-sm font-bold">{restaurant?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mx-auto text-neutral-700 ">M E N U</p>
            {
                restaurantMenu?.map((menuItem,index)=>(
                <div className="flex flex-col m-4" key={index} >
                    <MenuCategories params={menuItem}/>
                </div>
                ))
            }
        </div>):(
            <div className="flex w-5/10 h-svh pt-10 mx-auto ">
                <Schimmer/>
            </div>
        )
    )
}
export default Restaurant;