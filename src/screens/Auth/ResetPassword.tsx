import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../components/Mains";
import HeaderBack from "../../globals/HeaderBack";
import { AuthTop } from "./Login";
import { Button, TextInput } from "react-native-paper";
import { Formik } from 'formik'
import * as yup from 'yup' 
const ResetPassword = () => {
  let title: string = "forgot your password?";
  let sub: string =
    "please enter your registered email to reset your password.";
  const onHandleSubmit = () => {
    console.log("submitted");
  };
 
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <KeyboardAvoidingView style={styles.con}>
          <AuthTop title={title} sub={sub} />
          <InputWrapper />
          <ButtonsWrapper onHandleSubmit={onHandleSubmit} />
        </KeyboardAvoidingView>
      </Page>
    </SafeView>
  );
};
const InputWrapper = () => {
  const ReviewSchem=yup.object({
    email:yup.string().required().min(6),
    
    
})
  return (
    <Formik
                  initialValues={{email:'',}}
                 validationSchema={ReviewSchem}
                 onSubmit={(values,action)=>{
                     action.resetForm()
                    //  signIn(values)
                 }}
                 >
                     {(props)=>(
    <View style={styles.inputsContainer}>
      <TextInput
        placeholder="email address"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"email address"}
        style={styles.input}
        keyboardType="email-address"
        onChangeText={props.handleChange('email')}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
      />
        <Text style={{color:'red',marginTop:-15}}>{props.touched.email && props.errors.email}</Text>
    </View>
    )}
    </Formik>
  );
};

interface b {
  onHandleSubmit?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleSubmit}
      >
        submit
      </Button>
    </>
  );
};
export default ResetPassword;

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
