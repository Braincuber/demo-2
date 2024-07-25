import React from "react";
import { View, StyleSheet, LogBox } from "react-native";
import Router from "./src/screens/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Router />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
