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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className='nav-items'>
                <ul>
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="link">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Contact Us</Link>
                </li>
                <li>
                    Online Status:{onlineStatus ? "🟢": "🔴"}
                </li>
                <li>
                    <Link to="/cart" className="link">Cart</Link>
                </li>

                <button className='login'
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

