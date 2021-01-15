import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Loading(){
    return(
    <View style={styles.container}>
        <View style={styles.load}></View>
        <View style={styles.texts}><Text style={styles.text}>Getting Weather...</Text></View>
    </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA"
    },
    texts:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        marginBottom:120
    },
    text:{
        color:"#2c2c2c",
        fontSize:30,
    },
    load:{
        position:"absolute",
        top:350,
        height:66,
        width:66,
        borderWidth:3,
        borderRadius:50,
    }
});