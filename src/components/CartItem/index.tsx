import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { Product } from '../../models';

type CartItemProps = {
    product: Product;
};

const { width, height } = Dimensions.get('window');

function index({ product }: CartItemProps) {
    const dispatch = useDispatch();

    // Fiyatı kontrol et: discountedPrice varsa onu al, yoksa normal price'ı al
    const displayPrice = product.discountedPrice || product.price;

    return (
        <View style={{ 
            height: height * 0.12, 
            backgroundColor: '#faf9f9', 
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingHorizontal: width * 0.05, 
            justifyContent: 'space-between', 
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            elevation: 4, 
        }}>
            {/* Ürün Görseli ve Bilgileri */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                    style={{ width: height * 0.1, height: height * 0.11 }} 
                    source={{ uri: product.image }} 
                />
                <View style={{ marginLeft: 18 }}>
                    <Text style={{ fontWeight: '500', fontSize: 13, maxWidth: width * 0.40 }}>
                        {product.name}
                    </Text>
                    <Text style={{ fontSize: 12.5, marginTop: 3, color: '#393e46' }}>
                       Quantity: {product.quantity}
                    </Text>
                    <Text style={{ fontSize: 12.5, marginTop: 6, fontWeight: '600', color: '#ee0e51' }}>
                        ${displayPrice}
                    </Text>
                </View>
            </View>

            {/* Artır/Azalt Bölümü */}
            <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                width: width * 0.22, 
                height: height * 0.038, 
                borderColor: '#1c2929', 
                borderWidth: 0.2, 
                padding: 2, 
                justifyContent: 'space-around',
                borderRadius: 10,
            }}>
                {/* Miktar Azalt */}
                <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product.id))}>
                    <Text style={{ color: 'black', fontSize: 18, paddingHorizontal: 10 }}>
                        -
                    </Text>
                </TouchableOpacity>

                {/* Miktar Göster */}
                <View style={{ 
                    backgroundColor: '#ee0e51', 
                    width: width * 0.07,
                    height: height * 0.038,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
                        {product.quantity}
                    </Text>
                </View>

                {/* Miktar Artır */}
                <TouchableOpacity onPress={() => dispatch(increaseQuantity(product.id))}>
                    <Text style={{ color: 'black', fontSize: 18, paddingHorizontal: 10 }}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default index;
