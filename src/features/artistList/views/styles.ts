import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#C3C4C2" },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "5%",
  },
  searchContainer: {
    width: "85%",
    height: "4%",
    backgroundColor: "#868281",
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    paddingStart: 3,
  },
  searchText: {
    marginLeft: "7.5%",
    marginTop: "10%",
    marginBottom: "1%",
    fontSize: 14,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: "#6FE573",
    borderRadius: 8,
    marginTop: 20,
  },
});
