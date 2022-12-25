import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrderScreen from '../screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import RootNavigator from './RootNavigator';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;

}

const TabNavigator = () => {
    const Tab = createBottomTabNavigator<TabStackParamList>();
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ focused, color, size }) => {
        if(route.name === 'Customers'){
          return(
            <Icon
              name ='users'
              type= "entypo"
              color ={focused? "#59C1CC" : "gray"} />
          );
        }else if(route.name === "Orders"){
          return(
            <Icon
              name = "box"
              type = "entypo"
              color={focused? "#EB6A7C" : "gray"} />
          )
        }
      }
    })}>
      <Tab.Screen name="Customers" component={CustomersScreen}/>
      <Tab.Screen name="Orders" component={OrderScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator