import '../../index.css'
import fudoo from '../assets/images/fudoo.svg'
import { Link } from 'react-router-dom'
import itemStore from './hooks/store'
import { useSelector } from 'react-redux'
export const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    return (
    <>
        <div className="flex justify-between items-center p-5 shadow-xl shadow-black/5">
            {Title}
            <div className="flex">
                <ul className='flex flex-row gap-30 p-2'>
                    <li className=' hover:text-orange-600'><Link to={'/'}>Home</Link></li>
                    <li className=' hover:text-orange-600'><Link to={'/about/profile'}>About</Link></li>
                    <li className=' hover:text-orange-600'><Link to={'/contact'}>Contact</Link></li>
                    <li className=' hover:text-orange-600'><Link to='/login'>Login</Link></li>
                    <li className=' hover:text-orange-600'><Link to={'/cart'} 
                        state={cartItems}>
                        <span className='pl-2 pr-2 mr-1 rounded bg-green-600 text-white font-bold'>
                            {cartItems.length}</span>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
) 
}
export const Title = (
    <>
        <img style={{height:'30px'}} src={fudoo}></img>
    </>
)