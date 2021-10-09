import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "../../artistDetails/views/styles";
import { getData } from "../../../utils/api";

const ArtistDetails = ({
  route: {
    params: { uri, image },
  },
}: {
  route: {
    params: { uri: string; image: ImageSourcePropType };
  };
}) => {
  const { navigate } = useNavigation();
  const [dataArtist, setDataArtist] = useState<{
    name: string;
    genres: string[];
  }>({ name: "", genres: [""] });
  const [tracksData, setTracksData] = useState([""]);
  useEffect(() => {
    getData(`artists/${uri.replace("spotify:artist:", "")}`)
      .then((result) =>
        setDataArtist({
          ...dataArtist,
          name: result.name,
          genres: result.genres,
        })
      )
      .catch((error) => {
        console.log({ ...error });
      });
    getData(`artists/${uri.replace("spotify:artist:", "")}/top-tracks`, {
      market: "ES",
    })
      .then((result) =>
        setTracksData(
          result.tracks.map((track: { name: string }) => track.name)
        )
      )
      .catch((error) => {
        console.log({ ...error });
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image resizeMode="contain" source={image} style={styles.picture} />
        <Text style={styles.artistNameText}>{dataArtist.name}</Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationSubContainer}>
          <Text style={styles.titleText}>Genres:</Text>
          <Text style={styles.generalText}>{dataArtist.genres.join("\n")}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titleText}>Top 5 songs:</Text>
          <Text style={styles.generalText}>
            {tracksData.slice(0, 5).join("\n")}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate("ArtistList" as never)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtistDetails;
