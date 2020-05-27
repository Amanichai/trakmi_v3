import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import AccountScreen from './src/screens/AccountScreen';
import CreateTrackScreen from './src/screens/CreateTrackScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/locationContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginflow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen

}),
  mainflow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
    Tracks: TrackListScreen,
    Details: TrackDetailScreen  
    }),
    Create: CreateTrackScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default ()=>{
  return (
          <LocationProvider>
              <AuthProvider>
                <App ref={(navigator)=>setNavigator(navigator)} />
              </AuthProvider>
          </LocationProvider>
          );
}