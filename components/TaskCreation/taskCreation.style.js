import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80%',
    },
    title: {
      fontSize: 40,
      justifyContent: 'center',
      textAlign: 'center',
      marginTop:35,
    },
    input: {
      marginBottom: 30,
      backgroundColor: '#fff',
      width: '100%',
      borderColor:'#8DE1D5',
      borderWidth: 3,
      borderRadius:10,
      borderStyle:'dashed',
      paddingHorizontal: 23,
      paddingVertical: 8,
      width: '100%',
      fontSize:18,
    },
    multilineInput: {
      height: 100,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    dropDownContainer: {
      height: 40,
      width: '100%',
      marginBottom: 30,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF6E6B',
      borderRadius: 10,
      padding: 10,
      width: '50%',
    },
    btnText: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

  export default styles;