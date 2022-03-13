import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider, connect, useSelector} from 'react-redux';
import UserContainer from "./UserProfileContainer";


export default function UserProfile (props) {


        return (
            <Provider store={store}>
                <UserContainer/>

            </Provider>
        );
}
if (document.getElementById('userProf')) {
    ReactDOM.render(<UserProfile />, document.getElementById('userProf'));
}
