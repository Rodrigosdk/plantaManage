import React from "react";
import { View ,Text, Image, TouchableOpacity,StyleSheet} from "react-native";


export function Welcome(){
    return(
        <View>
            <Text>
            Gerencie suas plantas de forma fácil
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle:{
        fontSize:17,
        textAlign:'center',
        color: colors.heading,
        paddingHorizontal: 20,
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 10,
        marginBottom:45,
        height: 56,
        width:56,
        
    },
    image:{
        width:292,
        height:284
    }
})