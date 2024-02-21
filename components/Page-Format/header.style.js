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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    logoutModalContent: {
        backgroundColor: '#fff',
        width: '90%',
        height: '20%',
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        borderRadius: 10,
        alignItems: 'center',
        borderColor:'#8DE1D5',
        borderWidth:6,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonContainer:{
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
    },
    Btn1: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 35,
    },
    Btn2: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4E7DD',
        padding: 10,
        borderRadius: 35,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default styles;
