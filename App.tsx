import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainRoute from "./App/Navigation/MainRoute";

function App(): React.JSX.Element {

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])

  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}

export default App;
