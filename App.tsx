import { Platform, StatusBar as Bar } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainNavigation from "./src/navigations/MainNavigation";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <StatusBar
        style={isAndroid ? "light" : "light"}
        backgroundColor={isAndroid ? "blue" : "#333"}
        networkActivityIndicatorVisible={true}
      />
      <Bar
        backgroundColor={"blue"}
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
      />
      <MainNavigation />
    </>
  );
}
