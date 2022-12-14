import { SafeAreaView, StatusBar } from 'react-native';
import { Home, Login } from './src/views';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' animated={true}/>
      <Login/>
    </SafeAreaView>
  );
}
