import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trakerApi from '../api/traker';
import { navigate } from '../../src/navigationRef';

const authReducer = (state, action) =>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMsg: action.payload};
        case 'signup':
            return {errorMsg: '', token: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch)=> async ({email, password}) =>{
    try {
        const response = await trakerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signup', payload: response.data.token})
        navigate('Tracks')
    }catch (err){
            dispatch({ type: 'add_error', payload: 'Invalid email or password'})
    };
};

const signin = (dispatch)=>{
    return({email, password})=>{
        //RETRIEVE EMAIL AND PASS FROM DB
        //SIGN IN IF AUTHENTICATED
        //SEND ERROR IF NOT AUTHENTICATED
    }
}

const signout = (dispatch)=>{
    return ()=>{
        //LOGOUT
    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false, errorMsg: ''}
)