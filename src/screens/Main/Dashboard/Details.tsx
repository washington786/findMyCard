import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";

import { useRoute } from "@react-navigation/native";

import { Caption, Card, FAB, Text, TextInput, Title } from "react-native-paper";
import { Divider } from "react-native-elements";

import Icons from "react-native-vector-icons/Feather";

const Details = () => {
  const route = useRoute();
  const { item } = route.params; 

  const { admin, message, student_info, student_no } = item;
 
  let date_posted: Date = new Date("2023-03-28 09:10");

  const [isAdd, setAdd] = useState(false);
  const [comment, setComment] = useState("");
  const [sender, setSender] = useState([]);

  const onSetComment = (e: any): void => {
    setComment(e);
  };

  const onSubmitEditing = (): void => {
    console.log(comment)
  };

  const onHandleAdd=()=>{
    setAdd(!isAdd);
  }

  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <Card
            style={{
              borderRadius: 0,
              elevation: 0,
              borderWidth: 0,
              backgroundColor: "#f8f9fa",
            }}
            mode="contained"
            elevation={0}
            contentStyle={styles.con}
          >
            <Title style={styles.title}>{date_posted.toString()}</Title>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Icons name="user" />
              <Caption>{admin}</Caption>
            </View>
            <Divider orientation="horizontal" />
            <View style={styles.content}>
              <Caption>Student Details:</Caption>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Name</Text>
                <Text style={styles.info_txt}>{student_info}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>student no</Text>
                <Text style={styles.info_txt}>{student_no}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Year Of Study</Text>
                <Text style={styles.info_txt}>2023</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Faculty</Text>
                <Text style={styles.info_txt}>ICT</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Course</Text>
                <Text style={styles.info_txt}>Computer Science</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Student Email</Text>
                <Text style={styles.info_txt}>21767172@tut4life.ac.za</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.info_txt}>Contact No</Text>
                <Text style={styles.info_txt}>08127273901</Text>
              </View>
            </View>
          </Card>
          <View style={styles.comment}>
            <FAB
              icon="plus"
              onPress={onHandleAdd}
              mode="flat"
              size="small"
            />
          </View>
          {
            isAdd &&
          <View style={styles.inputCon}>
            <TextInput
              outlineStyle={{
                borderRadius: 20,
                borderWidth: 0.2,
              }}
              placeholder="enter your comment...."
              autoCapitalize="none"
              mode="outlined"
              style={styles.input}
              contentStyle={styles.input}
              value={comment}
              onChangeText={onSetComment}
              onSubmitEditing={onSubmitEditing}
            />
          </View>
          }
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default Details;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
  },
  content: {
    paddingVertical: 6,
  },
  info: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  info_txt: {
    fontSize: 12,
    color: "rgba(0,0,0,0.3)",
  },
  comment: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  inputCon: {
    marginVertical: 7,
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
  },
});
