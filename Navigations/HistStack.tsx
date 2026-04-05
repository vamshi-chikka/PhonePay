import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' 
import HistScreen from '../Src/Screens/HistScreen';
import PaymentIssue from '../Src/Screens/PaymentIssue';

function HistStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HistScreen" component={HistScreen} />
            <Stack.Screen name="PaymentIssue" component={PaymentIssue} />
        </Stack.Navigator>
    )
}

export default HistStack;