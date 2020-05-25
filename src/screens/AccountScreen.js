import React, {useContext} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/authContext';
import Spacer from '../components/spacer';

const AccountScreen = ()=>{
    const { signout } = useContext(AuthContext)
    return <SafeAreaView forceInset={top="always"} style={styles.container}>
                <Text style={styles.ctrTxt}>AccountScreen</Text>
                <Spacer>
                    <Button
                        title="Signout"
                        onPress={signout}
                        raised
                        type='solid'
                    ></Button>
                </Spacer>
           </SafeAreaView>
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
        fontSize: 28
    }
});

export default AccountScreen;