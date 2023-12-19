import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
import { images } from "../../constants";
export default function Home({ navigation, route }) {
  return (
    <React.Fragment>
      <StatusBar />
      <ThemedView>
        <View style={styles.main}>
          <View style={styles.logo}>
            <Text
              style={{
                color: "white",
              }}
            >
              Logo
            </Text>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Text style={styles.btn_name}>Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Contacts");
              }}
            >
              <Text style={styles.btn_name}>Add Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Text style={styles.btn_name}>View Contacts</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignSelf: "flex-end",
              marginTop: 30,
            }}
          >
            <Image
              source={images.hands}
              style={{
                width: 88,
                height: 88,
              }}
            />
          </View>
        </View>
      </ThemedView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  logo: {
    width: 188,
    height: 188,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btns: {
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
  },
  btn: {
    minWidth: 244,
    minHeight: 68,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 109,
  },
  btn_name: {
    color: "white",
    fontSize: 24,
    fontFamily: "Inter",
    fontWeight: "400",
  },
});
