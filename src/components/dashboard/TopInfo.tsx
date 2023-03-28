import { StyleSheet, View } from "react-native";
import React from "react";

import { Avatar, Badge, IconButton, Text, Title } from "react-native-paper";

interface t {
  name: String;
  number_of_notifications_on_badge: number;
  onPress?(): void;
}
const TopInfo = (props: t) => {
  return (
    <View style={styles.t}>
      <View style={styles.infoCon}>
        <Title style={styles.title}>Welcome Back</Title>
        <View style={styles.accWrapper}>
          <Avatar.Icon
            icon={"account"}
            size={30}
            color="#333"
            style={styles.acc}
          />
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </View>
      <View style={styles.bellCon}>
        <IconButton
          icon={"bell"}
          onPress={props.onPress}
          iconColor="blue"
          size={30}
        />
        <Badge style={styles.b}>{props.number_of_notifications_on_badge}</Badge>
      </View>
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({
  t: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  b: {
    backgroundColor: "red",
    color: "white",
    position: "absolute",
    right: 4,
    zIndex: 1,
  },
  bellCon: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: 5,
  },
  infoCon: {
    flex: 1,
    paddingTop: 8,
  },
  title: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 26,
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "rgba(255,255,255,0.75)",
    paddingTop: 5,
    paddingHorizontal: 8,
  },
  acc: {
    backgroundColor: "white",
  },
  accWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
