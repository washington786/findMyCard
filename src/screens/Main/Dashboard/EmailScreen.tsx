import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";

import * as MailComposer from "expo-mail-composer";

import { Button, Paragraph, TextInput } from "react-native-paper";
import Scroller from "../../../components/Scroller";

import Icons from "react-native-vector-icons/Feather";
import { Divider } from "react-native-elements";

const isIos = Platform.OS === "ios";

const EmailScreen = () => {
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");
  const [body, setBody] = useState("");

  const [recipients, setRecipients] = useState([]);

  const handleEmail = () => {
    MailComposer.composeAsync({
      recipients: recipients,
      subject: subject,
      body: body,
      isHtml: false,
      ccRecipients: [],
      bccRecipients: [],
      attachments: [],
    });
  };

  const onSetBody = (e: any): void => {
    setBody(e);
  };
  const onSetRecipient = (e: any): void => {
    setRecipient(e);
  };
  const onSetSubject = (e: any): void => {
    setSubject(e);
  };

  const remove = (index: number) => {
    const newRecs = [...recipients];
    newRecs.splice(index, 1);
    setRecipients(newRecs);
  };

  const add = (text: string) => {
    setRecipients((rec) => {
      return [...rec, text];
    });
    setRecipient("");
  };

  return (
    <SafeView>
      <Page>
        <HeaderBack />

        <Scroller>
          <KeyboardAvoidingView style={styles.con}>
            <InputsWrapper
              sub={subject}
              rec={recipient}
              body={body}
              onSetBody={onSetBody}
              onSetRecipient={onSetRecipient}
              onSetSubject={onSetSubject}
              addRecipient={add.bind(this, recipient)}
            />
            <Button
              mode="contained-tonal"
              onPress={handleEmail}
              style={styles.btn}
            >
              send mail
            </Button>
            {recipients.length > 0 && (
              <>
                <Paragraph>Recipients</Paragraph>
                <Divider orientation="horizontal" />
              </>
            )}

            {recipients.map((rec, index) => {
              return (
                <>
                  <RecipientItem
                    title={rec}
                    onRemove={remove.bind(this, index)}
                    key={index + Math.random(0, 100)}
                  />
                </>
              );
            })}
          </KeyboardAvoidingView>
        </Scroller>
      </Page>
    </SafeView>
  );
};

interface i {
  sub: string;
  body: string;
  rec: string;
  onSetSubject?(e: any): void;
  onSetBody?(e: any): void;
  onSetRecipient?(e: any): void;
  addRecipient?(): void;
}

const InputsWrapper = (props: i) => {
  return (
    <>
      <TextInput
        mode="outlined"
        placeholder="enter subject"
        value={props.sub}
        activeOutlineColor="blue"
        onChangeText={props.onSetSubject}
        style={styles.input}
      />

      <TextInput
        mode="outlined"
        placeholder="enter recipient(s)"
        activeOutlineColor="blue"
        onChangeText={props.onSetRecipient}
        style={styles.input}
        autoCapitalize={"none"}
        value={props.rec}
        onSubmitEditing={props.addRecipient}
      />

      <TextInput
        mode="outlined"
        placeholder="enter mail body..."
        activeOutlineColor="blue"
        value={props.body}
        onChangeText={props.onSetBody}
        style={styles.input}
        numberOfLines={!isIos ? 6 : 0}
        multiline={true}
        contentStyle={styles.inputContent}
      />
    </>
  );
};

interface r {
  title: string;
  onRemove?(index: number | any): void;
  index: number;
}
const RecipientItem = (props: r) => {
  return (
    <TouchableOpacity onPress={props.onRemove} key={props.title}>
      <View
        style={{
          paddingHorizontal: 6,
          paddingVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>{props.title}</Text>
        <Icons name="x" size={20} color="#333" />
      </View>
    </TouchableOpacity>
  );
};
export default EmailScreen;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 10,
    marginVertical: 8,
    flex: 1,
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 6,
  },
  inputContent: {
    maxHeight: isIos ? 120 : 110,
    minHeight: isIos ? 120 : 110,
    height: "100%",
  },
  btn: {
    marginVertical: 8,
    paddingVertical: 8,
    borderRadius: 0,
    marginHorizontal: 6,
  },
});
