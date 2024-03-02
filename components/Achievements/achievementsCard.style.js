import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 100,
    borderRadius: 8,
    width:'100%',
    marginTop: 20,

  },
  textContainer:{
    marginLeft: 16,
    justifyContent: 'space-around',
    width: '70%',
    height: 90,
    backgroundColor: '#DAF4F0',
    padding: 15,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description1: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description2: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  achievementImage: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    backgroundColor: '#f2f2f2',
    width: '25%',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF6E6B',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default styles;
