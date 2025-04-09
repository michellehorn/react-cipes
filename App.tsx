import { Slot } from 'expo-router';


import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'SplashModule.internalPreventAutoHideAsync is not a function',
]);

export default function App() {
  return <Slot />;
}
