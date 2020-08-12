import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Route
                exact
                path="/auth/login"
                component={ LoginScreen }
            />
            
            <Route
                exact
                path="/auth/register"
                component={ RegisterScreen }
            />

            <Redirect to="/auth/login" />
        </div>
    )
}
