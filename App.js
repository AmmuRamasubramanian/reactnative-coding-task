import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottomstack from './Navigations/Bottomstack';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Bottomstack/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
