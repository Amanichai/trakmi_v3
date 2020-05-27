import React, {useContext} from 'react';
import {Context as LocationContext } from '../context/locationContext';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

const Map = ()=>{
    const { state: {currentLocation} } = useContext(LocationContext);
    if(!currentLocation){
        return <ActivityIndicator size='large' style={{marginTop: 200}}></ActivityIndicator>
    }



    return  <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                // region={{
                //     ...currentLocation.coords,
                //     latitudeDelta: 0.01,
                //     longitudeDelta: 0.01   
                // }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={15}
                    strokeColor='rgba(218,118,53, 1)'
                    fillColor='rgba(218,118,53, 0.3)'
                ></Circle>
            </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }

});

export default Map;