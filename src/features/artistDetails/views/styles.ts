import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3C4C2",
  },
  generalText: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "normal",
    marginLeft: "2%",
  },
  titleText: {
    fontSize: 14,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  artistNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  square: {
    width: 170,
    height: 190,
    borderRadius: 8,
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: "black",
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
