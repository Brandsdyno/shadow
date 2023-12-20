import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { ThemedView, StatusBar } from "../../components/UIcomponents";
import { images } from "../../constants";
export default function Contacts() {
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
            <ScrollView nestedScrollEnabled={true}>
              <FlatList
                data={contactData}
                scrollEnabled={true}
                
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        marginVertical: 12,
                        marginLeft: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: "white",
                        paddingVertical: 6,
                      }}
                    >
                      <Text style={{ color: "white" }}>{item.name}</Text>
                      <Text style={{ color: "white" }}>
                        {item.mobile_number}
                      </Text>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>
          <View style={styles.secondaryBox}>
            <Text style={styles.title}>Secondary contacts</Text>
            <ScrollView nestedScrollEnabled={true}>
              <FlatList
                data={contactData}
                scrollEnabled={true}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        marginVertical: 12,
                        marginLeft: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: "white",
                        paddingVertical: 6,
                      }}
                    >
                      <Text style={{ color: "white" }}>{item.name}</Text>
                      <Text style={{ color: "white" }}>
                        {item.mobile_number}
                      </Text>
                    </View>
                  );
                }}
              />
            </ScrollView>
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
