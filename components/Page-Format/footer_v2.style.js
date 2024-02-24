import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 150,
    alignItems: 'center',
  },
  footerImage: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    position: 'absolute',
    bottom: -50,
  },
});

export default styles;