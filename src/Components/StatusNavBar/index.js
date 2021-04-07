import React, { useState, useContext } from 'react'
import './statusNavBar.css';
import { UserStateContext } from '../../ContextApi/UserStateContext';

function StatusNavBar(props) {
    const { set_status_nav } = useContext(UserStateContext);
    const [active, setAtive] = useState(0);
    const handleActive = (id) => {
        setAtive(id);
        set_status_nav(id)
    }
    return (
        <div>
            <div className="status-button-c">
                {statusList.map((item, idx) => {
                    return (
                        <div
                            className={`status-button-c-i ${active === idx ? 'status-button-i-a' : 'status-button-i'}`}
                            onClick={() => handleActive(idx)}
                            key={idx}
                        >
                            <div style={{ background: `${item.color}` }}>
                                {item.id}
                            </div>
                            <p>
                                {item.title}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StatusNavBar;


const statusList = [{
    title: 'Pending',
    id: 1,
    path: '/pending',
    color: 'red'
}, {
    title: 'executing',
    id: 2,
    path: '/executing',
    color: 'yellow'
}, {
    title: 'Executed',
    id: 3,
    path: '/executed',
    color: 'orange'
}, {
    title: 'Completed',
    id: 4,
    path: '/completed',
    color: 'green'
}]