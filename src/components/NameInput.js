import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NameInput(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.playerNameInput}
                placeholder='nome do jogador'
                placeholderTextColor='#e8e8e8'
                value={props.value}
                autoCapitalize="words"
                maxLength={25}
                autoCorrect={false}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity style={styles.containerAdd} onPress={props.onPress} >
                <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: '#022859',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    playerNameInput: {
        width: '80%',
        height: 40,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        lineHeight: 20,
        color: '#fff',
        paddingHorizontal: 12,

    },
    containerAdd: {
        backgroundColor: '#45C742',
        marginStart: 8,
        borderRadius: 8,
        height: 40,
        width: 40,
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
    },
});