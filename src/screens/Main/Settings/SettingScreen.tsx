import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Page, SafeView } from "../../../components/Mains";
import { CustomHeader } from "../../../components/CustomHeader";
import Scroller from "../../../components/Scroller";

import Icons from "react-native-vector-icons/Feather";
import { Button, Divider, Text, Title } from "react-native-paper";
import { Divider as AndroidDivider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../../Auth/firebase";
import { ref, onValue } from "firebase/database";
const isAndroid = Platform.OS === "android";

// screens
const screens = {
  setting: "account",
  password: "passwords",
  help: "help",
  terms: "terms",
  privacy: "privacy",
  report: "report",
};

const SettingScreen = () => {
  const user = auth.currentUser?.uid;
  const navigation = useNavigation();

  const [Surname, setSurname] = useState("");
  const [phoneNo, setPhoneNumber] = useState("");
  const [Uid, setUid] = useState("");
  const [StudentNo, setStudentNo] = useState("");

  useEffect(() => {
    const StudentRef = ref(db, "/Studens/" + user);
    onValue(StudentRef, (snap) => {
      setSurname(snap.val() && snap.val()?.Surname);
      setStudentNo(snap.val()?.StudentNo);
      setPhoneNumber(snap.val()?.idNo);
      // setEmail(snap.val().email)
      setUid(snap.val()?.uid);
    });
  }, []);

  const transitMyAccount = (): any => {
    navigation.navigate(`${screens.setting}`, {
      StudentNo: StudentNo,
      Surname: Surname,
      Uid: Uid,
    });
  };
  const transitPassword = (): any => {
    navigation.navigate(`${screens.password}`);
  };
  const transitReport = (): any => {
    navigation.navigate(`${screens.report}`);
  };
  const transitHelp = (): any => {
    navigation.navigate(`${screens.help}`);
  };
  const transitTerms = (): any => {
    navigation.navigate(`${screens.terms}`);
  };
  const transitPrivacy = (): any => {
    navigation.navigate(`${screens.privacy}`);
  };

  return (
    <SafeView>
      <Page>
        <CustomHeader title="Account Settings" />
        <Scroller>
          <TitleWrapper title={"account"} />
          <Wrapper
            title="my account"
            icon={"user"}
            onPress={transitMyAccount}
          />
          <Wrapper
            title="Manage Password"
            icon={"lock"}
            onPress={transitPassword}
          />

          <TitleWrapper title={"Support"} />
          <Wrapper
            title="Report a problem"
            icon={"info"}
            onPress={transitReport}
          />
          <Wrapper title="Help Center" icon={"info"} onPress={transitHelp} />

          <TitleWrapper title={"About"} />
          <Wrapper
            title="Terms of use"
            icon={"bookmark"}
            onPress={transitTerms}
          />
          <Wrapper
            title="Privacy Policy"
            icon={"bookmark"}
            onPress={transitPrivacy}
          />

          {!isAndroid ? (
            <Divider style={styles.div} />
          ) : (
            <AndroidDivider orientation="horizontal" style={styles.div} />
          )}
          <LogWrapper />
        </Scroller>
      </Page>
    </SafeView>
  );
};

export default SettingScreen;

const LogWrapper = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleLogout = () => {
    // await auth.signOut().then(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(true);
      navigation.navigate("login");
      setLoading(false);
    }, 3000);
    // })
  };

  return (
    <>
      <Button
        labelStyle={{ color: "red" }}
        icon="exit-to-app"
        onPress={handleLogout}
        loading={loading}
        disabled={loading ? true : false}
        // contentStyle={{backgroundColor:'red'}}
      >
        logout
      </Button>
      <Text style={styles.vs}>version 1.0.1</Text>
    </>
  );
};

interface w {
  title: string;
  icon?: string | any;
  onPress?(): void | any;
}
const Wrapper = (props: w) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.wrap}>
        <Icons name={props.icon} size={20} color="#333" />
        <Title style={styles.txtWrap}>{props.title}</Title>
      </View>
    </TouchableOpacity>
  );
};

interface t {
  title: String;
}
const TitleWrapper = (props: t) => {
  return (
    <View style={styles.tCon}>
      <Text style={styles.tit}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  txtWrap: {
    fontSize: 18,
    color: "rgba(0,0,0,0.7)",
    paddingHorizontal: 15,
    fontWeight: "400",
    textTransform: "capitalize",
  },
  tit: {
    fontSize: 16,
    fontWeight: "200",
    textTransform: "capitalize",
  },
  tCon: {
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  div: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  vs: {
    fontSize: 12,
    textAlign: "center",
    color: "rgba(0,0,0,0.3)",
  },
});
