import React from 'react'
import { View, Text } from 'react-native'
import ProductItem from '../ProductItem'
import products from '../../../assets/productsSchnelly'
function index() {
  return (
 <View>


<View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
    {products.slice(0,2).map((item) => (
            <ProductItem key={item.id} item={item}/>
    ))}

    

</View>

<Text style={{color:'grey', fontWeight:'bold', padding:14 }}>Stick</Text>
 <View style={{flexDirection:'row', flexWrap:'wrap',alignItems:'center', flex:1, backgroundColor:'white', paddingVertical:10}}>

{products.slice(2).map((item) => (
       <ProductItem key={item.id} item={item}/>
))}
 </View>


 </View>
  )
}

export default index