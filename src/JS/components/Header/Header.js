import React from 'react';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="navbar" >
                <a className="logo" href="/home"> <img src={logo} alt="" /> SoftCoder</a>
                <div className="nav">
                    <a href="/home">Home</a>
                    <a href="/employes">Employes</a>
                    <a href="/about">About</a>
                </div>
            </div>
            <div className="header-Salary">
                <h2>Developers Projects Base Monthly Salary</h2>
                <h4>Total Budget: 50000 Usd</h4>
            </div>
        </div>
    );
};

export default Header;