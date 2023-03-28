import { StyleSheet } from "react-native";
import React from "react";
import { Page, SafeView } from "../../../components/Mains";
import Top from "../../../components/dashboard/Top";
import TopInfo from "../../../components/dashboard/TopInfo";
import InfoScrollbar from "../../../components/dashboard/InfoScroller";
import Content from "../../../components/dashboard/Content";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  let screen_name: string = "notifications";

  const onTransitToNotifications = (): any => {
    navigation.navigate(`${screen_name}`);
  };

  return (
    <SafeView>
      <Page>
        <Top>
          <TopInfo
            name={"Daniel Mawasha"}
            number_of_notifications_on_badge={10}
            onPress={onTransitToNotifications}
          />
          <InfoScrollbar />
        </Top>
        <Content />
      </Page>
    </SafeView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
