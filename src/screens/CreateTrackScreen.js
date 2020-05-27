import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import {requestPermissionsAsync} from 'expo-location';
import * as Permissions from 'expo-permissions';

const CreateTrackScreen = ()=>{

    const [err, setErr] = useState(null)

    const startWatching = async () =>{
        const location = await Permissions.askAsync(Permissions.LOCATION);
        if(location.status !== 'granted'){
            setErr('error')
        }
    }
    useEffect(()=>{
        startWatching();
    }, [])

    return <SafeAreaView forceInset={top="always"}>
                <Text h3 style={styles.ctrTxt}>CreateTrackScreen</Text>
                <Map></Map>
                {err ? <Text>Please allow permissions to proceed...</Text> : null}
           </SafeAreaView>
}

const styles = StyleSheet.create({
    ctrTxt: {
        textAlign: 'center',
        marginTop: 20
    }
});

export default CreateTrackScreen;