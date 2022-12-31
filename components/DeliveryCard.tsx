import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Card } from '@rneui/themed';
import { Icon } from 'react-native-vector-icons/Icon';

type Props = {
    order: Order;
}
const DeliveryCard = ({ order }:Props) => {
    const tw = useTailwind();
  return (
    <Card
    containerStyle={[tw("rounded-lg my-2"),
    {
        backgroundColor: "#59C1CC",
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    ]}>
    <View>
     <Icon name="box" type="entypo" color="white" size={50} />
     <View>
        <Text></Text>
     </View>
    </View>
    </Card>
  )
}

export default DeliveryCard