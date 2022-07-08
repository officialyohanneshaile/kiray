import React, {useState} from  'react'
import {View,Text, StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import{Input} from 'react-native-elements'

export default function Signup({navigation}){
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Password, setPassword] = useState("")

  return(
    <View style={styles.container}>
    <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20,paddingBottom:15}}>
    Enter your details
    </Text>
    <View>
    <Input 
    onChangeText={(value)=>setFirstName(value)}
    leftIcon={
      <Icon
      name='user'
      size={18}
      color='grey'
      />
    }
    label='First Name'
    placeholder='Enter your first name'/>
    </View>
    <View>
    <Input
    onChangeText={(value)=>setLastName(value)}
    leftIcon={
      <Icon
      name='user'
      size={18}
      color='grey'
      />
    }
    label='Last Name'
     placeholder='Enter your second name'/>
    </View>
    <View>
    
    <Input 
    onChangeText={(value)=>setPhoneNumber(value)}
    leftIcon={
      <Icon
      name='phone'
      size={18}
      color='grey'
      />
    }
    label='Phone Number'
     placeholder='Enter Your Number'/>
    </View>
    <View>
       <Input 
       onChangeText={(value)=>setPassword(value)}
    leftIcon={
      <Icon
      name='lock'
      size={18}
      color='grey'
      />
    }
    label='Password'
    secureTextEntry = {true}
    placeholder='Enter your password'/>
    </View>
<View>
<Button title='Sign up' onPress={()=>{
    fetch('http://127.0.0.1/lab/kiray-api/signup.php', 
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FirstName: FirstName,
            LastName: LastName,
            PhoneNumber: PhoneNumber,
            Password: Password
        })
    });
    navigation.navigate('Add House', {PhoneNumber: PhoneNumber});
}}/>
</View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'grey',
    padding:20
  }
})
