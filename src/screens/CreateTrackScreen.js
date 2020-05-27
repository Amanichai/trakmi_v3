import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';

const CreateTrackScreen = ()=>{
    return <SafeAreaView forceInset={top="always"}>
                <Text h3 style={styles.ctrTxt}>CreateTrackScreen</Text>
                <Map></Map>
           </SafeAreaView>
}

const styles = StyleSheet.create({
    ctrTxt: {
        textAlign: 'center',
        marginTop: 20
    }
});

export default CreateTrackScreen;