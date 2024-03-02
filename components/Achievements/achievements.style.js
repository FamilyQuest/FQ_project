import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contianer: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitleContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  scrollViewContainer: {
    marginTop: 20,
    width: "90%",
    height: "65%",
    backgroundColor: "#fff",
    borderWidth: 5,
    borderColor: "#8DE1D5",
    borderRadius: 10,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
