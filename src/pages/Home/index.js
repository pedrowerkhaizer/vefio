import React, { useState, Component } from 'react';
import { Image, Text, FlatList, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import NameInput from '../../components/NameInput';
import PlayerNameItem from '../../components/PlayerNameItem';
import RedButton from '../../components/RedButton';

import styles from './styles';
import logoImg from '../../assets/logo-white.png';

export default function Home() {
    const [playerList, setPlayerList] = useState([]);
    const [inputPlayer, setInputPlayer] = useState('');
    const [count, setCount] = useState(1);
    const navigation = useNavigation();

    function navigateToCategory() {
        navigation.navigate('Category');
    };

    function handleSubmit() {
        if (playerList.length > 1) {
            navigateToCategory();
        }
        else {
            Alert.alert('parado, mãos pro alto', 'me ajuda ai pô, preciso saber o nome dos jogadores');
        }
    }

    function addNewPlayer() {
        if (inputPlayer !== "") {
            setCount(count + 1);
            setPlayerList([...playerList, {
                id: count,
                nome: inputPlayer
            }]);
            setInputPlayer('');
        } else {
            Alert.alert('ei você', 'tu tem que digitar um nome pra adicionar ele né, no minímo: zé ninguém');
        };
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
            <NameInput value={inputPlayer}
                onChangeText={name => setInputPlayer(name)}
                onPress={addNewPlayer}
            />
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