import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const ArtistList = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Take-Home App</Text>
      <Text style={styles.searchText}>Artist list</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={"Saerch"}
          spellCheck={false}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => navigate("ArtistDetails" as never)}
        style={styles.button}
      ></TouchableOpacity>
    </View>
  );
};

export default ArtistList;
