import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import api, { getData } from "../../../utils/api";
import Artist from "../components/Artist";

import styles from "./styles";

const ArtistList = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("search", { q: search, type: "artist" })
      .then((result) =>
        setData(
          ([
            ...result?.artists?.items.filter(
              (item: { images: [] }) => item.images.length
            ),
          ] || []) as never[]
        )
      )
      .catch((error) => {
        console.log(error);
        setData([]);
      });
  }, [search]);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Take-Home App</Text>
      <Text style={styles.searchText}>Artist list</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={"Saerch"}
          spellCheck={false}
          value={search}
          onChangeText={setSearch}
        ></TextInput>
      </View>
      <FlatList
        data={data}
        style={{ width: "85%" }}
        renderItem={({
          item,
        }: {
          item: { images: { url: string }[]; name: string; uri: string };
        }) => (
          <Artist
            image={{
              uri: item.images[0].url,
            }}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.uri}
      />
    </View>
  );
};

export default ArtistList;
