import React, { Component, createContext } from 'react';
import { createMuiTheme } from '@material-ui/core';

export const UserStateContext = createContext();

class UserStateContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statusNavId:0,
            dashboardActiveId:0,
        }
       
        this.setStatusNav = this.setStatusNav.bind(this);
        this.setDashboardId = this.setDashboardId.bind(this);

    }

    componentDidMount() {
       // runs after mounting component
    }

    setStatusNav = (id) => {
        this.setState({statusNavId:id})
    }

    setDashboardId = (id) => {
        this.setState({dashboardActiveId:id})
    }

    render() {
        return (
            <UserStateContext.Provider value={{
                set_status_nav:this.setStatusNav,
                status_nav:this.state.statusNavId,
                dashboard_id:this.state.dashboardActiveId,
                set_dashboard_id:this.setDashboardId,
            }}>
                {this.props.children}
            </UserStateContext.Provider>
        )
    }
}

export default UserStateContextProvider;
