import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: 60,
        alignItems: "center",
    },
    footerImage: {
        width: "100%",
        height: 50,
        position: "absolute",
        bottom: 0,
    },
    footerIcons: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    footerIcon: {
        width: 30,
        height: 30,
        opacity: 0.5,
    },
    selectedFooterIcon: {
        width: 30,
        height: 30,
    },
    createButton: {
        width: 45,
        height: 45,
        bottom : 25,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6E6B",
    },
    seperator: {
        width: 20,
    },
    footerImg: {
        width: 30,
        height: 30,
    },
});

export default styles;
