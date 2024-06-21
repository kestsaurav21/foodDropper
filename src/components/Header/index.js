import React, { useEffect, useState } from 'react'
import logo from '../../../assests/logo.png'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    console.log("header render");

    const [btn, setBtn] = useState("Login");

    // if no dependency array => useEffect is called after each render
    // if dependency array is empty [] => useEffect is called at initial render ( called once)
    // if dependency array has [btn] => useEffect is called when there is an updated in btn.

    useEffect(()=> {
        console.log("useEffect called");
    }, [btn])

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button
                    className='login'
                    onClick={
                        ()=> {
                            btn === "Login"
                            ? setBtn("Logout")
                            : setBtn("Login")
                        }
                    }
                    >
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    );


}


export default Header;