import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RedButton(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        justifyContent: "center",
        backgroundColor: "#9B0025",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 32,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: "#fff"
    }

});