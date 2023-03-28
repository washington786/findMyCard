import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Entypo";
import { Button, Divider, ListItem } from "react-native-elements";

interface i {
  reported_date: string;
  studentNo: string;
  place: string;
}

const Item = (props: i) => {
  return (
    <View style={styles.con}>
      <View style={styles.dtWrap}>
        <Text>{props.reported_date}</Text>
      </View>
      <View>
        <Text>Student Number: {props.studentNo}</Text>
        <View>
          <Text>Found By</Text>
          <Divider orientation="horizontal" />
          <View style={styles.loc}>
            <Icons name="location-pin" size={20} color="#333" />
            <Text numberOfLines={1}>{props.place}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SwippableList = () => {
  return (
    <ListItem.Swipeable>
      <ListItem.Content>
        <ListItem.Title>Hello Swiper</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

export default Item;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#eee",
    marginHorizontal: 8,
    marginVertical: 6,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  dtWrap: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  loc: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
  },
});
