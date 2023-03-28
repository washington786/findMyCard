import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../screens/Main/Dashboard/Dashboard';
import EmailScreen from '../../screens/Main/Dashboard/EmailScreen';
import CallScreen from '../../screens/Main/Dashboard/CallScreen';
import Notifications from '../../screens/Main/Dashboard/Notifications';
import ViewAll from '../../components/dashboard/ViewAll';
import Details from '../../screens/Main/Dashboard/Details';

const DashStack = createStackNavigator();

const HomeStack = () => {
  return (
    <DashStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <DashStack.Screen name='dashboard' component={Dashboard}/>
        <DashStack.Screen name='email' component={EmailScreen}/>
        <DashStack.Screen name='call' component={CallScreen}/>
        <DashStack.Screen name='notifications' component={Notifications}/>
        <DashStack.Screen name='all' component={ViewAll}/>
        <DashStack.Screen name='details' component={Details}/>
    </DashStack.Navigator>
  )
}

export default HomeStack