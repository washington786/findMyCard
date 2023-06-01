import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";
import { Avatar, Button, TextInput } from "react-native-paper";

const Passwords = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading,setLoading] = useState(false);

  const onSetPassword = (e: any): void => {
    setPassword(e);
  };

  const onSetConfirmPassword = (e: any): void => {
    setConfirmPassword(e);
  };

  const handleChange=()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(true);
      Alert.alert('Password successfully updated');
      setLoading(false);
    },3000);
  }

  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <View style={styles.con}>
            <InputWrappers
              confirmPassword={confirmPassword}
              password={password}
              onSetConfirmPassword={onSetConfirmPassword}
              onSetPassword={onSetPassword}
            />
            <Button
              mode="contained-tonal"
              style={styles.btn}
              loading={loading}
              onPress={handleChange}
            >
              update password
            </Button>
          </View>
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default Passwords;

interface input {
  password?: string;
  confirmPassword?: string;
  onSetPassword?(e: any): void;
  onSetConfirmPassword?(e: any): void;
}

const InputWrappers = (props: input) => {
  return (
    <View style={styles.inputCon}>
      <TextInput
        placeholder="Password"
        value={props.password}
        mode="outlined"
        label={"Password"}
        style={styles.input}
        secureTextEntry={true}
        left={<TextInput.Icon icon={"lock"} />}
        onChangeText={props.onSetPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        value={props.confirmPassword}
        mode="outlined"
        label={"Confirm Password"}
        style={styles.input}
        secureTextEntry={true}
        left={<TextInput.Icon icon={"lock"} />}
        onChangeText={props.onSetConfirmPassword}
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
