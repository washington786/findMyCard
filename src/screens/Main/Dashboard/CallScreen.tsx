import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import { Button, TextInput } from "react-native-paper";

// call api
import * as Linking from 'expo-linking';

const CallScreen = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const onSetPhoneNo = (e: any): void => {
    setPhoneNo(e);
  };

  const dialNumber = (phoneNumber:string) => {
    let phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberUrl);
  };

  const handleCall=()=>{
    dialNumber(phoneNo);
  }
  
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <View>
          <InputsWrapper phoneNo={phoneNo} onSetNumber={onSetPhoneNo} />
          <Button
            mode="contained-tonal"
            onPress={handleCall}
            style={styles.btn}
            contentStyle={{ backgroundColor: "green" }}
            labelStyle={{color:'white'}}
            icon="phone"
          >
            make call
          </Button>
        </View>
      </Page>
    </SafeView>
  );
};

export default CallScreen;
interface i {
  phoneNo: string;
  onSetNumber?(e: any): void;
}

const InputsWrapper = (props: i) => {
  return (
    <>
      <TextInput
        mode="outlined"
        placeholder="000 000 0000"
        keyboardType="phone-pad"
        value={props.phoneNo}
        activeOutlineColor="blue"
        onChangeText={props.onSetNumber}
        style={styles.input}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    marginHorizontal: 6,
  },
  btn: {
    marginVertical: 8,
    paddingVertical: 8,
    borderRadius: 0,
    marginHorizontal: 6,
    backgroundColor:'green'
  },
});
