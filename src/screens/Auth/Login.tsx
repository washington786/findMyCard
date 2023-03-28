import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../components/Mains";
import HeaderBack from "../../globals/HeaderBack";
import {
  Title,
  Text as TextPaper,
  TextInput,
  Button,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const onHandleRegister = () => {
    navigation.navigate("register");
  };
  const onHandleResetPassword = () => {
    navigation.navigate("reset");
  };
  const onHandleLogin = () => {
    console.log("logins");
  };
  let title: string = "Welcome Back";
  let sub: string = "please enter your credentials to sign in to your account.";
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <KeyboardAvoidingView style={styles.con}>
          <AuthTop title={title} sub={sub} />
          <InputWrapper />
          <ButtonsWrapper
            onHandleLogin={onHandleLogin}
            onHandleRegister={onHandleRegister}
            onHandleResetPassword={onHandleResetPassword}
          />
        </KeyboardAvoidingView>
      </Page>
    </SafeView>
  );
};

interface t {
  title: string;
  sub: string;
}

export const AuthTop = (props: t) => {
  return (
    <View>
      <Title style={styles.title}>{props.title}</Title>
      <TextPaper style={styles.cap}>{props.sub}</TextPaper>
    </View>
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
      />
      <TextInput
        placeholder="password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"password"}
        secureTextEntry={true}
        style={styles.input}
      />
    </View>
  );
};

interface b {
  onHandleLogin?(): void;
  onHandleRegister?(): void;
  onHandleResetPassword?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      <Button
        mode="text"
        contentStyle={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleResetPassword}
      >
        reset password
      </Button>
      <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleLogin}
      >
        sign in
      </Button>
      <Button
        mode="outlined"
        style={[
          styles.button,
          { backgroundColor: "none", borderColor: "blue" },
        ]}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleRegister}
      >
        create account
      </Button>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,0.7)",
    textTransform: "uppercase",
  },
  cap: {
    color: "rgba(0,0,0,0.3)",
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