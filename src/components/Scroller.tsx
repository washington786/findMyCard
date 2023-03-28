import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

interface s{
    children: any
}
const Scroller = (props:s) => {
  return (
    <ScrollView
      style={styles.con}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
        {props.children}
    </ScrollView>
  );
};

export default Scroller;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "white",
  },
});
