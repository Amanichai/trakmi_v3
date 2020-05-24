import React, {useState, useContext} from 'react';
import { View, StyleSheet, NativeModules } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/spacer";
import {Context as AuthContext } from '../context/authContext';

const SignupScreen = ({navigation})=>{
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
                <Spacer>
                    <Text h3 style={styles.ctrTxt}>Sign Up To Trakmi</Text>
                </Spacer>
                <Spacer>
                    <Input 
                        label="email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
                    ></Input>
                    <Input 
                        secureTextEntry
                        label="password"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                    ></Input>
                </Spacer>
                <Spacer>
                    {state.errorMsg ? <Text style={styles.errorStyle}>{state.errorMsg}</Text> : null}
                    <Button
                        title="Sign Up"
                        onPress={()=>signup({email, password})}
                        raised
                        type='solid'
                    ></Button>
                </Spacer>
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
    },
    ctrTxt: {
        textAlign: 'center',
    },
    errorStyle: {
        fontSize: 18,
        color: '#4388d6',
        textAlign: 'center',
        margin: 10
    }

});

export default SignupScreen;