'use strict'

import { Types } from '../constants';
import logic from '../../../logic'
import { alertActions } from './alert';

export const userActions = {
    login,
    logout,
    retrieveUser,
    register
}

function login(username, password, history) {
    return dispatch => {

        logic.login(username, password)
            .then(user => {
                dispatch({ type: Types.UPDATE_USER, payload: user })
                history.push('/')
            }
            ).catch(error => {
                dispatch(alertActions.error(error.message))
            })
    }
}

function logout() {
    return dispatch => {

        logic.logout()
            .then(()=> {
                dispatch({ type: Types.UPDATE_USER, payload: {} })
            })
            .catch(error => {
                dispatch(alertActions.error(error))
            })
    }
}

function retrieveUser() {
    return dispatch => {
        
        logic.retrieveUser()
            .then(user => {
                dispatch({ type: Types.UPDATE_USER, payload: user })
            })
            .catch(error => {
                logic.logout()
                dispatch(alertActions.error(error))
            })
    }
}

function register(name, surname, email, password, history) {
    return dispatch => {

        logic.register(name, surname, email,  password)
            .then(() => { 
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            })
            .catch(error => {
                dispatch(alertActions.error(error.message));
            })
    };
}