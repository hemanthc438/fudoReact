import { useLocation } from "react-router-dom";
import CartItems from "./CartItems";
import { useState } from "react";

const Cart = () => {
    const location = useLocation()
    const [items,setItems] = useState(location.state)
    const reduce =items.reduce((acc,item)=>{
        acc[item.id] = acc[item.id] ? [[...acc[item.id]],item] : [item]
        return acc
    },{})
    console.log("reduce",reduce)
    if(items.length===0){
        return (
            <div className="flex flex-col w-3xl h-screen pt-10 mx-auto">
                <h1 className="font-bold text-3xl self-center">no items in cart</h1>
            </div>
        )
    }
    return (
        <div className="flex flex-col w-3xl h-screen pt-10 mx-auto ">
            <h1 className="font-bold text-3xl self-center">CART</h1>
            {
                Object.values(reduce).map((item,index)=>(
                    <div className="flex flex-col m-4" key={index}>
                    <CartItems  params={item}/>
                    </div>
                ))
            }
            <button className="p-2 m-5 bg-orange-600 text-white text-2xl rounded w-1/2 self-center">Proceed to pay</button>
        </div>
    )
}
export default Cart;