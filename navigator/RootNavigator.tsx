import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const RootNavigator = () => {

    const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator}
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator