import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "../Schnelly/src/redux/store";
import { Provider } from "react-redux";
import * as Linking from "expo-linking";

import RootNavigator from "./src/navigators/RootNavigator";

const Stack = createStackNavigator();
const prefix = Linking.createURL("/");

export default function App() {
  const linking = {
    prefixes: ["http://localhost:8081", prefix],
    config: {
      screens: {
        Root: {
          path: "root",
          screens: {
            Home: "home",
            Search: "search",
            User: "user",
            Gift: "gift",
            CartScreen: "cartScreen/:message",
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={RootNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
