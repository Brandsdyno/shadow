import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
import useIsFocused from "../../useIsFocused";
import { PermissionStatus } from "expo-contacts";
import { images } from "../../constants";
export default function AddContacts() {
  const focued = useIsFocused();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (focued) {
      const fetchContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();

        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          });

          if (data.length > 0) {
            setContacts(data);
          }
        } else {
          console.log("Contacts permission denied");
        }
      };

      fetchContacts();
    }
  }, [focued]);
  const contactData = [
    {
      id: 1,
      name: "jestin",
      mobile_number: "9798989978",
    },
    {
      id: 2,
      name: "Ravi",
      mobile_number: "8474774545",
    },
    {
      id: 3,
      name: "Dhoni",
      mobile_number: "0978876668",
    },
    {
      id: 4,
      name: "Mark",
      mobile_number: "7656467870",
    },
    {
      id: 5,
      name: "John",
      mobile_number: "4389768999",
    },
  ];

  async function getContactsHandler() {
    // Alert.alert("In Progress");
    const contact = {
      [Contacts.Fields.FirstName]: "Bird",
      [Contacts.Fields.LastName]: "Man",
      [Contacts.Fields.Company]: "Young Money",
    };
    try {
      if (PermissionStatus.GRANTED) {
        console.log("Success");
        const contactId = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        setContacts(contactId);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  console.log(contacts[2]);

  return (
    <React.Fragment>
      <StatusBar />
      <ThemedView>
        <ScrollView style={styles.main} nestedScrollEnabled={false}>
          <View style={styles.logo}>
            <Image
              source={images.logo}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.primaryBox}>
            <Text style={styles.title}>Primary contacts</Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 12,
                marginVertical: 20,
              }}
              onPress={getContactsHandler}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 800,
                  fontFamily: "Inter",
                }}
              >
                User need to add 10 contacts
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondaryBox}>
            <Text style={styles.title}>Secondary contacts</Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 12,
                marginVertical: 20,
              }}
              onPress={getContactsHandler}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 800,
                  fontFamily: "Inter",
                }}
              >
                User can add 99 other that above contacts
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ThemedView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 90,
  },
  title: {
    color: "white",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 8,
    maxWidth: "80%",
    marginLeft: 10,
  },
  primaryBox: {
    width: 309,
    height: 306,
    backgroundColor: "black",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 20,
  },
  secondaryBox: {
    width: 309,
    height: 306,
    backgroundColor: "black",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
});
