import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  ThemedView,
  BorderRoundedButton,
  StatusBar,
  TextInputWithLabel,
} from "../../components/UIcomponents";

export default function Signup({ navigation, route }) {
  const { height, width } = useWindowDimensions();

  const [e_or_m, setE_or_M] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  function signupHandler() {
    console.log("Signup");
    if (name.length <= 0 || e_or_m.length <= 0) {
      Alert.alert("fields should not be empty");
    } else if (password !== cPassword) {
      Alert.alert("Password not match");
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <React.Fragment>
      <StatusBar />
      <ThemedView>
        <ScrollView style={{ flex: 1, height: height }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.main, { height: height }]}
          >
            <View style={styles.logo}>
              <Text style={{ color: "white" }}>Logo</Text>
            </View>
            <Text
              style={{
                fontSize: 36,
                fontWeight: 400,
              }}
            >
              Signup
            </Text>
            <View style={styles.signup_form}>
              <TextInputWithLabel
                label={"Gmail or Mobile Numbeer"}
                value={e_or_m}
                onChangeText={(e) => {
                  setE_or_M(e);
                }}
                placeholder={"enter email or mobile number"}
                inputStyle={{
                  borderWidth: 1,
                  borderRadius: 11,
                }}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              />
              <TextInputWithLabel
                label={"Name"}
                value={name}
                onChangeText={(e) => {
                  setName(e);
                }}
                placeholder={"enter name"}
                inputStyle={{
                  borderWidth: 1,
                  borderRadius: 11,
                }}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              />
              <TextInputWithLabel
                label={"Create Password"}
                value={password}
                onChangeText={(e) => {
                  setPassword(e);
                }}
                placeholder={"create password"}
                inputStyle={{
                  borderWidth: 1,
                  borderRadius: 11,
                }}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              />
              <TextInputWithLabel
                label={"Confirm Password"}
                value={cPassword}
                onChangeText={(e) => {
                  setCpassword(e);
                }}
                placeholder={"confirm password"}
                inputStyle={{
                  borderWidth: 1,
                  borderRadius: 11,
                }}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
                containerStyle={{}}
              />

              <BorderRoundedButton
                label={"Signup"}
                labelStyle={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "white",
                }}
                buttonStyle={{
                  backgroundColor: "black",
                  width : 189,
                  alignSelf : 'center'
                }}
                onPress={signupHandler}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ThemedView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
  },
  logo: {
    width: 100,
    height: 50,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  signup_form: {
    width: "90%",
    flexDirection: "column",
    gap: 12,
  },
});
