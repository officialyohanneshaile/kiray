import React from  'react'
import {View,Text,TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native';


export default function About(){
  return(
 <View style={styles.container}>
 <Text style={styles.title} > MEET OUR TEAM</Text>
<View style={styles.list}>
 <View ><Text style={styles.listTxt}> Yohannes Aklilu</Text></View>
 <View><Text style={styles.listTxt}> Zekaryas Sebseb</Text></View>
 <View><Text style={styles.listTxt}> Zuber Shemsu</Text></View>
 <View><Text style={styles.listTxt}> Tsinuel Ephrem</Text></View>
 <View><Text style={styles.listTxt}> Yohanes Assefa</Text></View>
 </View>
 </View>
  )
}
const styles= StyleSheet.create({
  container:{
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'grey',
    width:'100%',
    height:'100%'
  },
title:{
  color:'#0E3146',
  fontWeight:'bold',
  alignSelf:'center',
  fontSize:38,
  top: 50,
},
list:{
  alignItems:'center',
  marginTop:12, 
  marginBottom:12
},
listTxt:{
  top: 65,
  color:'#0E3146',
  fontWeight:'bold',
  fontSize: 24
  
}
})