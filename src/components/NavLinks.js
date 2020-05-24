import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, text, routeName})=>{
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate(routeName)}
    >
        <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: '#4388d6',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 15
    }
});

export default withNavigation(NavLink);