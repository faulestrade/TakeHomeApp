/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import ScreenStack from "./src/features/navegation/views/ScreenStack";

AppRegistry.registerComponent(appName, () => ScreenStack);
