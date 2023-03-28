import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";

const Notifications = () => {
  return (
    <SafeView>
      <Page>
        <HeaderBack/>
        <View>
          <Text>Notifications</Text>
        </View>
      </Page>
    </SafeView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
