import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  ThemedView,
  BorderRoundedButton,
  StatusBar,
  TextInputWithLabel,
} from "../../components/UIcomponents";

export default function Login({ navigation, route }) {
  const { height, width } = useWindowDimensions();

  const [e_or_m, setE_or_M] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler() {
    console.log("Signup");
    if (password <= 0 || e_or_m.length <= 0) {
      Alert.alert("fields should not be empty");
    } else {
      navigation.navigate("BottomTabNavigator");
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
              Login
            </Text>
            <View style={styles.login_form}>
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
                label={"Password"}
                value={password}
                onChangeText={(e) => {
                  setPassword(e);
                }}
                placeholder={"password"}
                inputStyle={{
                  borderWidth: 1,
                  borderRadius: 11,
                }}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              />

              <BorderRoundedButton
                label={"Login"}
                labelStyle={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "white",
                }}
                buttonStyle={{
                  backgroundColor: "black",
                  width: 189,
                  alignSelf: "center",
                }}
                onPress={loginHandler}
              />
              <TouchableOpacity onPress={()=>{
                navigation.navigate("PasswordReset")
              }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Forgot{" "}
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "blue",
                    }}
                  >
                    password?
                  </Text>
                </Text>
              </TouchableOpacity>
              <BorderRoundedButton
                label={"Signup"}
                labelStyle={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "white",
                }}
                buttonStyle={{
                  backgroundColor: "black",
                  width: 189,
                  alignSelf: "center",
                }}
                onPress={() => {
                  navigation.navigate("Signup");
                }}
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
  login_form: {
    width: "90%",
    flexDirection: "column",
    gap: 12,
  },
});
