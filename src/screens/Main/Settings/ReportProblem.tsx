import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { Page, SafeView } from "../../../components/Mains";

import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";
import { Button, Text, TextInput } from "react-native-paper";

const ReportProblem = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSetSubject = (e: any): void => {
    setSubject(e);
  };

  const onSetMessage = (e: any): void => {
    setMessage(e);
  };

  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <View style={styles.con}>
            <Text style={styles.txt}>
              enter the information below to submit a query to the support team.
            </Text>

            <InputWrappers
              message={message}
              subject={subject}
              onSetMessage={onSetMessage}
              onSetSubject={onSetSubject}
            />
            <Button mode="contained-tonal" style={styles.btn}>
              submit
            </Button>
          </View>
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default ReportProblem;

interface input {
  subject: string;
  message: string;
  onSetSubject?(e: any): void;
  onSetMessage?(e: any): void;
}
const InputWrappers = (props: input) => {
  return (
    <View style={styles.inputCon}>
      <TextInput
        placeholder="Subject"
        value={props.subject}
        mode="outlined"
        style={styles.input}
        onChangeText={props.onSetSubject}
      />
      <TextInput
        placeholder="message..."
        value={props.message}
        mode="outlined"
        multiline={true}
        numberOfLines={3}
        style={[styles.input, styles.multiInput]}
        onChangeText={props.onSetMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  txt: {
    fontWeight: "200",
  },
  inputCon: {
    marginTop: 20,
  },
  input: {
    marginBottom: 8,
  },
  multiInput: {
    maxHeight: 120,
    minHeight: 120,
  },
  btn: {
    borderRadius: 0,
    marginTop: 20,
  },
});
