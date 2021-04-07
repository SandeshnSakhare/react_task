import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingComponent from '../Pages/LandingComponent';
import NoMatch from '../Pages/PageErrors/NoMatch'

function AppRouter() {
    return (
        <Fragment>
            <Switch>
                <Redirect from='/' to='/dashboard' strict exact />
                <Redirect from='/dashboard/' to='/dashboard' strict exact />
                <Route path='/dashboard' component={LandingComponent} />
                <Route component={NoMatch}/>
            </Switch>
        </Fragment>
    )
}

export default AppRouter;