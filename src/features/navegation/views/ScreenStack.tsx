import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArtistList from "../../artistList/views/ArtistList";
import ArtistDetails from "../../artistDetails/views/ArtistDetails";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C3C4C2" }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ArtistList" component={ArtistList} />
          <Stack.Screen name="ArtistDetails" component={ArtistDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ScreenStack;
