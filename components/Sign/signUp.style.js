import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        padding: 5,
        margin: 10,
        borderRadius: 10,
        width: "70%",
        height: 50,
        elevation: 5,
    },
    inputLogo: {
        width: 30,
        marginHorizontal: 10,
        resizeMode: "contain",
    },
    empty: {
        width: 30,
        marginRight: 10,
    },
    input: {
        width: "65%",
        marginLeft: 15,
    },
    btn: {
        width: "70%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FF6E6B",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        marginTop: 25,
        marginBottom: 10,
    },
    btnText: {
        color: "#fff",
        opacity: 0.9,
        fontSize: 20,
        elevation: 5,
    },
    signTitle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20
    },
    showPassText: {
        fontSize: 11,
        marginRight: 5,
        width: 30,
    },
    signUpInputContainer: {
        justifyContent: 'flex-start',
        width: '65%'
    },
    signUpInputTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5
    },
    pickerItem:{
        fontSize: 14, 
        color: 'grey',
        marginLeft:100,
    },
});

export default styles;