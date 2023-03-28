import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

export const data = [
  {
    date: "14 march 2023",
    studentNo: "216617162",
    location: "Tut Cafeteria",
  },
  {
    date: "16 march 2023",
    studentNo: "219917169",
    location: "Limpopo Mall Wimpy",
  },
];

const ItemList = () => {
  const _renderItems = ({ item, index }) => {
    const { date, studentNo, location } = item;
    return (
      <Item
        place={location}
        reported_date={date}
        studentNo={studentNo}
        key={index}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={_renderItems}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.con}
    />
  );
};

export default ItemList;

const styles = StyleSheet.create({
    con:{
        flexGrow:1,
        backgroundColor:'white'
    }
});
