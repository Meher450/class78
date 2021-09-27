import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HomeScreen from "./Screens/HomeScreen";
import IssLocationScreen from "./Screens/IssLocationScreen";
import MeterorScreen from "./Screens/MeterorScreen"
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator()

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRoutName="Home" screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="IssLocationScreen" component={IssLocationScreen}/>
      <Stack.Screen name="MeterorScreen" component={MeterorScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
