import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import Scroller from "../../../components/Scroller";
import { Title, Text as NativeText } from "react-native-paper";
import { terms } from "../../../data/terms";

const Terms = () => {
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <ContainerWraper>
            <MainTitle title="Terms And Conditions" />
            {terms.map((item, index) => {
              const { title, message } = item;
              return (
                <Content
                  title={title}
                  paragraph={message}
                  key_use={index}
                  key={index}
                />
              );
            })}
          </ContainerWraper>
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default Terms;

interface w {
  children?: any;
  title?: string;
}
export const ContainerWraper = (props: w) => {
  return <View style={styles.con}>{props.children}</View>;
};
export const MainTitle = (props: w) => {
  return <Text style={styles.title}>{props.title}</Text>;
};
interface c {
  title: string;
  paragraph: string;
  key_use: number;
}
export const Content = (props: c) => {
  return (
    <View style={styles.content} key={props.key_use}>
      <Title>{props.title}</Title>
      <NativeText style={styles.par}>{props.paragraph}</NativeText>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  content: {
    paddingVertical: 13,
  },
  par: {
    fontSize: 14,
    paddingVertical: 6,
  },
});
