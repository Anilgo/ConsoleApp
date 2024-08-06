import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ toggleSidebar, isOpen }) => {
    return (
        <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
    );
}

export default ToggleButton;
