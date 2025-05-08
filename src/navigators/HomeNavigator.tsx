import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { Entypo } from '@expo/vector-icons';
import CartScreen from '../screens/CartScreen';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Product } from '../models';
import { useState, useLayoutEffect } from 'react';
import { clearCart } from '../redux/cartSlice';



const Stack = createStackNavigator();
const { width } = Dimensions.get('window');



function MyStack() {
  const dispatch = useDispatch();
  const totalAmountFromRedux = useSelector((state: RootState) => state.cart.totalAmount);
  const [totalAmount, setTotalAmount] = useState(totalAmountFromRedux);
  useLayoutEffect(() => {
    setTotalAmount(totalAmountFromRedux);
  }, [totalAmountFromRedux]);
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: '#195b94' },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>schnelly</Text>
          ),
        }}
      />

<Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#195b94' },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Products</Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CartScreen')}
              style={{
                width: width * 0.23,
                height: 33,
                marginRight: width * 0.03,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: '#faf3f5',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Entypo style={{ padding: 7 }} name="shopping-cart" size={17} color="#ee0e51" />
              <View style={{ height: 33, width: 2, backgroundColor: '#a7bcb9' }} />
              <View style={{ paddingEnd: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 13, color: 'black' }}>
                  ${totalAmount.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />


      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen as React.ComponentType<any>} 
        initialParams={{ product: {} as Product }}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#195b94' },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }}>
              <Entypo name="cross" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Product Details</Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Entypo name="heart" size={25} color="#124169" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#195b94' },
         
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>My Cart</Text>
          ),

          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Entypo name="cross" size={26} color="white" style={{ paddingLeft: 12 }} />

            </TouchableOpacity>
          ),

          headerRight: ()=> (
            <TouchableOpacity onPress={() => dispatch(clearCart())}> 
              <Ionicons name="trash" size={21} color="white" style={{ paddingRight: 12 }} />
            </TouchableOpacity>
          )
        
        })}
      />
    </Stack.Navigator>
  );
}

export default MyStack;