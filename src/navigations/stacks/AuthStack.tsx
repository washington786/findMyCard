import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import ResetPassword from '../../screens/Auth/ResetPassword';

const AuthStacks = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='login'>
        <AuthStacks.Screen name='login' component={Login}/>
        <AuthStacks.Screen name='register' component={Register}/>
        <AuthStacks.Screen name='reset' component={ResetPassword}/>
    </AuthStacks.Navigator>
  )
}

export default AuthStack
