import React, { useEffect, useState} from 'react';
import * as Permissions from 'expo-permissions';
import {watchPositionAsync, Accuracy} from 'expo-location';

export default (trackLocation, callback)=>{
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () =>{
        const location = await Permissions.askAsync(Permissions.LOCATION);
        const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
        }, callback
        );
        setSubscriber(sub);
        if(location.status !== 'granted'){
            setErr('error')
        }
    }

    useEffect(()=>{
        if(trackLocation){
            startWatching();
        }else{
            subscriber.remove();
            setSubscriber(null);
        }
    }, [trackLocation]);

    return [err];
}