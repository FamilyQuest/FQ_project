import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    logoImg: {
        marginTop: '10%',
        marginLeft: 40,
        marginBottom: 10,
        width: 220,
        height: 220,
    },
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
    },
    input: {
        width: "65%",
    },
    btn: {
        width: "70%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FF6E6B",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        marginTop: 5,
        marginBottom: 10,
    },
    btnText: {
        color: "#fff",
        opacity: 0.9,
        fontSize: 20,
        elevation: 5,
    },
    logInContainer: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    rememberContainer: {
        flexDirection: "row",
    },
    logInText: {   
        fontSize: 11,
        fontWeight: "bold",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: "#fff",
        backgroundColor: "#fff",
        marginRight: 5,
    },
    signBtn: {
        width: "20%",
        height: 30,
        borderRadius: 25,
        backgroundColor: "#FF6E6B",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        margin: 5,
    },
    signBtnText: {
        color: "#fff",
        opacity: 0.9,
        fontSize: 12,
    },
    keyboardViewContainer: {
        width: '100%', 
        height: '100%',
        alignItems: 'center'
    },
    incorrectText: {
        color: '#B30400',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 5,
    },
    incorrectBox: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
