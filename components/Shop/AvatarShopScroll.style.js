import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        width: "90%",
        height: "100%",
        maxHeight: 420,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 8,
        borderColor: "#A4E7DD",
        backgroundColor: "#fff",
    },
    item: {
        backgroundColor: "#F2F2F2",
        width: "25%",
        height: 119,
        borderWidth: 2,
        borderColor: "#FF6E6B",
        borderStyle: "dashed",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        width: "100%",
        minHeight: 50,
        marginVertical: 15,
    },
    listContainer: {
        height: "100%",
        width: "100%",
    },
    stylePicker: {
        width: 38,
        height: 38,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    stylePickerImg: {
        width: 25,
        height: 25,
    },
    buttonContainer: {
        width: "95%",
        marginBottom: 5,
        marginTop: 5,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    points:{
        alignSelf:'center',
        marginBottom:'10%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
});

export default styles;
