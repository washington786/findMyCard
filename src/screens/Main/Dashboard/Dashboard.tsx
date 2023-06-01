import { StyleSheet } from "react-native";
import React,{useState,useEffect} from "react";
import { Page, SafeView } from "../../../components/Mains";
import Top from "../../../components/dashboard/Top";
import TopInfo from "../../../components/dashboard/TopInfo";
import InfoScrollbar from "../../../components/dashboard/InfoScroller";
import Content from "../../../components/dashboard/Content";
import { useNavigation } from "@react-navigation/native";
import { db,auth } from "../../Auth/firebase";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
const Dashboard = () => {
  const user= auth.currentUser?.uid
  const navigation = useNavigation();

  let screen_name: string = "notifications";

  const onTransitToNotifications = (): any => {
    navigation.navigate(`${screen_name}`);
  };
 const [Surname,setSurname]=useState('')
 useEffect(() => {
  const StudentRef=ref(db,'/Studens/' + user)
  onValue(StudentRef, snap => {

      setSurname(snap.val() && snap.val().Surname);
      
  }) 

}, [])
  return (
    <SafeView>
      <Page>
        <Top>
          <TopInfo
            name={Surname}
            number_of_notifications_on_badge={10}
            onPress={onTransitToNotifications}
          />
          {/* <InfoScrollbar /> */}
        </Top>
        <Content />
      </Page>
    </SafeView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
