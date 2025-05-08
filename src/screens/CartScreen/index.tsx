import React from 'react'
import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/CartItem';
import ProductItem from '../../components/ProductItem';
import productsSchnelly from '../../../assets/productsSchnelly';


const { width, height } = Dimensions.get('window');

function index({route} : {route:any}) {
  // Redux'tan sepet verilerini almak
  const cartItems = useSelector((state: any) => state.cart.items) || [];
console.log("route parameter :", route.params)
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);
  console.log("Cart Items:", cartItems);
console.log("Total Amount:", totalAmount);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Sepet Ürünleri Listesi */}
        <FlatList
          style={{}}
          data={cartItems || []}

          renderItem={({ item }) => <CartItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
        
        <Text style={{ padding: 15, fontWeight: '600', color: '#475053' }}>You May Also Like</Text>
        
        {/* Önerilen Ürünler */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#f6f6f6' }}>
          {/* Burada önerilen ürünleri gösterebilirsiniz */}
          {productsSchnelly.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </View>
      
      {/* Sepet Alt Alanı */}
      <View style={{
        height: height * 0.10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: '5%', backgroundColor: 'white', position: 'absolute', width: '100%', bottom: 0
      }}>
        <TouchableOpacity
          style={{
            height: height * 0.05,
            flex: 3,
            backgroundColor: '#ee0e51',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
          }}
          onPress={() => alert('Proceeding to checkout')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
        
        {/* Toplam Fiyat */}
        <View style={{
          flex: 1,
          backgroundColor: '#ffe9e3',
          height: height * 0.05,
          justifyContent: 'center',
          marginTop: -10,
          alignItems: 'center',
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8
        }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
  ${totalAmount ? totalAmount.toFixed(2) : '0.00'}
</Text>

        </View>
      </View>
    </View>
  );
}

export default index;
