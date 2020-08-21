import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebaseConfig';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const dispatch                      = useDispatch();
    const [checking, setChecking]       = useState(true);
    const [isLoggedIn, setIsLoggedIn]   = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
    }, [dispatch]);

    if(checking) {
        return (
            <h1>Espere...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    {
                        (!isLoggedIn)
                            ?
                                <>
                                    <Route
                                        path="/auth"
                                        component={ AuthRouter }
                                    />

                                    <Redirect to="/auth/login" />
                                </>
                            :
                                <>
                                    <Route
                                        exact
                                        path="/"
                                        component={ JournalScreen }
                                    />

                                    <Redirect to="/" />
                                </>
                    }
                </Switch>
            </div>
        </Router>
    )
}
