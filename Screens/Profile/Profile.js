import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
import useIsFocused from "../../useIsFocused";
import {
  TextInputWithLabel,
  BorderRoundedButton,
} from "../../components/UIcomponents";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function Profile() {
  const focued = useIsFocused();

  const { height, width } = useWindowDimensions();

  const [isProfileUpdating, setIsProfileUpdating] = useState(false);

  const userId = useSelector((state) => state.signIn.userId);

  // console.log({userId})

  const [editable, setEditable] = useState(false);

  const [profileDetails, setProfileDetails] = useState({});
  const [image, setImage] = useState(null);

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

  async function getProfileData() {
    try {
      let res = await axios.get(
        `https://brandsdyno.com/shadow/api/profile/${userId}`,
        {}
      );
      // console.log({res})
      let { data } = await res.data;
      setProfileDetails(data[0]);
      setEmail(data[0]?.email);
      setName(data[0]?.name);
      setGender(data[0]?.gender);
      setAddress(data[0]?.address);
      setMobile(data[0]?.number);
      setImage(data[0]?.profile);
    } catch (error) {
      console.log({ error }, "EE");
    }
  }

  useEffect(() => {
    if (focued == true) {
      getProfileData();
    }
    // if (profileDetails) {
    //   setEmail(profileDetails?.email);
    //   setName(profileDetails?.name);
    //   setGender(profileDetails?.gender);
    //   setAddress(profileDetails?.address);
    //   setMobile(profileDetails?.number);
    //   setImage(profileDetails?.profile);
    //   setEditable(false);
    // }
  }, [focued]);

  async function editHandler() {
    try {
      setIsProfileUpdating(true);
      console.log({ name, email, mobile, gender, userId });
      let res = await axios.post(
        `https://brandsdyno.com/shadow/api/updateProfile`,
        {
          userId: userId,
          name: name,
          email: email,
          phoneNumber: mobile,
          address: address,
          profile: image ?? "",
          gender: gender,
        }
      );

      console.log({ res });
      let data = await res.data;
      console.log({ data }, "UUU");
      if (data) {
        setIsProfileUpdating(false);
      }
    } catch (error) {
      setIsProfileUpdating(false);
      console.log({ error }, "EE");
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  console.log({ image });

  return (
    <React.Fragment>
      <StatusBar />
      <ThemedView>
        <ScrollView style={[styles.main]}>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // style={[styles.main, { height: height }]}
          > */}

         
            <TouchableOpacity style={styles.profile_pic} onPress={pickImage}>
              <Image
                source={{
                  uri:
                    image ??
                    "https://imgs.search.brave.com/plgAAZqDPr2j4rXvHhQQsuVrm8wIM3i72tvZVTl0eoY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzI3MTkzNS9waG90/by9wcm9maWxlLW9m/LW1hbi1zbWlsaW5n/LWluLXN0dWRpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cG95b2lyS3hrd1dw/bGtCZkZuX3hWeHht/WWZKa2hkeC1lRDRh/QWkxQ0V3OD0",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>

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
                value={gender}
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
                  backgroundColor: "#EDE9E9",
                  color: "black",
                  height: 100,
                  paddingLeft: 12,
                  fontSize: 16,
                }}
                labelStyle={styles.labelStyles}
                value={address}
                onChangeText={(e) => {
                  setAddress(e);
                }}
                editBtn={editable}
              />
              <View
                style={{
                }}
              >
                <BorderRoundedButton
                  label={"Save"}
                  labelStyle={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                  }}
                  buttonStyle={{
                    backgroundColor: "#BFA05E",
                    width: 189,
                    alignSelf: "center",
                    marginBottom: 40,
                  }}
                  onPress={editHandler}
                />
              </View>
            </View>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>
        <Modal
          visible={isProfileUpdating}
          transparent={true}
          children={
            <View
              style={{
                height: height,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 300,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Updating....</Text>
              </View>
            </View>
          }
        />
      </ThemedView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    // marginVertical : 100
    paddingTop: 20,
    paddingBottom: 50,
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
    backgroundColor: "#EDE9E9",
    color: "black",
    height: 44,
    paddingLeft: 12,
    fontSize: 16,
  },
  labelStyles: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "Inter",
  },
});
