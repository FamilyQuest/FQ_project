import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
    },
    ball1: {
      position: 'absolute',
      backgroundColor: '#FFA8A6',
      width: 175,
      height: 175,
      borderRadius: 100,
      top: 100, 
      left: 20, 
      zIndex:-1,
    },
    ball2: {
      position: 'absolute',
      backgroundColor: '#FFA8A6',
      width: 175,
      height: 175,
      borderRadius: 100,
      top:585 , 
      left: -50, 
      zIndex:-1,
    },
    ball3: {
      position: 'absolute',
      backgroundColor: '#FFA8A6',
      width: 175,
      height: 175,
      borderRadius: 100,
      top: 350, 
      left: 200, // Adjust as needed
      zIndex:-1,
    },
  });

  export default styles;