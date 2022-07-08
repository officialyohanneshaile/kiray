import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AddHouse from '../screens/AddHouse';

export default function HomeStackScreen(){
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="Details" component={Details}/>
            <HomeStack.Screen name="Login" component={Login}/>
            <HomeStack.Screen name="Signup" component={Signup}/>
            <HomeStack.Screen name="Add House" component={AddHouse}/>
        </HomeStack.Navigator>
    );
    

}