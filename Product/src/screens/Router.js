import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./AuthStack/Splash";
import { SCREENS } from "../common/Utils/Screens";
import Dashboard from "./AuthStack/Dashboard";

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.Splash}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.Splash} component={Splash} />
        <Stack.Screen name={SCREENS.Dashboard} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;