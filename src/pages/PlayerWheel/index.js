import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header'
import styles from './styles';

export default function PlayerWheel() {
    const navigation = useNavigation();
    const [playerList, setPlayerList] = useState([]);

    const _retrieveData = async () => {
        if (playerList.length < 1) {
            try {
                const value = JSON.parse(await AsyncStorage.getItem('playerList'));
                if (value !== null) {
                    setPlayerList([...playerList, ...value])
                }
            } catch (error) {
                // Error retrieving data
                alert(error);
            }
        }
    };

    function navigateBack() {
        navigation.goBack()
    };

    useEffect(() => {
        _retrieveData();
    }, [])

    return (
        <LinearGradient
            colors={['#022859', '#011F32']}
            style={styles.container} >
            <Header title='quem é a vitima?' onPress={navigateBack} />
            <FlatList
                style={styles.playersList}
                data={playerList}
                keyExtractor={playerList => String(playerList.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: player }) => (
                    <Text style={styles.listItem} >{player.nome}</Text>
                )}

            />

        </LinearGradient>
    );
}
