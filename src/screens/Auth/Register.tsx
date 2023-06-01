import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../components/Mains";
import HeaderBack from "../../globals/HeaderBack";
import { Button, TextInput } from "react-native-paper";
import { AuthTop } from "./Login";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, child, set } from "firebase/database";

// https://www.red-gate.com/simple-talk/development/working-with-firebase-version-9-modular-sdk-and-react-typescript/
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
        {/* <HeaderBack /> */}
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
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const IDRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const StudNoRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const ReviewSchem = yup.object({
    StudentNo: yup
      .string()
      .required()
      .min(9)
      .matches(StudNoRegExp, "Student No  is not valid"),
    Surname: yup.string().required().min(3),
    IDnumber: yup
      .string()
      .required()
      .matches(IDRegExp, "IDnumber  is not valid")
      .min(13),
    email: yup.string().required().min(6),
    password: yup.string().required().min(6),
    confirmpassword: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref("password"), null], "password does not match"),
  });
  const addUser = async (data) => {
    try {
      setLoading(true);
      const { uid, email, password, Surname, StudentNo, IDnumber } = data;
      await createUserWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      ).then((res) => {
        setLoading(true);
        const StudentsRef = ref(db, `/Studens`);
        const StudentChild = child(StudentsRef, res.user.uid);
        set(StudentChild, {
          StudentNo: StudentNo,
          Surname: Surname,
          email: email.trim().toLowerCase(),
          IDnumber: IDnumber,
          uid: res.user.uid,
        });
        setLoading(false);
        navigation.navigate('main')
      });
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("That email address is already inuse");
      }
      if (error.code === "auth/invalid-email") {
        Alert.alert("That email address is invalid");
      } else {
        console.warn(error.code);
        // Alert.alert(error.code)
      }
    }
  };
  return (
    <Formik
      initialValues={{
        StudentNo: "",
        Surname: "",
        IDnumber: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={ReviewSchem}
      onSubmit={(values, action) => {
        action.resetForm();
        addUser(values);
      }}
    >
      {(props) => (
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="email address"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"email address"}
            style={styles.input}
            keyboardType="email-address"
            onChangeText={props.handleChange("email")}
            value={props.values.email}
            onBlur={props.handleBlur("email")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.email && props.errors.email}
          </Text>
          <TextInput
            placeholder="Student No"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"Student No"}
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={props.handleChange("StudentNo")}
            value={props.values.StudentNo}
            onBlur={props.handleBlur("StudentNo")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.StudentNo && props.errors.StudentNo}
          </Text>
          <TextInput
            placeholder="Surname  Initials"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"Surname & Initials"}
            style={styles.input}
            keyboardType="default"
            onChangeText={props.handleChange("Surname")}
            value={props.values.Surname}
            onBlur={props.handleBlur("Surname")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.Surname && props.errors.Surname}
          </Text>
          <TextInput
            placeholder="Phone Number"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"Phone Number"}
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={props.handleChange("IDnumber")}
            value={props.values.IDnumber}
            onBlur={props.handleBlur("IDnumber")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.IDnumber && props.errors.IDnumber}
          </Text>
          <TextInput
            placeholder="password"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"password"}
            style={styles.input}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={props.handleChange("password")}
            value={props.values.password}
            onBlur={props.handleBlur("password")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.password && props.errors.password}
          </Text>
          <TextInput
            placeholder="Confirm password"
            outlineStyle={styles.outline}
            mode="outlined"
            label={"Confirm password"}
            style={styles.input}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={props.handleChange("confirmpassword")}
            value={props.values.confirmpassword}
            onBlur={props.handleBlur("confirmpassword")}
          />
          <Text style={{ color: "red", marginTop: -10 }}>
            {props.touched.confirmpassword && props.errors.confirmpassword}
          </Text>
          <Button
            mode="contained-tonal"
            style={styles.button}
            labelStyle={styles.label}
            onPress={props.handleSubmit}
            loading={loading}
            disabled={loading ? true : false}
          >
            create account
          </Button>
        </View>
      )}
    </Formik>
  );
};

interface b {
  onHandleRegister?(): void;
  onHandleLogin?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      {/* <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleRegister}
      >
        create account
      </Button> */}
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
