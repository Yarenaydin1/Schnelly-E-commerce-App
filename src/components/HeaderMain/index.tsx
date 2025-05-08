import React from 'react'
import {View, Text,Image} from "react-native";
import styles from "./styles"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

function index() {
  return (
    
    <View style={styles.headerMain}>
        <View style={styles.headerFirst}>
        <FontAwesome name="home" size={25} color="#ee0e51" />

       <View style={styles.headerFirstView}>
        <Text style={styles.textHome}>Home </Text>
        <Text style={styles.textAdr}>18361 91 Ave NW, Edmonton, AB T5T...</Text>
        <AntDesign name="right" size={20} color="grey"  />
       </View>
       <View style={styles.headerSec}>
        <Text style={{fontSize:10, fontWeight:'bold', color:'white'}}>ETA</Text>
        <Text  style={{fontSize:16, fontWeight:'bold', color:'white'}}>13

          <Text style={{fontSize:14,color:'white', }}>min </Text>
         
          </Text>
       </View>
        </View>
        
        <View>
                
            </View>
    </View>
  )
}

export default index