import React from "react";
import { View ,Text, Image, TouchableOpacity,StyleSheet} from "react-native";

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors'

export function Welcome(){
    return(
        <View style={style.container}>
            <Text style={style.title}>
            Gerencie {'\n'} 
            suas plantas {'\n'} 
            de forma fácil
            </Text>

            <Image source={wateringImg} style={style.image}/>
            <Text style={style.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre 
            que precisar.
            </Text>
            <TouchableOpacity style={style.button}>
                <Text>
                    {">"} 
                </Text>
            </TouchableOpacity>
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