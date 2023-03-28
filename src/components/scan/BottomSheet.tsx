import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";
import { Button } from "react-native-paper";

const height=Dimensions.get('screen').height;

interface b{
    handleScanner():void;
}

const BottomSheets = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={"Notifications"}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: "white",
          maxHeight: "20%",
          minHeight: "15%",
          width: "100%",
          height: height*0.5,
        }}
        bottomSheetTitleStyle={{ color: "#0A2463" }}
        onRequestClose={() => setVisible(!isVisible)}
        bottomSheetVisible={isVisible}
      >
        <ScrollView>
            <Button mode="outlined" labelStyle={{color:'blue'}}>Scan Again 📷 </Button>
          <Text>Hi</Text>
          <Text>I'm, kedar09</Text>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheets;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    width: "100%",
    height: height*0.5,
    bottom: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3E92CC",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
