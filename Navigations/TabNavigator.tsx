import React,{useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Src/Screens/HomeScreen';
import SearchScreen from "../Src/Screens/SearchScreen";
import QRScreen from "../Src/Screens/QRScreen";
import AlertsScreen from "../Src/Screens/AlertsScreen";
import HistScreen from "../Src/Screens/HistScreen"; 
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,Text } from "react-native";
import { ThemeContext } from '../Context/Theme/ThemeContext';
import AlertStack from "./AlertStack";
import HistStack from './HistStack';

function TabNavigator(){
    const Tab = createBottomTabNavigator();
    const {colors} = useContext(ThemeContext);
    console.log(colors);
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarStyle:{position:'absolute',backgroundColor:colors.bg,borderTopWidth:1,borderTopColor:colors.border,height:75,paddingTop:8}
                }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} 
                options={{
                    tabBarAccessibilityLabel: 'Home, go to main feed',
                    tabBarLabel:({focused})=>(<Text style={{fontSize:13,fontWeight:focused?'bold': '400',color:colors.text}}>Home</Text>),
                    tabBarIcon:({focused,size,color})=>(
                        focused ? (<Fontisto name="home" size={size} color={colors.text}/>) : (<Octicons name="home" size={size} color={colors.text}/>) 
                        
                    )
                }}
            />
            <Tab.Screen name="SearchScreen" component={SearchScreen} 
                options={{
                    tabBarLabel:({focused})=>(<Text style={{fontSize:13,fontWeight:focused?'bold': '400',color:colors.text}}>Search</Text>),
                    tabBarIcon:({focused,size,color})=>(
                        focused ? (<Octicons name="search" size={size} color={colors.text}/>) : (<Octicons name="search" size={size} color={colors.text}/>) 
                        
                    ),
                }}/>
            <Tab.Screen name="QRScreen" component={QRScreen} 
                options={{
                    tabBarLabel:'',
                    tabBarIcon:()=>(
                        <View style={{width:55,height:55,borderRadius:30,backgroundColor:'#4CAF50',justifyContent:'center',alignItems:'center',marginTop:10}}>
                            <MaterialDesignIcons name='qrcode-scan' color={colors.text} size={30}/>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="AlertStack" component={AlertStack} 
                options={{
                    tabBarLabel:({focused})=>(<Text style={{fontSize:13,fontWeight:focused?'bold': '400',color:colors.text}}>Alerts</Text>),
                    tabBarIcon:({focused,size,color})=>(
                        focused ? (<Octicons name="bell-fill" size={size} color={colors.text}/>) : (<Octicons name="bell" size={size} color={colors.text}/>) 
                        
                    )
                }}/>
            <Tab.Screen name="HistStack" component={HistStack} 
                options={{tabBarLabel:({focused})=>(<Text style={{fontSize:13,fontWeight:focused?'bold': '400',color:colors.text}}>History</Text>),
                    tabBarIcon:({focused,size,color})=>(
                        focused ? (<MaterialIcons name="access-time-filled" size={size} color={colors.text}/>) : (<MaterialIcons name="access-time" size={size} color={colors.text}/>) 
                        
                    )
                }}/>
                
        </Tab.Navigator>
    )

}

export default TabNavigator