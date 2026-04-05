import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' 
import AlertsScreen from '../Src/Screens/AlertsScreen';
import AlertInfo from '../Src/Screens/AlertInfo';

function AlertStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
            <Stack.Screen name="AlertInfo" component={AlertInfo} />
        </Stack.Navigator>
    )
}

export default AlertStack;