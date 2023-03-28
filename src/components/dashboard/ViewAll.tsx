import { StyleSheet, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../Mains";
import HeaderBack from "../../globals/HeaderBack";
import CardItemList from "./CardItemList";

const ViewAll = () => {
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <View style={styles.con}>
          <CardItemList />
        </View>
      </Page>
    </SafeView>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex:1
  },
});
