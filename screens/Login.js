import React, {useState} from  'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import{Input} from 'react-native-elements'

export default function Login({navigation}){
    const [FirstName, setFirstName] = useState(null)
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Password, setPassword] = useState("");

    return(
    <View style={styles.container}>
     <View>
    <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:24,paddingBottom:15}}>
    Login
    </Text>
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
    secureTextEntry={true}
    placeholder='Enter your password'/>
    </View>
<View>
<TouchableOpacity onPress={()=>{
    var url="http://127.0.0.1/lab/kiray-api/login.php";
    var header={
        'Accept':'application/json',
        'Content-Type':'application/json'
    };
    var Data={
    PhoneNumber: PhoneNumber,
    Password: Password
    };
    fetch(
    url,{
      method:'POST',
      headers:header,
      body:JSON.stringify(Data)
    }
    )
    .then((response)=>response.json())
    .then((response)=>{
        setFirstName(response[0].FirstName);
    })
  .catch((error)=>{
    alert("error"+error);
  })
    if(FirstName != null){
        navigation.navigate('Add House', {PhoneNumber: PhoneNumber})
    }
    else{
        alert('Wrong phone number or password');
    }
}}>
<View style={styles.button}>
<Text style={styles.btnText}>Login</Text>
</View>
</TouchableOpacity>
</View>
<TouchableOpacity style={{alignSelf:"left"}} onPress={()=>{navigation.navigate('Signup')}} >
    <View>
    <Text style={styles.btnText2}> No account?</Text>
    </View>
    </TouchableOpacity>

    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'grey',
    padding:20
  },
  button:{
    backgroundColor:'teal',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    padding:10
      },
      btnText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
      },
      btnText2:{
        marginTop:10,
        marginLeft:5,
        color:'blue'
      }
})