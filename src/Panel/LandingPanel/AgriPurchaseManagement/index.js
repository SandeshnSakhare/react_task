import React,{useContext} from 'react';
import StatusNavBar from '../../../Components/StatusNavBar'
import { UserStateContext } from '../../../ContextApi/UserStateContext';
import StatusView from './StatusView.js';


function AgriPurchaseManagement() {
    const {status_nav} = useContext(UserStateContext);
    return (
        <div className="panel-display-container">
            <h2>Agri-Purchase Management</h2>
            <div className="status-navbar-c">
                <StatusNavBar />
            </div>
            <div className="status-content-display">
                {status_nav === 0 && <StatusView />}
                {status_nav === 1 && <p> Executing View</p>}
                {status_nav === 2 && <p>Executed View</p>}
                {status_nav === 3 && <p>Completed View </p>}
            </div>
        </div>
    )
}

export default AgriPurchaseManagement;