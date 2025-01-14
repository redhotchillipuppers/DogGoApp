import { registerRootComponent } from 'expo';
import { Text, View } from 'react-native';

const Placeholder = () => (
  <View>
    <Text>App Loaded!</Text>
  </View>
);

registerRootComponent(Placeholder);


//import { registerRootComponent } from 'expo';

//import App from './app/Login'; // Adjust path to the Login file

//registerRootComponent(App);