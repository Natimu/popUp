import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FoldersProvider } from "./src/context/FolderContext";


const queryClient = new QueryClient();

export default function App() {
  return (
    <FoldersProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>
      </QueryClientProvider>
    </FoldersProvider>
    
  );
}
