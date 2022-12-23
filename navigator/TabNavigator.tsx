import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <View>
      <Text>TabNavigator</Text>
    </View>
  )
}

export default TabNavigator