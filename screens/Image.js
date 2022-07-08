//install this dependency (expo install expo-image-picker )
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform ,TouchableOpacity,Text,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Images() {
  const [Image, setImage] = useState(null);

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity   onPress={pickImage} >
      <View style={styles.button}>
      <Text style={styles.btnText}>
     Select an image
      </Text>
      </View>
      </TouchableOpacity>
      <View >
         {Image && <Image source={{ uri: Image }} style={{ width: 200, height: 200 }} />}
      </View>
    </View>
  );
}
      
const styles= StyleSheet.create({

    button:{
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
      btnText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
      }
  
})