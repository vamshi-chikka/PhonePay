import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ThemeContext } from  '../../Context/Theme/ThemeContext';

function AlertInfo(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors);
    return(
        <View style={styles.container}>
            <Text>Alert</Text>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backGroundColor
    }
})

export default AlertInfo;