import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading());

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            });
        
        dispatch(finishLoading());
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                });

                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid:            uid,
        displayName:    displayName,
    },
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout,
});