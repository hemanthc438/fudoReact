import '../../index.css'
import fudoo from '../assets/images/fudoo.svg'
import { Link } from 'react-router-dom'
import itemStore from './hooks/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
export const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const [ham,setHam]=useState(false)
    useEffect(() => {
        if (ham) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [ham]);
    // console.log(cartItems)
    //flex flex-col lg:flex-row lg:justify-between justify-center items-center p-5 shadow-xl shadow-black/5 text-center lg:text-left
    return (
    <div>
        <div className="relative flex lg:justify-between items-center p-5 shadow-xl shadow-black/5">
        <button
                className='lg:hidden text-black'
                onClick={()=>setHam(!ham)}
            >
                ☰
            </button>
                {Title}
                <ul className={`hidden lg:flex lg:flex-row gap-30 p-2`}>
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
        {
                ham&&(
                    <div className='absolute flex w-screen h-screen'>
                        <ul className='fixed inset-0 z-50 mt-16 bg-orange-600 h-screen w-50 lg:hidden lg:flex-col block p-2'>
                            <li className='text-white text-xl m-3 hover:text-black' onClick={()=>setHam(!ham)}><Link to={'/'}>Home</Link></li>
                            <li className='text-white text-xl m-3 hover:text-black' onClick={()=>setHam(!ham)}><Link to={'/about/profile'}>About</Link></li>
                            <li className='text-white text-xl m-3 hover:text-black' onClick={()=>setHam(!ham)}><Link to={'/contact'}>Contact</Link></li>
                            <li className='text-white text-xl m-3 hover:text-black' onClick={()=>setHam(!ham)}><Link to='/login'>Login</Link></li>
                            <li className='text-white text-xl m-3 hover:text-black' onClick={()=>setHam(!ham)}><Link to={'/cart'} 
                                state={cartItems}>
                                <span className='pl-2 pr-2 mr-1 rounded bg-green-600 text-white font-bold'>
                                    {cartItems.length}</span>Cart</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
    </div>
) 
}
export const Title = (
    <>
        <img className="items-center lg:w-auto lg:text-left w-32 h-8 transition-all duration-500 ease-in-out 
             absolute left-1/2 transform -translate-x-1/2 
             lg:relative lg:left-0 lg:translate-x-0" style={{height:'30px'}} src={fudoo}></img>
    </>
)