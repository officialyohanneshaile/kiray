import React, {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import HomeStackScreen from './stackscreens/HomeStackScreen';
import About from './screens/About'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    setTimeout(function(){setVisible(false);},8000)
  })   
  let Splash_Screen_View=(
    <View style={{alignItems:'center',width:'100%',height:'100%',backgroundColor:'white',color:'teal'}}>
    
    <Icon
    name='home'
    size={92}
    color='#0E3146'
    style={{marginTop: 350}} 
    />  
<Text style={{color:'#0E3146',fontWeight:'bold', fontSize:18}}>HOME SWEET HOME</Text>
    </View>
  )

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {(visible===true)?Splash_Screen_View:null}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
        <Tab.Screen name="About" component={About}/>
      </Tab.Navigator>
    </NavigationContainer>   
  );
}

