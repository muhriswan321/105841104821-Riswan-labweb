// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import Singup from './SingupPage'
import ForgetPassword from './ForgetPasswordPage';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')} /> */}
      <Button title="ke Halaman Singup" onPress={() => navigation.navigate('Singup')} />
      {/* <Button title="Ke Halaman ForgetPassword" onPress={() => navigation.navigate('ForgetPassword')} /> */}
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage}  options={{headerShown: false}}/>
        <Stack.Screen name="Singup" component={Singup}  options={{headerShown: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}  options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;