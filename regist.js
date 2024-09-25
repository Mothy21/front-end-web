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
      <View>
        <Text style={styles.title}>Registration </Text>
        <Text style={styles.usrnm}>Name </Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan nama lengkap anda"
          placeholderTextColor="grey"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.pass}>Username </Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan username anda"
          placeholderTextColor="grey"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.pass}>Email </Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan email anda"
          placeholderTextColor="grey"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.pass}>Address </Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan alamat anda"
          placeholderTextColor="grey"
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.pass}>Phone Number </Text>
        <TextInput
          style={styles.inputcollum}
          keyboardType="number-pad"
          placeholder="Masukan Nomor telepon anda"
          placeholderTextColor="grey"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity onPress={handlePress} style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>Register</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#00e",
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
