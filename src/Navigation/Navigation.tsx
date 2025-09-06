import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import React,{FC} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screen/SplashScreen';
import LoginScreen from '../Screen/LoginScreen';

const Navigation:FC = () => {

    const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})