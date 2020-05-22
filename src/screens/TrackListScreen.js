import React from 'react';
import { View, StyleSheet, Text, NativeModules, Button } from 'react-native';

const TrackListScreen = ({navigation})=>{
    return <>
                <Text style={{fontSize: 48}}>TrackListScreen</Text>
                <Button
                    title="Go to details"
                    onPress={()=> navigation.navigate('Details')}
                ></Button>
           </>
}

const styles = StyleSheet.create({

});

export default TrackListScreen;