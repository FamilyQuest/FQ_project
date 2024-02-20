import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#DAF4F0',
        padding: 20,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '90%',
    },
    itemLeft: {
        flexDirection: 'column',
    },
    clockImage: {
        width: 24,
        height: 26,
        marginRight: 7,
    },
    itemText: {
        fontWeight: 'bold',
        maxWidth: '100%',
        marginBottom: 10,
    },
    timeLeft: {
        flexDirection: 'row',
    },
    timetext: {
        color: '#A6A6A6',
        fontSize: 15,
    },
    progresstext: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 40,
        // backgroundColor: '#E4E4E4',
        borderRadius: 10,
        padding: 5,
    },
    itemRight: {
        alignItems: 'center',
    },
    pointstext: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemCenter: {
        width: '35%',
        height: '45%',
        backgroundColor: '#E4E4E4',
        borderRadius: 50,
        marginTop: '10%',
    },
    textCenter: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    textModalBox: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    childModalContent: {
        backgroundColor: '#fff',
        width: '90%',
        height: '70%',
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        borderRadius: 10,
        alignItems: 'center',
        borderColor:'#8DE1D5',
        borderWidth:6,
        flexDirection:'column',
    },
    adminModalContent: {
        backgroundColor: '#fff',
        width: '90%',
        height: '70%',
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'space-between',
        borderColor:'#8DE1D5',
        borderWidth:6,
        flexDirection:'column',
    },
    buttonContainer:{
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
    },
    modalTextContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    titleModal: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    textModal: {
        fontSize: 20,
        marginBottom: 5,
    },
    modalScrollView: {
        minWidth: '100%',
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#8DE1D5',
        borderStyle: 'dashed',
        borderRadius: 10,
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
    textBtn: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageBox: {
        minWidth: '100%',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#8DE1D5',
        borderStyle: 'dashed',
        borderRadius: 10,
        marginVertical: 20,
    }
});

export default styles;