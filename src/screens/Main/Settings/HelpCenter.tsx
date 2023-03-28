import { StyleSheet, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";
import { ContainerWraper, MainTitle } from "./Terms";

import Icons from 'react-native-vector-icons/Feather';
import { Caption, Text } from "react-native-paper";

const HelpCenter = () => {
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <ContainerWraper>
            <MainTitle title="Help Center Information"/>
            <Text style={styles.sub}>for more info, contact us:</Text>
            <ItemWrapper icon={'phone'} title='+27912345612'/>
            <ItemWrapper icon={'mail'} title='find@tut.co.za'/>
          </ContainerWraper>
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default HelpCenter;

interface i{
  icon:string|any;
  title: string;
}

const ItemWrapper=(props:i)=>{
  return (
    <View style={styles.con}>
      <Icons name={props.icon} size={25} color={'rgba(0,0,0,0.5)'}/>
      <Caption style={styles.title}>{props.title}</Caption>
    </View>
  )
}

const styles = StyleSheet.create({
  con:{
    flexDirection:"row",
    marginTop:6,
    paddingVertical:8,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    fontSize:16,
    fontWeight:"200",
    paddingHorizontal:7
  },
  sub:{
    paddingVertical:5,
    color:'rgba(0,0,0,0.4)'
  }
});
