import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Caption,
  Card,
  Divider,
  Title,
  Text as Texts,
} from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import Actions from "./Actions";
import CardItemList from "./CardItemList";
import { useNavigation } from "@react-navigation/native";

const Content = () => {
  return (
    <View style={styles.con}>
      <Top />
      <CardItemList />
      <Actions />
    </View>
  );
};

const Top = () => {
  const navigation = useNavigation();
  const transitToAll=()=>{
    navigation.navigate('all');
  }
  return (
    <View style={styles.topCon}>
      <Title style={styles.all}>All Cards</Title>
      <Button
        mode="text"
        labelStyle={{ color: "blue", fontSize: 14 }}
        onPress={transitToAll}
      >
        view all
      </Button>
    </View>
  );
};

interface item {
  admin: string;
  student_name: string;
  student_no: string;
  date_posted: string;
  message: string;
  id: number;
  onPress?(): void;
}
export const ContentCardItem = (props: item) => {
  return (
    <Card
      mode="elevated"
      style={[styles.card, { marginBottom: 10 }]}
      onPress={props.onPress}
      key={props.id}
    > 
      <Card.Content>
        <View style={{ maxHeight: 100, minHeight: 100 }}>
          <Caption style={{ position: "absolute", right: 2, top: -10 }}>
            posted: 02 Jan 2022 09:20am
          </Caption>

          <View
            style={[
              styles.topCon,
              {
                justifyContent: "flex-start",
                position: "relative",
                paddingTop: 5,
              },
            ]}
          >
            <Avatar.Icon
              icon={"account-key"}
              size={40}
              color="blue"
              style={styles.avt}
            />
            <Title style={{ fontSize: 14, paddingHorizontal: 8 }}>
              Student Admin Office<Caption>({props.admin})</Caption>{" "}
            </Title>
          </View>

          <View style={styles.info}>
            <Divider />
            {/* details */}
            <Texts style={styles.txt}>
              student Initials: {props.student_name}
            </Texts>
            <Texts style={styles.txt}>student number: {props.student_no}</Texts>
            <View style={styles.mes}>
              <Icons
                name="message-square"
                size={20}
                color={"rgba(0,0,0,0.4)"}
              />
              <Texts style={styles.ms} numberOfLines={2} ellipsizeMode="tail">
                {props.message}
              </Texts>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default Content;

const styles = StyleSheet.create({
  con: {
    marginTop: 30,
    marginHorizontal: 8,
    flex: 1,
    position: "relative",
  },
  topCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  all: {
    fontSize: 16,
  },
  card: {
    borderRadius: 0,
  },
  avt: {
    backgroundColor: "#eee",
    elevation: 1,
  },
  info: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 0,
    marginLeft: 25,
  },
  txt: {
    color: "rgba(0,0,0,0.4)",
  },
  mes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 4,
  },
  ms: {
    fontSize: 12,
    color: "rgba(0,0,0,0.2)",
    paddingHorizontal: 5,
  },
});
