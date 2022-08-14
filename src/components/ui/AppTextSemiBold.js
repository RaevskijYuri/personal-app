import React from "react";
import { Text, StyleSheet } from "react-native";

export const AppTextSemiBold = (props) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "Gilroy-SemiBold",
  },
});