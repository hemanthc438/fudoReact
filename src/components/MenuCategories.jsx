import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuCategories = ({params}) =>{
    //console.log(params)
    const items = params?.card?.card?.itemCards
    return params?.card?.card?.title?(
        <div className="flex flex-col">
            <h1 className="font-bold text-xl pl-3">{params?.card?.card?.title}</h1>
            {
                items && Object.values(items).map((item)=>(
                    <MenuItem key={item?.card?.info?.id} params={item}/>
                ))
            }
        </div>
    ):(<></>)
}
export default MenuCategories;