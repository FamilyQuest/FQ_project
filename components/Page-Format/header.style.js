import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topScreenContainer: {
        width: "100%",
        position: "absolute",
        top: -150,
    },
    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        top: 10,
    },
    headerButtonImg: {
        width: 30,
        height: 30,
    },
    headerButton: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    headerLogo: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    headerLogoImg: {
        width: 50,
        height: 50,
    },
    headerImg: {
        resizeMode: "cover",
        width: "100%",
    }
    
});

export default styles;
