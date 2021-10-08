import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "../views/styles";
import { useNavigation } from "@react-navigation/native";

const Artist = ({
  image,
  name,
}: {
  image: ImageSourcePropType;
  name: string;
}) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: "85%",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "5%",
        borderWidth: 1,
        borderRadius: 5,
      }}
      onPress={() => navigate("ArtistDetails" as never)}
    >
      <Image
        style={{ height: 40, width: 40, borderRadius: 40 }}
        height={40}
        width={40}
        source={image}
      ></Image>
      <Text style={styles.artistTypeText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Artist;
