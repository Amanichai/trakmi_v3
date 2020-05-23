import createDataContext from './createDataContext';

const authReducer = (state, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

const signup = (dispatch)=>{
    return({email, password}) =>{
        //RETRIEVE EMAIL AND PASS FROM DB
        //SIGN IN IF AUTHENTICATED
        //SEND ERROR IF NOT AUTHENTICATED
    }
}

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
    { isSignedIn: false}
)