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
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  ThemedView,
  BorderRoundedButton,
  StatusBar,
  TextInputWithLabel,
} from "../../components/UIcomponents";

export default function PasswordReset({ navigation, route }) {
  const { height, width } = useWindowDimensions();

  const [e_or_m, setE_or_M] = useState("");

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  function sendCodeHandler() {
    if (e_or_m.length < 10) {
      Alert.alert("fields should not be empty");
    } else {
      Alert.alert("Verification code sent please enter below");
    }
  }

  useEffect(() => {
    if (otp1 !== "") {
      ref2.current.focus();
    }
    if (otp2 !== "") {
      ref3.current.focus();
    }
    if (otp3 !== "") {
      ref4.current.focus();
    }
  }, [otp1, otp2, otp3, otp4]);

  function otpSubmitHandler() {
    if (otp1 !== "" && otp2 !== "" && otp3 !== "" && otp4 !== "") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Please Enter Otp");
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
              Reset Password
            </Text>
            <View style={styles.login_form}>
              <View style={styles.inputWithBtn}>
                <TextInputWithLabel
                  label={"Enter your email or mobile number"}
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
                <BorderRoundedButton
                  label={"send code"}
                  labelStyle={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "white",
                  }}
                  buttonStyle={{
                    backgroundColor: "black",
                    width: 137,
                    alignSelf: "flex-end",
                  }}
                  onPress={sendCodeHandler}
                />
              </View>

              <View style={styles.inputWithBtn}>
                <View style={styles.otpBoxes}>
                  <View style={styles.otpBox}>
                    <TextInput
                      style={styles.otp}
                      keyboardType="number-pad"
                      value={otp1}
                      maxLength={1}
                      onChangeText={(e) => {
                        setOtp1(e);
                      }}
                      ref={ref1}
                    />
                  </View>
                  <View style={styles.otpBox}>
                    <TextInput
                      style={styles.otp}
                      keyboardType="number-pad"
                      value={otp2}
                      maxLength={1}
                      onChangeText={(e) => {
                        setOtp2(e);
                      }}
                      ref={ref2}
                    />
                  </View>
                  <View style={styles.otpBox}>
                    <TextInput
                      style={styles.otp}
                      keyboardType="number-pad"
                      value={otp3}
                      maxLength={1}
                      onChangeText={(e) => {
                        setOtp3(e);
                      }}
                      ref={ref3}
                    />
                  </View>
                  <View style={styles.otpBox}>
                    <TextInput
                      style={styles.otp}
                      keyboardType="number-pad"
                      value={otp4}
                      maxLength={1}
                      onChangeText={(e) => {
                        setOtp4(e);
                      }}
                      ref={ref4}
                    />
                  </View>
                </View>
                <BorderRoundedButton
                  label={"Submit"}
                  labelStyle={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                  }}
                  buttonStyle={{
                    backgroundColor: "black",
                    width: 189,
                    alignSelf: "flex-end",
                    marginVertical: 20,
                  }}
                  onPress={otpSubmitHandler}
                />
              </View>
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
  inputWithBtn: {
    width: "100%",
    flexDirection: "column",
  },
  otpBoxes: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
  },
  otpBox: {
    width: 30,
    height: 30,
    // borderWidth: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
});
