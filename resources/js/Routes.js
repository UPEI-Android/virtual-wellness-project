import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Dashboard from "./admin/components/pages/Dashboard";
import Login from "./admin/components/Login";
import AuthenticatedRoute from './admin/AuthenticatedRoute';
import ListUsers from "./admin/components/pages/users/Index";
import AddUsers from "./admin/components/pages/users/Add";
import EditUsers from "./admin/components/pages/users/Edit";
class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <AuthenticatedRoute exact path='/' component={Dashboard} />

                <AuthenticatedRoute exact path='/users' component={ListUsers} />
                <AuthenticatedRoute path='/users/add' component={AddUsers} />
                <AuthenticatedRoute path='/users/edit/:id' component={EditUsers} />
            </Switch>
        )
    }
}
export default Routes;
