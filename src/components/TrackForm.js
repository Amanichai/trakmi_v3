import React from 'react';
import { Input, Button } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from '../components/spacer';

const TrackForm = ()=>{
    return <>
            <Spacer>
                <Input placeholder='Enter Track Name'></Input>
            </Spacer>
            <Spacer><Button title='Start Recording'></Button></Spacer>

    
    </>
}

const styles = StyleSheet.create({

});

export default TrackForm;

