import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";
import { Avatar, Button, TextInput } from "react-native-paper";

const Account = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhoneNo] = useState("");

  const onSetFName = (e: any) => {
    setFName(e);
  };
  const onSetLName = (e: any) => {
    setLName(e);
  };
  const onSetPhoneNo = (e: any) => {
    setPhoneNo(e);
  };

  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <View style={styles.con}>
            <Avatar.Icon
              size={130}
              icon="account"
              color="#fff"
              style={styles.av}
            />
            <InputWrappers
              firstName={fName}
              lastName={lName}
              phoneNumber={phone}
              onSetFirstName={onSetFName}
              onSetLastName={onSetLName}
              onSetPhoneNumber={onSetPhoneNo}
            />
            <Button mode="contained-tonal" style={styles.btn}>
              update profile
            </Button>
          </View>
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default Account;

interface input {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  onSetFirstName?(e: any): void;
  onSetLastName?(e: any): void;
  onSetPhoneNumber?(e: any): void;
}
const InputWrappers = (props: input) => {
  return (
    <View style={styles.inputCon}>
      <TextInput
        placeholder="First Name"
        value={props.firstName}
        mode="outlined"
        label={"Daniel Karabo"}
        style={styles.input}
        onChangeText={props.onSetFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={props.lastName}
        mode="outlined"
        label={"Mawasha"}
        style={styles.input}
        onChangeText={props.onSetLastName}
      />
      <TextInput
        placeholder="Student Number"
        mode="outlined"
        label={"216671722"}
        style={styles.input}
        disabled
      />
      <TextInput
        placeholder="Phone Number"
        value={props.phoneNumber}
        mode="outlined"
        label={"0172712812"}
        style={styles.input}
        keyboardType={"phone-pad"}
        onChangeText={props.onSetPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  av: {
    backgroundColor: "blue",
    alignSelf: "center",
  },
  inputCon: {
    marginTop: 20,
  },
  input: {
    marginBottom: 8,
  },
  btn: {
    borderRadius: 0,
    marginTop: 20,
  },
});
