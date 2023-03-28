import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HistoryScreen from "../screens/Main/History/HistoryScreen";
import AddScreen from "../screens/Main/Add/AddScreen";

import Icon from "react-native-vector-icons/Feather";
import { Platform } from "react-native";
import HomeStack from "./stacks/HomeStack";
import SettingStack from "./stacks/SettingStack";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "home",
  history: "clock",
  add: "plus",
  settings: "user",
};

const isAndroid = Platform.OS==='android';

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
            backgroundColor: !isAndroid?'#eee':'#fff'
          }
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.dashboard} size={20} color={color} />
            ),
            tabBarLabel: "Store",
          }}
        />
        <Tab.Screen
          name="history"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.history} size={20} color={color} />
            ),
            tabBarLabel: "history",
          }}
        />
        <Tab.Screen
          name="add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.add} size={20} color={color} />
            ),
            tabBarLabel: "add",
          }}
        />
        <Tab.Screen
          name="settings"
          component={SettingStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.settings} size={20} color={color} />
            ),
            tabBarLabel: "Store",
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
