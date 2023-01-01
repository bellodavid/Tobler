import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type OrderScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList, "Order">
>;

const OrdersScreen = () => {
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}

export default OrdersScreen