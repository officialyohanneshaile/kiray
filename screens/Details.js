import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


export default function Details({route}){
    const {item} = route.params;
    var ID = item.ListedBy;
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("")

    var url="http://127.0.0.1/lab/kiray-api/getakeray.php";
    var header={
        'Accept':'application/json',
        'Content-Type':'application/json'
    };
    var Data={
    ID: ID
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
        setLastName(response[0].LastName);
        setPhoneNumber(response[0].PhoneNumber);
    })
  .catch((error)=>{
    alert("error"+error);
  })

    return(
        <View style={styles.parent}>
            <Image style={styles.image} source={{uri: item.Image}}/>
            <Text style={styles.name}>{item.Name}</Text>
            <Text style={styles.address}>{item.Address}</Text>
            <Text style={styles.bedrooms}>{item.Bedrooms} Bedrooms</Text>
            <Text style= {styles.akerayName}>{FirstName} {LastName}</Text>
            <Text style= {styles.phone}>{PhoneNumber}</Text>
            <Text style={styles.description}>{item.Description}</Text>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.housePrice}>{item.MonthlyFee} ETB/month</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        flex: 1
    },
    image:{
        position: 'absolute',
        width: 311.51,
        height: 356.04,
        left: 36,
        top: 13.96,
    },
    name:{
        position: 'absolute',
        width: 189,
        height: 23,
        left: 35,
        top: 390,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: -0.03,
        color: '#0F2F44'
    },
    address:{
        position: 'absolute',
        width: 201,
        height: 18,
        left: 35,
        top: 418,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: -0.03,
        color: '#0F2F44'

    },
    bedrooms:{
        position: 'absolute',
        width: 100,
        height: 15,
        left: 35,
        top: 440,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.03,
        color: '#0F2F44',
        opacity: 0.5
    },
    description:{
        position: 'absolute',
        width: 305,
        height: 45,
        left: 35,
        top: 545,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.03,
        color: '#0F2F44'
    },
    price:{
        position: 'absolute',
        width: 36,
        height: 20,
        left: 35,
        top: 590,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.03,
        color: '#0F2F44'
    },
    housePrice:{
        position: 'absolute',
        width: 300,
        height: 30,  
        left: 35,
        top: 610,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 25,
        letterSpacing: -0.03,
        color: '#0F2F44'

    },
    akerayName:{
        position: 'absolute',
        width: 150,
        height: 18,
        left: 35,
        top: 495,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: -0.03,
        color: '#0F2F44'
    },
    phone:{
        position: 'absolute',
        width: 150,
        height: 18,
        left: 35,
        top: 515,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: -0.03,
        color: '#0F2F44'
    }
})