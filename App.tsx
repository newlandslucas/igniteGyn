import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider} from 'native-base';
import { Text, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import { Signin } from './src/screens/Signin';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Signin /> : <Loading />}
      <StatusBar style="light" translucent backgroundColor='transparent'/>
    </NativeBaseProvider>
  );
}
