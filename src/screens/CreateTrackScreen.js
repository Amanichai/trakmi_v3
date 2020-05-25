import React from 'react';
import { View, StyleSheet, Text, NativeModules } from 'react-native';
import {SafeAreaView} from 'react-navigation'

const CreateTrackScreen = ()=>{
    return <SafeAreaView forceInset={top="always"}>
                <Text style={styles.ctrTxt}>CreateTrackScreen</Text>
           </SafeAreaView>
}

const styles = StyleSheet.create({
    ctrTxt: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 20
    }
});

export default CreateTrackScreen;