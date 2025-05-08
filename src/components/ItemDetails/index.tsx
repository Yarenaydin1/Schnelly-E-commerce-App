import React, {useState} from 'react'
import {Text, View} from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
function index() {

    const [details, setDetails] = useState<string[]>(
        ["Creamy vanilla ice cream coated in thick Belgian chocolate. Rich, indulgent, and satisfying in every bite.",
            "Ingredients", "Nutritional value", "Usage","Additional Information"
        ]
    )

    const TextComponent=( {detail, index}: {detail:string, index:number} ) => {
        return (

            <View style={{paddingVertical:12, paddingHorizontal:16, flexDirection:'row',alignItems:'center',justifyContent:'space-between',
            borderBottomWidth:index=== details.length -1 ? 0:0, borderBottomColor:'lightgray'}}>
                <Text style={{color:index===0 ? 'black' :'#475053',
                     fontSize:14, fontWeight:'400'}}>{detail}</Text>
                     {index != 0 && <AntDesign name="down" size={20} color="#475053" />}
            </View>
        )
    }
  return (
   <View style={{backgroundColor:'white'}}>
    {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item}/>
    ))}
   </View>
  )
}

export default index