import *as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Navigasi/Profile';
import Setting from './Navigasi/Setting';
import Default from './Navigasi/Default';
import About from './Navigasi/About';
import Dwi from './Navigasi/Dwi';
import Home from './Navigasi/Home';

function HomeScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Dwi" component={Dwi}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Default" component={Default}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;