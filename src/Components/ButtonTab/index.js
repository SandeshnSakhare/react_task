import React from 'react';
import './ButtonTab.css';

function ButtonTab({ title, toggleId = () => { }, active, itemId, ...props }) {
    const handleChange = () => {
        toggleId(itemId);
    }
    return (
        <button className={` button-tab-c ${active ? 'button-tab-c-active' : ''}`} onClick={handleChange}>
            {title}
        </button>
    )
}

export default ButtonTab;