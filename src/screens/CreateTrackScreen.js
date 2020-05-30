import '../_mockLocations';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {Context as LocationContext} from '../context/locationContext';

const CreateTrackScreen = ({isFocused})=>{
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation)

// console.log(isFocused)


    return <SafeAreaView forceInset={top="always"}>
                <Text h3 style={styles.ctrTxt}>CreateTrackScreen</Text>
                <Map></Map>
                {err ? <Text>Please allow permissions to proceed...</Text> : null}
                <TrackForm></TrackForm>
           </SafeAreaView>
}

const styles = StyleSheet.create({
    ctrTxt: {
        textAlign: 'center',
        marginTop: 20
    }
});

export default withNavigationFocus(CreateTrackScreen);