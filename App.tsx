import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomersScreen from './screens/CustomersScreen';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloProvider} from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:5001/api/independent-billygoat',
//   cache: new InMemoryCache(),
// });

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    
    <TailwindProvider utilities={utilities}>
      {/* <ApolloProvider client={client}> */}
   <NavigationContainer>
    <RootNavigator/>
   </NavigationContainer>
   {/* </ApolloProvider> */}
   </TailwindProvider>
  );
}
