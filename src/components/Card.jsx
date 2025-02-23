import { useNavigate } from "react-router-dom"
import { URL_PRE } from "../../constants"
const Card = ({name,cloudinaryImageId,avgRating,sla,cuisines,areaName,id,aggregatedDiscountInfoV3}) =>{
    const navigate = useNavigate()
    const handleRestaurant = () =>{
        navigate(`restaurant/${id}`)
    }
    return (
    <div className="flex flex-col m-1 w-full mx-auto rounded-xl transition-all duration-300 hover:scale-95 " onClick={handleRestaurant}>
        <div className="relative">
            <img className='w-full h-44 rounded-xl' src={URL_PRE+cloudinaryImageId} alt="img"></img>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
            <h1 className="pl-2 text-xl rounded-2xl font-bold text-white truncate">{(aggregatedDiscountInfoV3?.header || "")+" "+(aggregatedDiscountInfoV3?.subHeader || "")}</h1>
        </div>
        </div>
        <div className="flex mt-2 flex-col ml-2 ">
            <h3 className="text-l font-bold truncate w-full overflow-hidden text-ellipsis">{name}</h3>
            <div className="flex items-center ">
                <img className='w-3.5 h-3.5 mr-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZZDDZdrwOTUL--HgKdSA_22ZgBciqwXhPg&s" alt='star'/>{avgRating} 
                    <span className='pl-2'>{sla.slaString}</span>
            </div>
            <p className="truncate w-full overflow-hidden text-ellipsis">{cuisines.join(', ')}</p>
            <div className="flex items-center">
                <img className='w-3.5 h-3.5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodaBYd3WKhTHyfCVFZgO2f3V3ja1m7N68Ng&s" alt='image'/>
                <p className="pl-2 rest-area">{areaName}</p>
            </div>
        </div>
    </div>
)
}

export default Card