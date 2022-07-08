import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, Image, View,  TouchableOpacity, FlatList } from 'react-native';
import Separator from '../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome'



export default function Home({navigation}) {
  const [data, setData]=useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("http://127.0.0.1/lab/kiray-api/allhouses.php");
    const data = await resp.json();
    setData(data);
    setLoading(false);

  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.parent}>
    <View style={styles.locationView}>
                    <Text style={styles.locationTextHeader}>Location</Text>
                    <Text style={styles.location}>Addis Ababa, ETH </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <View style={styles.addBtn}>
                        <Text><Icon
                            name='plus'
                            size={22}/>
                        </Text>
                    </View>
                </TouchableOpacity>
                        
                <View style={styles.motto}>
                        <Text style={styles.mottoText}>Discover Best Rental Properties</Text>
                    </View><View style={styles.optionsView}>
                        <TouchableOpacity>
                            <View style={styles.option}>
                                <Text style={styles.optionText}>Flats</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.option}>
                                <Text style={styles.optionText}>Condos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.option}>
                                <Text style={styles.optionText}>Apartments</Text>
                            </View>
                        </TouchableOpacity>
                    </View><View style={styles.bestView}>
                        <Text style={styles.bestText}>Best For You</Text>
                    </View>
      {loading && <Text style={{color: 'black'}}>Loading...</Text>}
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
                <><View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri: item.Image }} />
                        <View style={styles.description}>
                            <View style={styles.textView}>
                                <Text style={styles.name}>{item.Name}</Text>
                                <Text style={styles.descriptionText}>{item.Address}</Text>
                                <Text style={styles.descriptionText}>{item.Bedrooms} Bedrooms</Text>
                            </View>
                        </View>
                    </View><View style={styles.detailBtnView}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Details', {item: item})}}>
                            <View style={styles.detailBtn}>
                                <Text style={styles.detailBtnText}>See Details</Text>
                            </View>
                        </TouchableOpacity>
                    </View></>

            );
          }}
          keyExtractor={(item) => item.HouseNumber.toString()}
          ItemSeparatorComponent={Separator}
          horizontal = {true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    parent: {
        top: 45,
        flex: 1
    },
    locationView:{
        position: 'absolute',
        left: 35,
    },
    addBtn:{
        left: 325
    },
    locationTextHeader:{
        width: 52,
        height: 16,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: -0.03,
        color: '#0F2F448F'
    },
    location:{
        height: 18,
        width: 300,
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: -0.03,
        textAlign: 'left'
    },
    motto:{
        height: 60,
        width: 175,
        left: 35,
        top: 84
    },
    mottoText:{
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 30,
        letterSpacing: -0.03,
        color: '#0F2F44'
    },
    optionsView:{
        top: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10, 
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    option:{
        width: 90,
        height: 42,
        backgroundColor: '#EAF1FF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    bestView:{
        position: 'absolute',
        width: 90,
        height: 20,
        left: 35,
        top: 236
    },
    bestText:{
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.03,
        color: '#0E3146'
    },
    imageView:{
        left: 35,
        top: 130,
    },
    image:{
        position: 'absolute',
        width: 305,
        height: 286.7,
        backgroundColor: '#C4C4C4',
        borderRadius: 21    
    },
    description:{
        position: 'absolute',
        width: 305,
        height: 82.78,
        top: 205,
        backgroundColor: '#0E3146'
    },
    textView:{
        position: 'absolute',
        left: 20,
        top: 20,
    },
    name:{ 
        width: 100,
        height: 20,
        fontStyle: 'normal',   
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.03,
        color: '#FFFFFF'
    },
    descriptionText:{
        width: 300,
        height: 16,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: -0.03,
        color: '#FFFFFF',
        opacity: 0.42
    },
    detailBtnView:{
        top: 450,
        left: 35,
    },
    detailBtn:{
        backgroundColor: '#0E3146',
        alignItems: 'center',
        justifyContent: 'center',
        width: 305,
        height: 40,
        borderRadius: 21
    },
    detailBtnText:{
        color: '#FFFFFF',
        fontSize: 23,
        fontWeight: 'bold'
    }

}
);