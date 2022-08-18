import React, { useState } from 'react';

const Navbar = ({navItems, showing, handleSetShowing}) => {
    
    const clickNavItem = (index) => {
        console.log("index", index);
        handleSetShowing(index)
    }

    return (
        <div className="navbar">
            <img className='logo' src="/logo.png"/>
            {navItems.map((item, i) => {
                return (
                    <h3 key={`nav links${i}`} onClick={()=> clickNavItem(i)} className={`${showing === item.id ? "active disabled" : ""}`}>{item.name}</h3>
                )
            })}
        </div>
    )
}

export default Navbar