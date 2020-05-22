import React from 'react';
import { View, StyleSheet, Text, NativeModules, Button } from 'react-native';

const SignupScreen = ({navigation})=>{
    return <>
                <Text style={{fontSize: 48}}>SignupScreen</Text>
                <Button 
                title="Go to Signin"
                onPress={()=> navigation.navigate('Signin')}
                ></Button>
                <Button 
                title="Go to mainflow"
                onPress={()=> navigation.navigate('mainflow')}
                ></Button>
           </>
}

const styles = StyleSheet.create({

});

export default SignupScreen;