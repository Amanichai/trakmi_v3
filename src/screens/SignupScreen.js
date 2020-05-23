import React, {useState} from 'react';
import { View, StyleSheet, NativeModules } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/spacer";

const SignupScreen = ({navigation})=>{
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
                    <Button
                        title="Sign Up"
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
    }

});

export default SignupScreen;