import { StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ContentCardItem } from "./Content";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    student_info: "Sekgoka LM",
    student_no: "212676162",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
  {
    id: 2,
    student_info: "Furie SK",
    student_no: "212676166",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
  {
    id: 3,
    student_info: "Json DK",
    student_no: "212676177",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
];

export const CardItemList = () => {

  const navigation = useNavigation();

  const transitToDetails=(item:any|object):void=>{
    navigation.navigate('details',{item});
  }

  const _renderItem = ({item}) => {
    const { id, student_info, student_no, message, admin } = item;
    return (
      <ContentCardItem
        admin={admin}
        date_posted={""}
        message={message}
        student_name={student_info}
        student_no={student_no}
        id={id}
        onPress={transitToDetails.bind(this,item)}
      />
    );
  };
  return (
    <>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default CardItemList;

const styles = StyleSheet.create({});
