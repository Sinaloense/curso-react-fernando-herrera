import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';

export const LoginRoute = () => {
    return (
        <>
            <Route exact path="/login" component={ LoginScreen } />
            <Redirect to="/login" />
        </>
    )
}
