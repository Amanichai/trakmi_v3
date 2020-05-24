import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/spacer';

const AuthForm =({ headerText, errorMsg, onSubmit, submitButtonText })=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer>
        <Text h3 style={styles.ctrTxt}>{headerText}</Text>
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
            {errorMsg ? <Text style={styles.errorStyle}>{errorMsg}</Text> : null}
            <Button
                title={submitButtonText}
                onPress={()=>onSubmit({email, password})}
                raised
                type='solid'
            ></Button>
        </Spacer>
    </>
    )
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 18,
        color: '#D11149',
        textAlign: 'center',
        margin: 10
    },
    ctrTxt: {
        textAlign: 'center',
    }

});

export default AuthForm;