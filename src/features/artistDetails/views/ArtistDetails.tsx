import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "../../artistDetails/views/styles";

const ArtistDetails = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.artistNameText}>Artist name</Text>
      </View>
      <Text style={styles.titleText}>Music type:</Text>
      <Text style={styles.titleText}>Top 5 songs:</Text>
      <TouchableOpacity
        onPress={() => navigate("ArtistList" as never)}
        style={styles.button}
      ></TouchableOpacity>
    </View>
  );
};

export default ArtistDetails;
