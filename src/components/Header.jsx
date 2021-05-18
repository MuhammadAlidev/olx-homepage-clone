import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../images/navIcon.png'
import '../App.css'
import searchIcon from '../images/searchIcon.png'

const Header = () => {
    return (
        <Navbar className="nav">
            <img src={Img} className="navIcon" alt="" />
            <InputGroup>
                <img src={searchIcon} className="inpIcon" alt="" />
                <input type="text" placeholder="Pakistan" className="inp1"/>
                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="inp2"/>
            </InputGroup>
            <a href="./" className="loginLink">Login</a>
            <Button type="submit" className="sellBtn"><span className="plus">+</span>Sell</Button>
        </Navbar>
    )
}

export default Header;
