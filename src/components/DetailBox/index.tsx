import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text } from 'react-native';

type DetailBoxProps = {
  price: number;
  discountedPrice?: number;
  name: string;
  quantity: number;
  unit: string;
};

export default function index({ price, discountedPrice, name, quantity, unit }: DetailBoxProps) {
  return (
    <View style={{ width: '100%', backgroundColor: 'white', alignItems: 'center' }}>
      {/* Fiyatları aynı ProductItem bileşenindeki gibi göster */}
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        {discountedPrice ? (
          <>
            {/* İndirimli fiyat */}
            <Text style={{ fontSize: 12.5, color: '#475053', textDecorationLine: 'line-through' }}>
              <FontAwesome name="dollar" size={12.5} color="#475053" /> {price}
            </Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 5 }}>
              <FontAwesome name="dollar" size={17} color="black" /> {discountedPrice}
            </Text>
          </>
        ) : (
          <Text style={{ fontSize: 17, color: '#ee0e51', fontWeight: 'bold', margin: 12 }}>
            <FontAwesome name="dollar" size={17} color="#ee0e51" />
            {price}
          </Text>
        )}
      </View>

      <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 7 }}>
        {name}
      </Text>
      <Text style={{ fontWeight: '500', fontSize: 14, color: '#8b8992', marginTop: 5, paddingBottom: 16 }}>
        {quantity} {unit}
      </Text>
    </View>
  );
}
