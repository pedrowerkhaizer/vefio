import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: Constants.statusBarHeight + 5,
    },
    playersList: {
        flexGrow: 0,
    },
    listItem: {
        flex: 1,
        fontSize: 22,
        fontFamily: 'Roboto-Medium',
        color: "#fff",
        textAlign: "center",
    }
});