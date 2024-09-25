import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    margin: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
});
