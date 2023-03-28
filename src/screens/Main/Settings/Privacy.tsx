import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import HeaderBack from "../../../globals/HeaderBack";
import { ContainerWraper, Content, MainTitle } from "./Terms";
import { privacy } from "../../../data/privacy";
import Scroller from "../../../components/Scroller";

const Privacy = () => {
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <Scroller>
          <ContainerWraper>
            <MainTitle title="Privacy Policies" />
            {privacy.map((item, index) => {
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

export default Privacy;

const styles = StyleSheet.create({});
