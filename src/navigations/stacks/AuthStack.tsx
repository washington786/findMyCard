import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import ResetPassword from '../../screens/Auth/ResetPassword';
import Dashboard from '../../screens/Main/Dashboard/Dashboard';
import BottomNavigation from '../BottomNavigation';
const AuthStacks = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='login'>
        <AuthStacks.Screen name='login' component={Login}/>
        <AuthStacks.Screen name='register' component={Register}/>
        <AuthStacks.Screen name='reset' component={ResetPassword}/>
        <AuthStacks.Screen name='Dashboard' component={Dashboard}/>
        <AuthStacks.Screen name='main' component={BottomNavigation}/>
    </AuthStacks.Navigator>
  )
}

export default AuthStack
