import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login/Login";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App