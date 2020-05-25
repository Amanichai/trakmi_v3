import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/authContext';

const ResolveAuthScreen = ()=>{
    const { localLogIn } = useContext(AuthContext);

    useEffect(()=>{
        localLogIn();
    }, []);

    return null;
}

export default ResolveAuthScreen;