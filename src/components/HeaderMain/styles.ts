import {StyleSheet, Dimensions} from "react-native"

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
headerMain:{
    height: height * 0.064,
    backgroundColor:'#ee0e51',
},

headerFirst:{
    backgroundColor:'white',
    width:'83%',
    height:height * 0.064,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'4%',
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
},
headerFirstView:{
    flexDirection:'row',
    alignItems:'center',
    borderLeftWidth:2,
    paddingLeft:5,
    marginLeft:5,
    borderLeftColor:'#ecf0f1',

},
textHome:{
    fontWeight:'600',
    marginLeft:5,
    fontSize:16,
},
textAdr:{
    marginLeft:5,
    fontSize:11.5,
    color:'#9ba6a5'
},
headerSec:{
    width:'20%',
    //backgroundColor:'red',
    height:height * 0.064,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:12,
}
})
export default styles;