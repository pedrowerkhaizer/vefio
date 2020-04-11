import React, { useState, useEffect } from 'react';
import { Image, Text, FlatList, Alert, AsyncStorage } from 'react-native';
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
        const _storeData = async () => {
            try {
                await AsyncStorage.setItem('playerList', JSON.stringify(playerList));
                navigation.navigate('Category');
                console.clear()
                console.log(playerList)
            } catch (error) {
                // Error saving data
                alert(error)
            }
        };
        _storeData();
    };

    const _retrieveData = async () => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('playerList'));
            if (value !== null) {
                setPlayerList([...playerList, ...value])
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit() {
        playerList.length > 1
            ? navigateToCategory()
            : Alert.alert('parado, mãos pro alto', 'me ajuda ai pô, preciso saber o nome dos jogadores');
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

    useEffect(() => {
        _retrieveData();
    }, [])
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