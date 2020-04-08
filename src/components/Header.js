import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Feather name="chevron-left" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 24,
        fontFamily: 'Roboto-Black',
        color: '#fff',
        marginRight: 32,
    }
});