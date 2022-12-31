import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Card } from '@rneui/themed';

type Props = {
    order: Order;
}
const DeliveryCard = ({ order }:Props) => {
    const tw = useTailwind();
  return (
    <Card>
    <View>
      <Text>DeliveryCard</Text>
    </View>
    </Card>
  )
}

export default DeliveryCard