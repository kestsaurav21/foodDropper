import React, {  useState } from 'react'
import logo from '../../../assests/logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Header = () => {

    const [btn, setBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // if no dependency array => useEffect is called after each render
    // if dependency array is empty [] => useEffect is called at initial render ( called once)
    // if dependency array has [btn] => useEffect is called when there is an updated in btn.

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-44" src={logo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <ul className='flex space-x-4'>
                <li className="px-4">
                    Online Status:{onlineStatus ? "🟢": "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li className="px-4">
                <Link to="/grocery" className="link">Grocery</Link>
                </li>
                <li className="px-4">
                    <Link to="/cart" className="link">Cart</Link>
                </li>

                <button className='bg-blue-600 text-white px-8 font-extrabold'
                    onClick={()=>{
                        btn === 'Login'
                        ? setBtn('Logout')
                        : setBtn('Login')
                    }}>
                    {btn}
                </button>
                </ul>
            </div>
        </div>   
   );
}

export default Header;

