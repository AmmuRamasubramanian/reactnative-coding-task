import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottomstack from './Navigations/Bottomstack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { PortalProvider } from '@gorhom/portal';

export default function App() {

  const [loaded, error]=useFonts({
    inter_reg:Inter_400Regular,
    inter_semibold:Inter_600SemiBold,
    inter_medium:Inter_500Medium
  })

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{flex:1}}>
      <PortalProvider>
      <NavigationContainer>
        <Bottomstack/>
      </NavigationContainer>
      </PortalProvider>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
