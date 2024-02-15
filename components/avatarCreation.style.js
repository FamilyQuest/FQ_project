import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        backgroundColor: "#A4E7DD",
        flexDirection: "row",
        width: "90%",
        height: 200,
        alignItems: "center",
        borderRadius: 20,
    },
    avatarContainer: {
        width: "50%",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 10,
        marginVertical: 20,
    },
    detailsContainer: {
        width: "35%",
        height: "90%",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 20,
        marginVertical: 20,
    },
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    Avatar: {
        width: "90%",
        height: "90%",
    },
    text: {
        marginHorizontal: 25,
        fontSize: 10,
        fontWeight: "bold",
    },
    textTitle: {
        marginHorizontal: 25,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default styles;
