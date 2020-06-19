import React, {useContext} from 'react';
import { Input, Button } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from '../components/spacer';
import { color } from 'react-native-reanimated';

const TrackForm = ()=>{
    // const {
    //     state: {name, record, location},
    //     startRecord,
    //     stopRecord,
    //     changeName
    // } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder='Enter Track Name'></Input>
            </Spacer>
            <Spacer>
                {record 
                ?  <Button buttonStyle={color='green'} onPress={startRecord} title='Start Recording'></Button>
                :  <Button onPress={stopRecord} title='Stop Recording'></Button>
                }
            </Spacer>
               

    
        </>
    )
}

const styles = StyleSheet.create({

});

export default TrackForm;

