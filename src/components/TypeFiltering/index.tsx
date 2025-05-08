import React, { useState } from 'react'
import {View, Text, ScrollView, Dimensions, TouchableOpacity} from "react-native"

const {height, width} = Dimensions.get('window')

const TypeBox = ({setCat,item, active} : {setCat:any ,item:String , active:String}) => {
    return(

        <TouchableOpacity onPress={() => setCat(item)} style={[{flexDirection:'row', alignItems:'center', paddingHorizontal:10 , borderRadius:6, height:height*0.044, marginRight:12 }, item == active ? {backgroundColor:'#195b94'}:{borderColor:'#ececec', borderWidth:1}]}>
            <Text style={[{fontSize:14,fontWeight:"600" ,color:'#0c4b81' }, item ==active && {color:'white'}]}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}


function index() {

const [category, setCategory] = useState<String>("Tub")

  return (
   
    <ScrollView style={{width:'100%',  height: height*0.072, flexDirection:'row', paddingVertical:height*0.014,paddingHorizontal:10, backgroundColor:'white' , borderBottomColor:'#e7dddd', borderBottomWidth:1 }} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
     
     {["Tub", "Stick","Sandwich","Cup","Bar","Cone"].map((item => (

     <TypeBox setCat={setCategory} item={item} active={category}/>
     
     )))}
    </ScrollView>
  )
}

export default index