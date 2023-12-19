import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
import useIsFocused from "../../useIsFocused";
import {
  TextInputWithLabel,
  BorderRoundedButton,
} from "../../components/UIcomponents";
export default function Profile() {
  const focued = useIsFocused();

  const { height, width } = useWindowDimensions();

  const [editable, setEditable] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  console.log({ focued }, "Profile");

  const dummyData = {
    name: "Venkatesh",
    mobile: "748474844",
    email: "venky@gmail.com",
    gender: "male",
    address: "Tallacheruvu,atp,AndhraPradesh",
  };

  useEffect(() => {
    if (focued) {
      setEmail(dummyData.email);
      setName(dummyData.name);
      setGender(dummyData.gender);
      setAddress(dummyData.address);
      setMobile(dummyData.mobile);
      setEditable(false);
    }
  }, [focued]);

  function editHandler() {}
  return (
    <React.Fragment>
      <StatusBar />
      <ThemedView>
        <ScrollView style={[styles.main, { height: height }]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // style={[styles.main, { height: height }]}
          >
            <View style={styles.profile_pic}>
              <Image
                source={{
                  uri: "https://imgs.search.brave.com/plgAAZqDPr2j4rXvHhQQsuVrm8wIM3i72tvZVTl0eoY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzI3MTkzNS9waG90/by9wcm9maWxlLW9m/LW1hbi1zbWlsaW5n/LWluLXN0dWRpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cG95b2lyS3hrd1dw/bGtCZkZuX3hWeHht/WWZKa2hkeC1lRDRh/QWkxQ0V3OD0",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>

            <View style={styles.profileDetails}>
              <TextInputWithLabel
                label={"Name"}
                inputStyle={styles.inputStyles}
                labelStyle={styles.labelStyles}
                value={name}
                onChangeText={(e) => {
                  setName(e);
                }}
                editBtn={editable}
              />
              <TextInputWithLabel
                label={"Number"}
                inputStyle={styles.inputStyles}
                labelStyle={styles.labelStyles}
                value={mobile}
                onChangeText={(e) => {
                  setMobile(e);
                }}
                editBtn={editable}
              />
              <TextInputWithLabel
                label={"Email"}
                inputStyle={styles.inputStyles}
                labelStyle={styles.labelStyles}
                value={email}
                onChangeText={(e) => {
                  setEmail(e);
                }}
                editBtn={editable}
              />
              <TextInputWithLabel
                label={"Gender"}
                inputStyle={styles.inputStyles}
                labelStyle={styles.labelStyles}
                value={name}
                onChangeText={(e) => {
                  setGender(e);
                }}
                editBtn={editable}
              />
              <TextInputWithLabel
                label={"Address"}
                inputStyle={{
                  borderWidth: 0,
                  borderRadius: 20,
                  backgroundColor: "black",
                  color: "white",
                  height: 100,
                }}
                labelStyle={styles.labelStyles}
                value={address}
                onChangeText={(e) => {
                  setAddress(e);
                }}
                editBtn={editable}
              />

              <BorderRoundedButton
                label={"Edit"}
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
                onPress={editHandler}
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
    flexDirection: "column",
  },
  profile_pic: {
    width: 188,
    height: 188,
    borderRadius: 90,
    backgroundColor: "gray",
    overflow: "hidden",
    alignSelf: "center",
  },
  profileDetails: {
    width: "80%",
    flexDirection: "column",
    alignSelf: "center",
  },
  inputStyles: {
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: "black",
    color: "white",
    height: 44,
  },
  labelStyles: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "Inter",
  },
});
