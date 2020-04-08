import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function PlayerNameItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.name}</Text>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={props.onPress}>
                <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 36,
        marginTop: 16,
        minWidth: 200,
        backgroundColor: '#022859',
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "#efefef",
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        paddingStart: 16,
    },
    buttonContainer: {
        height: 36,
        width: 36,
        backgroundColor: '#7C0D28',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    }

})