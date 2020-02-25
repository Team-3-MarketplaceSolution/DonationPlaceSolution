import React from 'react';
import Colors from '../constants/Colors';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function SubmitButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.click}>
            <Text style={{color: "#FFF", fontWeight: "500"}}>{props.children}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        marginTop:20,
        width:"80%",
        backgroundColor: Colors.buttonColor,
        borderRadius: 4,
        height: 55,
        alignItems: "center",
        justifyContent: "center"
    },
});