import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = () => {
  const hello = "Welcome";
  return (
    <View>
      <Text style={styles.title}>{hello}</Text>
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: "#000000",
    fontWeight: "bold",
    margin: 10,
    textAlign: "flex-start",
  },
});
