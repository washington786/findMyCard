import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

import PagerView from "react-native-pager-view";
import { ActivityIndicator, Paragraph, Text } from "react-native-paper";
import { Info } from "../../data/info";

const MyPager = () => {
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        flex: 1,
      }}
    >
      <PagerView style={styles.viewPager} initialPage={0}>
        {Info.map((item) => {
          const { datePosted, description, name, uri, id } = item;
          return (
            <PagesWrapper
              key={id}
              date={datePosted}
              description={description.substring(0,40)}
              name={name}
              url={uri}
            />
          );
        })}
      </PagerView>
    </View>
  );
};

interface p {
  url: string;
  name: string;
  description: string;
  date: string;
}

const PagesWrapper = (props: p) => {
  return (
    <View>
      <Image
        PlaceholderContent={<ActivityIndicator style={{alignSelf:'center'}}/>}
        containerStyle={{ aspectRatio: 2 }}
        source={{
          uri: props.url,
        }}
        resizeMethod="auto"
      />
      <View style={styles.inf}>
        <Paragraph numberOfLines={1} ellipsizeMode="middle" style={{fontSize:10,fontWeight:"bold",color:'black'}}>{props.name}</Paragraph>
        <Text numberOfLines={1} ellipsizeMode="middle" style={{fontSize:8,color:'black'}}>
          {props.description}...
        </Text>
        <Text style={{fontSize:7,color:'black'}}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  inf: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 20,
    backgroundColor:'rgba(255,255,255,0.8)',
    paddingVertical:8,
    paddingHorizontal:8
  },
});

export default MyPager;
