import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Context/Theme/ThemeContext';

function Help({screenName}){
    const navigation = useNavigation();
    const { colors } = useContext(ThemeContext);
    
    return(
        <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity activeOpacity={0.9}
                onPress={()=> navigation.navigate(screenName)}
            >
                <MaterialIcons name="help-outline" size={27} color={colors.iconColor}/>
            </TouchableOpacity>
        </View>
    )
}


export default Help;