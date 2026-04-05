import { ThemeContext } from '../../Context/Theme/ThemeContext'
import React,{useContext} from 'react';
import { View,Text, StyleSheet, Image } from "react-native";
import { getFontSize } from '../../utils/fonts';
import Help from '../components/Help';


function AlertsScreen(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors)
    return(
        <View style={styles.container}>
            <Help screenName='AlertInfo'/>
            <Text style={styles.text}>Alerts</Text>
            {
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/Empty.png')} style={{width: 200, height: 200}}/>
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
        fontSize:getFontSize(20),
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

