import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "src/components/card";
import users from "./assets/data/users";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.pageContainer}>
      <Card user={users[0]} />
    </View>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
