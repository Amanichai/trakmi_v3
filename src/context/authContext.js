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
        case 'clear_error_msg':
            return {...state, errorMsg: ''}
        default:
            return state;
    }
}

const localLogIn = dispatch => async ()=>{
   const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token});
        navigate('Tracks')
    }else{
        navigate('loginFlow')
    }
}

const clrErrMsg = dispatch =>()=>{
    dispatch({ type: 'clear_error_msg'});
}

const signup = (dispatch)=> async ({email, password}) =>{
    try {
        const response = await trakerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signup', payload: response.data.token})
        navigate('Tracks')
    }catch (err){
            dispatch({ type: 'add_error', payload: 'Email not available'})
    };
};

const signin = (dispatch)=>async ({email, password})=>{
    try {
        const response = await trakerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('Tracks');
    }catch (err){
        dispatch({ type: 'add_error', payload: 'Invalid email or password'})
    }
}


const signout = (dispatch)=>{
    return ()=>{
        //LOGOUT
    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signin, signout, signup, clrErrMsg, localLogIn},
    { isSignedIn: false, errorMsg: ''}
)