import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Card, Divider, Icon } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';


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
        <Text style={tw("text-xs text-center uppercase text-white font-bold")}>
            WXY 2023
        </Text>
        <Text style={tw("text-white text-center text-lg font-bold")}>
        Expected Delivery: 2023
        </Text>
        <Divider color="white" />
     </View>

     <View style={tw("mx-auto pb-5")}>
     <Text style={tw("text-base text-center text-white font-bold mt-5")}>Address</Text>
     <Text style={tw("text-sm text-center text-white")}>16C GJC</Text>
     <Text style={tw("text-sm text-center italic text-white")}>Shipping Cost: $20</Text>
    </View>
    </View>

    <Divider color="white"/>
    <View style={tw("p-5")}>
    <View style={tw("flex-row justify-between items-center")}>
            <Text style={tw("text-sm italic text-white")}>Brogi</Text>
            <Text style={tw("text-white text-xl")}>4</Text>
    </View>
    </View>
    <MapView
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
    style={[tw("w-full"), { height: 200 }]}>
        <Marker
        coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
        }}
        title="Delivery Location"
        description="This is the delivery location"
        identifier="desination"
        />
    </MapView>
    </Card>
  )
}

export default DeliveryCard