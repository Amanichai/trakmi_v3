import createDataContext from './createDataContext';

const locationReducer = (state, action)=>{
    switch(action.type){
        case 'add_current_location':
            return { ...state, currentLocation: action.payload}
        case 'start_recording':
            return{...state, record: true}
        case 'stop_recording':
            return{...state, record: false}
        case 'add_location':
            return{...state, location: [...state.location, action.payload]}
        case 'change_name':
            return{...state, name: action.payload}
        default:
            return state;
    }
}

const changeName = dispatch =>(name)=>{
    dispatch({ type: 'change_name', payload: name})
}

const startRecord = dispatch =>{
    dispatch({ type: 'start_recording'})
}
const stopRecord = dispatch =>{
    dispatch({ type: 'stop_recording'})
}
const addLocation = dispatch =>(location, recording )=>{
    dispatch({ type: 'add_current_location', payload: location});
    if(recording){
        dispatch({ type: 'add_location', payload: location})
    }
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    { startRecord, stopRecord, addLocation, changeName },
    { record: false, name: '', location: [], currentLocation: null}
)