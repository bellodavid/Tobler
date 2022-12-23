import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';


const CustomersScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>CustomersScreen</Text>
    </SafeAreaView>
  )
}

export default CustomersScreen