import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/SignUP">Sign Up</Link>
                <Link to={"/SignIn"}>Sign In</Link>
                <Button style={{padding: "10px",
                                margin: "11px 0px 11px 38px",
                                backgroundColor:"red"}} >
                     <Link style={{textAlign: "center",marginLeft:"0px"}} to={"/SignIn"}>Sign out</Link>
                </Button>
            </div>
        </nav>
    );
};

export default Header;