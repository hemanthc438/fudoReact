import { useDispatch, useSelector } from "react-redux";
import { URL_PRE, URL_PRE_ITEM } from "../../constants";
import { addItem, removeItem } from "./hooks/cartSlice";

const CartItems = ({params}) => {
    const showItem = params?.card?.info ? params?.card?.info : params
    const cartItems = useSelector((store)=>store.cart.items)
    const len = showItem[1]? showItem[0].length + 1 : 1
    const item = showItem[1]?showItem[1]:showItem[0]
    const filteredItem = cartItems.filter((cartItem)=>{
        if(cartItem.id === item.id)
            return cartItem
    })
    const dispatch = useDispatch()

    const handleAddToCart = () =>{
        dispatch(addItem(item))
    }
    const handleRemoveItem = () =>{
        dispatch(removeItem(item.id))
    }
    return (
        <div className="grid grid-cols-10 p-5 pb-8 border-b border-b-neutral-300">
            <div className="flex col-span-7 flex-col  ">
                {item?.itemAttribute?.vegClassifier==='VEG'?
                (<img className="h-4 w-4" src="https://toppng.com/uploads/preview/veg-11550711253oulno8mnhz.png" alt='veg'></img>):
                (<img className="h-3 w-3" src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png" alt='nonveg'></img>)}
                <p className="font-semibold">{item?.name}</p>
                <h1 className="font-semibold">{item?.defaultPrice/100 || item?.price/100}</h1>
                <p className="font-sembold">{item?.ratings?.aggregatedRating?.rating}</p>
                <p className="text-sm text-neutral-700">{item?.description}</p>
            </div>
            <div className="relative col-span-3 ml-20 mb-5 w-35 h-35 ">
                <img className="justify-end rounded-2xl w-full shadow-sm" src={URL_PRE_ITEM+item?.imageId}></img>
                    <div className="absolute grid grid-cols-3 mt-[-10px] ml-5 p-1 bg-white cursor-pointer rounded-2xl border border-neutral-300 text-green-500 font-bold w-25 h-10">
                        <h1 
                            onClick={()=>handleRemoveItem()}
                            className="pl-1 font-bold text-green-500">
                            -
                        </h1>
                        <h1 
                            className="text-center">{filteredItem.length}
                        </h1>
                        <h1 
                            onClick={()=>handleAddToCart()}
                            className="pr-1 font-bold text-right text-green-500">+
                        </h1>
                    </div>
            </div>
        </div>
    )
}
export default CartItems;