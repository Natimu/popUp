import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WidgetSettingsScreen from "../screens/WidgetSettingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import VerseSourceScreen from "../screens/verseSourceScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}
