import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
export default function Contacts() {
  return (
    <React.Fragment>
      <StatusBar />
      <View style={styles.main}>
        <Text>Contacts Screen</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {},
});
