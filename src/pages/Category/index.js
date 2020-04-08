import React from 'react';
import { Text, View, Slider } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';
import Emoji from 'react-native-emoji';

import styles from './styles'
import RedButton from '../../components/RedButton'

export default function Category() {

    const navigation = useNavigation();
    const [category, setCategory] = React.useState('divertido');
    const [categoryEmoji, setCategoryEmoji] = React.useState('joy');
    const [paragraph, setParagraph] = React.useState('Para todas as idades. Essa categoria foi feita para quem não quer extrapolar. Mas gosta muito de se divertir.');
    const [categoryColor, setCategoryColor] = React.useState('#29B926')

    function navigateBack() {
        navigation.goBack()
    };

    function handleSliderChange(value) {
        value <= 0.2 ? firstCategory()
            : value <= 0.4 ? secondCategory()
                : value <= 0.6 ? thirdCategory()
                    : value <= 0.8 ? fourthCategory()
                        : fifthCategory();
    }

    function firstCategory() {
        setCategory('divertido');
        setCategoryEmoji('joy');
        setParagraph('Para todas as idades. Essa categoria foi feita para quem não quer extrapolar. Mas gosta muito de se divertir.');
        setCategoryColor('#29B926')
    }
    function secondCategory() {
        setCategory('de leve');
        setCategoryEmoji('wink');
        setParagraph('Essa categoria é perfeita para iniciar a noite com os amigos ou com x mozão.');
        setCategoryColor('#9CF32D')
    }
    function thirdCategory() {
        setCategory('hm.......');
        setCategoryEmoji('smirk');
        setParagraph('A dificuldade aumenta e a temperatura também. Os desafios aqui NÃO são indicados para menores de 18 anos. a não ser que você queira.');
        setCategoryColor('#ECF039')
    }
    function fourthCategory() {
        setCategory('daquele jeito');
        setCategoryEmoji('smiling_imp');
        setParagraph('As preliminares comem soltas aqui. O clima fica tão quente quanto seus corpos.');
        setCategoryColor('#F3682D')
    }
    function fifthCategory() {
        setCategory('extremo');
        setCategoryEmoji('fire');
        setParagraph('Sem limites. Sextou. Aqui você fará coisas que nunca fez antes. Será uma noite difícil de se esquecer.');
        setCategoryColor('#9B0025')
    }

    return (
        <LinearGradient
            colors={['#022859', '#011F32']}
            style={styles.container} >
            <Header title='categorias' onPress={navigateBack} />

            <View style={styles.contentContainer}>
                <Emoji name={categoryEmoji} style={{ fontSize: 44 }} />
                <Text style={styles.categoryTitle}>{category}</Text>
                <Slider
                    style={{ width: "100%", height: 64 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={categoryColor}
                    maximumTrackTintColor={'#0A3062'}
                    thumbTintColor={categoryColor}
                    onValueChange={value => handleSliderChange(value)}
                />
                <Text style={styles.paragraph}>{paragraph}</Text>
                <RedButton title="tá, bora" />
            </View>

        </LinearGradient>
    );
};