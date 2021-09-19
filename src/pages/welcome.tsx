import React from "react";
import { 
    View,
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors'
import fonts from "../styles/fonts";

import { Entypo } from "@expo/vector-icons";

export function Welcome(){
    return(
        <View style={style.container}>
            <Text style={style.title}>
            Gerencie {'\n'} 
            suas plantas de {'\n'} 
            forma fácil
            </Text>

            <Image 
            source={wateringImg} 
            style={style.image}
            resizeMode="contain"
            />
            <Text style={style.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre 
            que precisar.
            </Text>
            <TouchableOpacity style={style.button}>
                <Entypo style={style.nextButton}
                    name="chevron-small-right"
                />
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal:20
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight:34
    },
    subtitle:{
        fontSize:17,
        textAlign:'center',
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 10,
        height: 56,
        width:56,
        
    },
    image:{
        height: Dimensions.get('window').width * 0.7 
    },
    nextButton:{
        color: colors.white,
        fontSize: 30,
    }
})