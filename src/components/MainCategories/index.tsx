import React, {useState} from 'react'
import {View, StyleSheet} from "react-native"
import categoriesSchnelly from '../../../assets/categoriesSchnelly/categoriesSchnelly'
import {Category } from "../../models"
import CategoryItem  from "../../components/CategoryItem"

function index() {
 
const [categories, setcategories] = useState<Category[]>(categoriesSchnelly)

  return (
    <View>
        <View style={styles.listCon}>
          {
          
          categories.map((item) => (

            <CategoryItem key={item.id} item={item}/>

          ))
          
          
          }

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    listCon:{
      marginTop:15,
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
    }
})
export default index