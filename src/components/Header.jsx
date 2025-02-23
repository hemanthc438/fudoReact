import '../../index.css'
import fudoo from '../assets/images/fudoo.svg'
import { Link } from 'react-router-dom'
export const Header = () => (
    <>
        <div className="flex justify-between items-center p-5 shadow-xl shadow-black/5">
            {Title}
            <div className="flex">
                <ul className='flex flex-row gap-30 p-2'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about/profile'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
        </div>
    </>
) 
export const Title = (
    <>
        <img style={{height:'30px'}} src={fudoo}></img>
    </>
)