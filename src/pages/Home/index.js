import React, { useState, Component } from 'react';
import { Image, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import NameInput from '../../components/NameInput';
import PlayerNameItem from '../../components/PlayerNameItem';
import RedButton from '../../components/RedButton';

import styles from './styles';
import logoImg from '../../assets/logo-white.png';

export default function Home() {
    const [playerList, setPlayerList] = useState([]);
    const navigation = useNavigation();


    function navigateToCategory() {
        navigation.navigate('Category');
    };

    function handleNewPlayer(name) {
        setPlayerList([...playerList, { id: (playerList.length + 1), nome: name }]);
    }

    function handleSubmit() {
        navigateToCategory();
    }

    function deletePlayer(id) {
        setPlayerList(playerList.filter(player => player.id !== id));
    }
    return (
        <LinearGradient
            colors={['#022859', '#011F32']}
            style={styles.container}>
            <Image style={styles.header} source={logoImg} />
            <Text style={styles.title}>eu só trabalho com nomes</Text>
            <Text style={styles.subtitle}>fala ai, quem são os players?</Text>
            <NameInput onPress={() => handleNewPlayer('Pedro')} />
            <Text style={styles.listTitle}> são esses os jogadores?</Text>
            <FlatList
                style={styles.playersList}
                data={playerList}
                keyExtractor={playerList => String(playerList.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: player }) => (
                    <PlayerNameItem id={player.id}
                        name={player.nome}
                        onPress={() => deletePlayer(player.id)} />
                )}

            />
            <RedButton onPress={handleSubmit} title='escolher categoria' />
        </LinearGradient>
    );
};