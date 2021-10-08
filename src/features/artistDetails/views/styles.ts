import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#C3C4C2" },
  generalText: {
    fontSize: 12,
    alignSelf: "flex-start",
  },
  titleText: {
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: "5%",
    fontWeight: "bold",
    marginLeft: "9.5%",
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    paddingStart: 3,
  },
  artistNameText: {
    fontSize: 20,
    marginTop: "46%",
    marginLeft: "2%",
    fontWeight: "bold",
  },
  square: {
    width: 330,
    height: 180,
    backgroundColor: "#6FE573",
    borderRadius: 8,
    alignSelf: "flex-start",
    marginLeft: "7.5%",
    marginBottom: "5%",
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: "#6FE573",
    borderRadius: 8,
    marginTop: 20,
  },
});
