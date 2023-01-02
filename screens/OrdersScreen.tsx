import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn/dist';
import useOrders from '../hooks/useOrders';
import { color } from '@rneui/base';
import { Image } from '@rneui/themed';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;


type OrderScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList, "Order">
>;

const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation =useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style = {{ color: focused ? "#5EB6A7C" : color, fontSize: 10}}>Orders</Text>
      ),

    });
  },[]);

  return (
    <ScrollView>
      <Image source={{uri: "https://links.papareact.com/m51"}}
      containerStyle={tw("w-full h-64")}/>

      <Button>
        {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
      </Button>
    </ScrollView>
  )
}

export default OrdersScreen