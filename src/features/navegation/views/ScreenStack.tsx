import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArtistList from "../../artistList/views/ArtistList";
import ArtistDetails from "../../artistDetails/views/ArtistDetails";

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ArtistList" component={ArtistList} />
        <Stack.Screen name="ArtistDetails" component={ArtistDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;
