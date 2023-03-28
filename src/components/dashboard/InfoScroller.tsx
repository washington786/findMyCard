import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

import MyPager from "./Carousel";

const height = Dimensions.get("screen").height;

const isAndroid = Platform.OS === "android";

const InfoScrollbar = () => {
  return (
    <View style={styles.car}>
      <MyPager/>
    </View>
  );
};


export default InfoScrollbar;

const styles = StyleSheet.create({
  car: {
    position: "absolute",
    bottom: -20,
    backgroundColor: "white",
    height: height * 0.19,
    alignSelf: "center",
    width: "90%",
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: isAndroid ? 5 : 0,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: isAndroid ? 0 : 1,
    padding:10
  },
  con: {
    maxWidth: 200,
    minWidth: 200,
    maxHeight: 200,
    minHeight: 200,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "green",
    zIndex: 100,
  },
});
