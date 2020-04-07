import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        height: 72,
        width: 167,
        marginLeft: -14,
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        lineHeight: 28,
        color: '#fff',
        marginTop: 46,
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 18,
        color: '#fff',
        marginVertical: 8,
    },
    listTitle: {
        color: '#fff',
        fontSize: 24,
        marginTop: 24,
        fontFamily: 'Roboto-Bold'
    },
    playersList: {
        flexGrow: 0,
    },

});