import React, {useState} from 'react'
  import {View, Text, Dimensions} from "react-native"
import { ScrollView } from 'react-native-gesture-handler'

import { Category } from '../../models'
import categoriesSchnelly from '../../../assets/categoriesSchnelly/categoriesSchnelly'

const {height,width} = Dimensions.get('window')

const CategoryBox = ({item, active}: {item:Category, active:Category}) => {
  return(
    <View style={[{paddingHorizontal:9, flexDirection:'row', alignItems:'center'}, item.name==active.name && {borderBottomColor:'#ee0e51', borderBottomWidth:2.5}]}>
      <Text style={{fontSize:14, color:'white', fontWeight:'500'}}>{item.name}</Text>
    </View>
  )
}
function index({category}:{category:Category}) {
  const [categories, setCategories] = useState<Category[]>(categoriesSchnelly)
  return (
 
 
    <ScrollView style={{width:'100%' , backgroundColor:'#317ab9' ,height:height * 0.065 , marginTop:-5}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
{categories.map((item) => (
  <CategoryBox key ={item.id} item={item} active={category}/>
))}
    </ScrollView>

  )
}

export default index