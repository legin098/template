import { useDispatch, useSelector } from 'react-redux';
import { templateApi } from '../api'
import {onLogout, onLogin, onChecking, clearErrorMessage } from '../redux';
// import { clearErrorMessage, onChecking, onLogin, onLogout } from '../redux';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await templateApi.post('/auth',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 2000);
        }
    }

    // const startRegister = async({ email, password, name }) => {
    //     dispatch( onChecking() );
    //     try {
    //         const { data } = await templateApi.post('/auth/new',{ email, password, name });
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
    //     } catch (error) {
    //         dispatch( onLogout( error.response.data?.msg || '--' ) );
    //         setTimeout(() => {
    //             dispatch( clearErrorMessage() );
    //         }, 10);
    //     }
    // }


    // const checkAuthToken = async() => {
    //     const token = localStorage.getItem('token');
    //     if ( !token ) return dispatch( onLogout() );

    //     try {
    //         const { data } = await templateApi.get('auth/renew');
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch( onLogout() );
    //     }
    // }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }



    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        //checkAuthToken,
        startLogin,
        startLogout,
        //startRegister,
    }

}