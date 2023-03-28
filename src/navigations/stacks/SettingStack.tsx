import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../../screens/Main/Settings/SettingScreen';
import Account from '../../screens/Main/Settings/Account';
import Passwords from '../../screens/Main/Settings/Passwords';
import HelpCenter from '../../screens/Main/Settings/HelpCenter';
import Terms from '../../screens/Main/Settings/Terms';
import Privacy from '../../screens/Main/Settings/Privacy';
import ReportProblem from '../../screens/Main/Settings/ReportProblem';

const SetStack = createStackNavigator();

const SettingStack = () => {
  return (
    <SetStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='setting'>
        <SetStack.Screen name='setting' component={SettingScreen}/>
        <SetStack.Screen name='account' component={Account}/>
        <SetStack.Screen name='passwords' component={Passwords}/>
        <SetStack.Screen name='help' component={HelpCenter}/>
        <SetStack.Screen name='terms' component={Terms}/>
        <SetStack.Screen name='privacy' component={Privacy}/>
        <SetStack.Screen name='report' component={ReportProblem}/>
    </SetStack.Navigator>
  )
}

export default SettingStack