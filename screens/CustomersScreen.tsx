import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp, NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Image, Input } from '@rneui/themed';
import { GET_CUSTOMERS, GET_ORDERS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import CustomerCard from '../components/CustomerCard';
import Glass from '../components/Glass';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>, NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [input, setInput] = useState<string>("")
  const {loading, error, data} = useQuery(GET_CUSTOMERS);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <ScrollView style ={{backgroundColor: "#59C1CC"}}>
      <Image 
        source = {{uri: 'https://links.papareact.com/3jc'}}
        containerStyle ={tw("w-full h-64")}/>

    <Input placeholder="Search by customer" value ={input} onChangeText={setInput}
      containerStyle={tw("bg-white pt-5 pb-0 px-10")}/>  
     
      <CustomerCard />
    </ScrollView>
  )
}

export default CustomersScreen