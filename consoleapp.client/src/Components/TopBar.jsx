import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <input type="text" className="search-input" placeholder="Search..." />
        </div>
    );
}

export default TopBar;
