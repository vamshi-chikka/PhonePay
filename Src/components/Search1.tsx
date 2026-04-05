import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { ThemeContext } from '../../Context/Theme/ThemeContext';
import Octicons from 'react-native-vector-icons/Octicons';

function Search1(){
    const {colors} = useContext(ThemeContext);
    const styles = createStyles(colors);
    return(
        <View style={styles.searchContainer}> 
            <Pressable style={({pressed})=>[{backgroundColor:pressed?'black':colors.bg,justifyContent:'center',paddingLeft:20,borderTopLeftRadius:25,borderBottomLeftRadius:25}]}>
                <Octicons name="search" size={25} color={colors.primary} />
            </Pressable>
            <Pressable style={({pressed})=>[{flex:1, backgroundColor:pressed ? 'black': colors.bg,justifyContent:'center',paddingLeft:20}]}>
                <Text style={{fontSize:16, color:colors.primary}}>Search</Text>
            </Pressable>
            
            <Pressable style={({pressed})=>[{backgroundColor:pressed?'black':colors.bg,justifyContent:'center',paddingRight:20,borderTopRightRadius:25,borderBottomRightRadius:25}]}>
                <Octicons name="filter" size={25} color={colors.primary} />
            </Pressable>
        </View>
    )
}

export default Search1;

const createStyles = (colors) => StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        backgroundColor:colors.bg,
        height:60,
        borderRadius:25,
    },

})