import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Image, Input } from '@rneui/themed';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>, NativeStackNavigatorProps<RootStackParamList>
>

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [input, setInput] = useState<string>()
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

    <Input placeholder="Search by customer" onChangeText={setInput}
      containerStyle={tw("bg-white pt-5 pb-0 px-10")}/>  
    </ScrollView>
  )
}

export default CustomersScreen