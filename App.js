import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FoldersProvider } from "./src/context/FolderContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style= {{flex: 1}}>
      <FoldersProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>
      </QueryClientProvider>
    </FoldersProvider>
    </GestureHandlerRootView>
    
  );
}
