import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "./src/component/Title";
import Textbox from "./src/component/Textbox";
import Button from "./src/component/Button";

const App = () => {
  return (
    //JSX
    <>
      <Title />
      <Textbox />
      <Button />
    </>
  );
};

export default App;

const style = StyleSheet.create({});
