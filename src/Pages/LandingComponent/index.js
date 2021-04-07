import React, { useEffect, useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AgriPurchaseManagement from '../../Panel/LandingPanel/AgriPurchaseManagement';
import AgriMasterMaintenance from '../../Panel/LandingPanel/AgriMasterMaintenance';
import SupplierMasterMaintenance from '../../Panel/LandingPanel/SupplierMasterMaintenance';
import AgriPurchaseRequest from '../../Panel/LandingPanel/AgriPurchaseRequest';
import BrokenLink from '../../Pages/PageErrors/BrokenLink';
import './landingComponent.css';
import navigationList from './NavRouteList.js';
import { UserStateContext } from '../../ContextApi/UserStateContext';

function LandingComponent(props) {
    const { dashboard_id, set_dashboard_id } = useContext(UserStateContext)
    useEffect(() => {
        if (props.location.pathname === '/dashboard') {
            props.history.push('/dashboard/agriPurchaseManagement');
        }
    }, [props.location]);
    return (
        <div className="landing-page-c">
            <div className="navroute-c">
                <div className="navroute-sidebar-c">
                    <ul className="dashboard-list-item">
                        {navigationList.map((item, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <Link
                                        to={`${props.match.url}${item.url}`}
                                        className={`route-link-attribute-c ${dashboard_id === idx ? 'active-route-link' : ''}`}
                                        onClick={() => set_dashboard_id(idx)}>
                                        <li>{item.title}</li>
                                    </Link>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
                <div className="navroute-display-c">
                    <Switch>
                        <Route exact path={`${props.match.url}/agriPurchaseManagement`} render={(props) => <AgriPurchaseManagement {...props} />} />
                        <Route exact path={`${props.match.url}/agriMasterMaintenance`} render={(props) => <AgriMasterMaintenance {...props} />} />
                        <Route exact path={`${props.match.url}/supplierMasterMaintenance`} render={(props) => <SupplierMasterMaintenance {...props} />} />
                        <Route exact path={`${props.match.url}/agriPurchaseRequest`} render={(props) => <AgriPurchaseRequest {...props} />} />
                        <Route component={BrokenLink} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent;