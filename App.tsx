import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomersScreen from './screens/CustomersScreen';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore - TilwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
   <CustomersScreen />
   </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
