import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../components/Mains";
import HeaderBack from "../../globals/HeaderBack";
import { Button, TextInput } from "react-native-paper";
import { AuthTop } from "./Login";
import { useNavigation } from "@react-navigation/native";

const Register = () => {

  const navigation = useNavigation();
  let title: string = "create account";
  let sub: string =
    "please enter valid credentials to register an account with us.";

  const handleLogin = () => {
    navigation.navigate("login");
  };

  const onHandleRegister = () => {
    console.log("register");
  };
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <KeyboardAvoidingView style={styles.con}>
          <AuthTop title={title} sub={sub} />
          <InputWrapper />
          <ButtonsWrapper
            onHandleLogin={handleLogin}
            onHandleRegister={onHandleRegister}
          />
        </KeyboardAvoidingView>
      </Page>
    </SafeView>
  );
};

const InputWrapper = () => {
  return (
    <View style={styles.inputsContainer}>
      <TextInput
        placeholder="email address"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"email address"}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Student No"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Student No"}
        style={styles.input}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="Surname & Initials"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Surname & Initials"}
        style={styles.input}
        keyboardType="default"
      />
      <TextInput
        placeholder="ID Number"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"ID Number"}
        style={styles.input}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"password"}
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Confirm password"}
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
      />
    </View>
  );
};

interface b {
  onHandleRegister?(): void;
  onHandleLogin?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleRegister}
      >
        create account
      </Button>
      <Button
        mode="outlined"
        style={[
          styles.button,
          { backgroundColor: "none", borderColor: "blue" },
        ]}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleLogin}
      >
        sign in
      </Button>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "blue",
    textTransform: "uppercase",
  },
  cap: {
    color: "blue",
  },
  outline: {
    borderWidth: 0.2,
    borderColor: "rgba(0,0,0,0.4)",
  },
  inputsContainer: {
    marginTop: 30,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    borderRadius: 2,
    paddingVertical: 5,
    marginTop: 10,
    backgroundColor: "blue",
  },
  label: {
    textTransform: "uppercase",
    color: "white",
  },
});
