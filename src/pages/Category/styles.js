import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: Constants.statusBarHeight + 20,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    categoryTitle: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        color: "#fff",
        marginTop: 8,
    },
    paragraph: {
        color: '#f0f0f0',
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        marginHorizontal: 16,
        lineHeight: 22,
    }
});