import React, {useContext} from 'react';
import { View, StyleSheet, } from 'react-native';
import {Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLinks from '../components/NavLinks';

const SignupScreen = ({navigation})=>{
    const {state, signup} = useContext(AuthContext);

    return <View style={styles.container}>
        <AuthForm
        headerText="Sign Up To Trakmi"
        errorMsg={state.errorMsg}
        submitButtonText="Signup"
        onSubmit={signup}
        ></AuthForm>
        <NavLinks
        routeName="Signin"
        text="Already have an account? Signin"
        ></NavLinks>
           </View>
}

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }

});

export default SignupScreen;