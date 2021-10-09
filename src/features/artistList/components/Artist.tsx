import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Artist = ({
  image,
  name,
  uri,
}: {
  image: ImageSourcePropType;
  name: string;
  uri: string;
}) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.artistButton}
      onPress={() =>
        navigate({
          name: "ArtistDetails" as never,
          params: { uri, image } as never,
        })
      }
    >
      <Image style={styles.image} height={40} width={40} source={image}></Image>
      <Text style={styles.artistTypeText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Artist;
