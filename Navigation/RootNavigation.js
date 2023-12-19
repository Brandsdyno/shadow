import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, PasswordReset } from "../Screens";
import BottomTabNavigator from "./BottomTabNavigator";
export default function RootNavigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
