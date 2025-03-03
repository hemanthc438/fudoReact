import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Cart = () => {
    const location = useLocation()
    const items = location.state
    return (
        <div>
            {
                items.map((item)=>(
                    <MenuItem params={item}/>
                ))
            }
        </div>
    )
}
export default Cart;