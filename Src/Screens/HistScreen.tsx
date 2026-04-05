import React,{useContext} from 'react';
import { View,Text, StyleSheet, Pressable } from "react-native";
import { ThemeContext } from '../../Context/Theme/ThemeContext';
import Help from '../components/Help';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search1 from '../components/Search1';

function HistScreen(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors);
    return(
        <View style={styles.container}>
            <Help screenName='PaymentIssue'/>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:25}}>
                <Text style={styles.text}>History</Text>
                <Pressable style={styles.statementButton}>
                    <Ionicons name="arrow-down-circle-outline" size={20} color={colors.primary} />
                   <Text style={styles.statementText}>My Statements</Text> 
                </Pressable>
            </View>
            <Search1/>
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
        color: colors.text,
        fontSize:25,
        fontWeight:'bold'
    },
    statementButton:{
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:10,
        borderWidth:0.5,
        borderColor: colors.border,
        borderRadius:25
    },
    statementText:{
        fontSize:13,
        fontWeight:'bold',
        color: colors.primary,
        marginLeft:5
    }
})

export default HistScreen