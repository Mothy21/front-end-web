import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePress = () => {
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <ScrollView>
      <View />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    borderColor: "black",
    borderRadius: 50,
  },
  usrnm: {
    fontSize: 20,
    color: "#000000",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 15,
    borderColor: "black",
    borderRadius: 50,
  },
  pass: {
    fontSize: 20,
    color: "#000000",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 15,
    borderColor: "black",
    borderRadius: 50,
  },
  inputcollum: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  touchableOpacity: {
    backgroundColor: "#00e0ff",
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 35,
    height: 45,
    width: 380,
  },
  touchableText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Registration;
