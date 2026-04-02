import { ThemeContext } from '../../Context/Theme/ThemeContext'
import React,{useContext} from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AlertsScreen(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors)
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <TouchableOpacity activeOpacity={0.9}>
                    <MaterialIcons name="help-outline" size={27} color={colors.iconColor}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Alerts</Text>
            {
                <View style={styles.imageContainer}>
                    <Image source={require('../../Assets/images/Empty.png')} style={{width: 200, height: 200}}/>
                </View>
            }
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
    },
    icon:{
        alignItems:'flex-end',
    },
    imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AlertsScreen

