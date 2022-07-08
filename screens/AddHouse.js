import React, {useState} from  'react'
import {View,Text,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import{Input} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';

export default function AddHouse({route, navigation}){
  const {PhoneNumber} = route.params;
  const [HouseNumber, setHouseNumber] = useState("");
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Bedrooms, setBedrooms] = useState("");
  const [Description, setDescription] = useState("");
  const [Address, setAddress] = useState("");
  const [MonthlyFee, setMonthlyFee] = useState("");
  const [ListedBy, setListedBy] = useState("");


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  var url="http://127.0.0.1/lab/kiray-api/getbyphone.php";
    var header={
        'Accept':'application/json',
        'Content-Type':'application/json'
    };
    var Data={
    PhoneNumber: PhoneNumber
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
        
        setListedBy(response[0].ID);
    })
  .catch((error)=>{
    alert("error"+error);
  })

  return(
    <ScrollView style={styles.container}>
    <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20,paddingBottom:15,color:'teal'}}>Enter property details</Text>
    <View>
    <Input
    onChangeText={(value)=>setHouseNumber(value)}
    leftIcon={
      <Icon
      name='hashtag'
      size={18}
      color='teal'
      />
    }
    label='House Number'
    
/>
    </View>


  <View>
    <Input
    onChangeText={(value)=>{setName(value)}} 
    leftIcon={
      <Icon
      name='pencil'
      size={18}
      color='teal'
      />
    }
    label='Name'
    />
    </View>

      <View>
    <Input 
    onChangeText={(value)=>{setBedrooms(value)}}
    leftIcon={
      <Icon
      name='bed'
      size={18}
      color='teal'
      />
    }
    label='Number of Bedrooms'
    />
    </View>
       <View>
    <Input 
    onChangeText={(value)=>{setDescription(value)}}
    leftIcon={
      
      <Icon
      
      name='question'
      size={18}
      color='teal'
      />
    }
    label='Description'
    />
    </View>
    <View>
    <Input
    onChangeText={(value)=>{setAddress(value)}}
    leftIcon={
      
      <Icon
      name='map-pin'
      size={18}
      color='teal'
      />
    }
    label='Address'
/>
    </View>

    <View>
    <Input 
    onChangeText={(value)=>{setMonthlyFee(value)}}
    leftIcon={
      <Icon
      name='dollar'
      size={18}
      color='teal'
      />
    }
    label='Monthly Fee'
     />
    </View>

    <View>
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity   onPress={pickImage} >
      <View style={styles.buttonImage}>
      <Text style={styles.btnTextImg}>Select an image </Text>
      </View>
      </TouchableOpacity>
    </View>    
    </View>
<TouchableOpacity onPress={()=>{
  fetch('http://127.0.0.1/lab/kiray-api/addhouse.php', 
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            HouseNumber: HouseNumber,
            Name: Name,
            Image: Image,
            Bedrooms: Bedrooms,
            Description: Description,
            Address: Address,
            MonthlyFee: MonthlyFee,
            ListedBy: ListedBy
        })
    });
    navigation.navigate('HomeScreen');
    
}}>
<View style={styles.button}>
<Text style={styles.btnText}>Submit</Text>
</View>
</TouchableOpacity>
</ScrollView>
  )
}
const styles= StyleSheet.create({
  container:{
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'grey',
    padding:15,
    margin:20,
    height: '100%'
  },
  button:{
    backgroundColor:'teal',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    padding:10
      },
      btnText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
      },
      buttonImage:{
        backgroundColor:'teal',
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:25,
        paddingRight:25
      
          },
          btnTextImg:{
            color:'white',
            fontWeight:'bold',
            alignSelf:'center'
          }
})