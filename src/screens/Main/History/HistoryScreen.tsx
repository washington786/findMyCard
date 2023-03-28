import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import { CustomHeader } from "../../../components/CustomHeader";

import ItemList, { data } from "../../../components/history/ItemList";
import { Text } from "react-native-elements";

const HistoryScreen = () => {
  return (
    <SafeView>
      <Page>
        <CustomHeader title="My History" />
        {data.length === 0 && (
          <View style={styles.con}>
            <Image
              source={require("../../../../assets/empty.png")}
              style={{
                height: "100%",
                maxHeight: 300,
                minHeight: 300,
                width: "100%",
                alignSelf: "center",
              }}
            />
            <Text style={styles.p}>
              you currently do not have any history of reported missing or found
              cards.
            </Text>
          </View>
        )}
        {data && <ItemList />}
      </Page>
    </SafeView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    paddingHorizontal: 12,
    textAlign: "center",
    color: "rgba(0,0,0,0.6)",
    paddingVertical: 10,
  },
});
