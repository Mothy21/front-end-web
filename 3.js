import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TextInputExample = () => {
  const box = "Username";
  const box1 = "Password";
  const [text, onChangeText] = React.useState("Masukan username anda");
  const [number, onChangeNumber] = React.useState("Masukan password anda");

  return (
    <SafeAreaView>
      <Text style={styles.box}>{box}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.box1}>{box1}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  box: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 12,
    color: "#000000",
  },
  box1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    margin: 10,
  },
});

export default TextInputExample;
