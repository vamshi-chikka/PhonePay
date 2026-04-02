import { ThemeContext } from '../../Context/Theme/ThemeContext'
import React,{useContext} from 'react';
import { View,Text, StyleSheet, Image } from "react-native";


function AlertsScreen(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors)
    return(
        <View style={styles.container}>
            <View>
                
            </View>
            <Text style={styles.text}>Alerts</Text>
            <Image source={require('../../Assets/images/Empty.png')} style={{width: 200, height: 200}}/>
        </View>
    )

}

const createStyles = (colors) => StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backGroundColor,
        padding:20
    },
    text:{
        color:colors.text,
        fontWeight:'bold',
        fontSize:20
    }
})

export default AlertsScreen

