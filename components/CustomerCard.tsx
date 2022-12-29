import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomersScreenNavigationProp } from '../screens/CustomersScreen';
import { Card } from '@rneui/themed';
import { dummy } from '../graphql/dummy';
import { GET_CUSTOMERS } from '../graphql/queries';

type Props ={
    userId: string;
    name: string;
    email: string;
}
const CustomerCard = ({email, userId, name}: Props) => {
    const {loading, error, orders} = useCustomerOrders(userId);
    const tw = useTailwind();
    const navigation = useNavigation<CustomersScreenNavigationProp>();
  return (
    <View>
      {dummy.map((customer) => () => {(
        <Text>{customer.getCustomers.userId}</Text>
        ) }
    </View>
  )
}

export default CustomerCard