import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { SpeedDial } from "react-native-elements";
import { Provider } from "react-native-paper";

export default () => {
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigation();

  const onToEmail=()=>{
    navigation.navigate('email');
    setOpen(false);
  }

  const onToCall=()=>{
    navigation.navigate('call');
    setOpen(false);
  }

  return (
    <>
      <SpeedDial
        style={{
          flexGrow: 1,
          flex: 1,
          position: "absolute",
          bottom: 30,
          right: 0,
        }}
        isOpen={open}
        icon={{ name: "add", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        size="large"
        buttonStyle={{ backgroundColor: "blue" }}
      >
        <SpeedDial.Action
          icon={{ name: "email", color: "#fff" }}
          title="Email"
          onPress={onToEmail}
          buttonStyle={{ backgroundColor: "blue" }}
        />
        <SpeedDial.Action
          icon={{ name: "call", color: "#fff" }}
          title="Call"
          onPress={onToCall}
          buttonStyle={{ backgroundColor: "blue" }}
        />
      </SpeedDial>
    </>
  );
};
