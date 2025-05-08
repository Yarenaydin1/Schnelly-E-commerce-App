import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native'; 
import { RootStackParamList } from '../../models'; 
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import ItemDetails from '../../components/ItemDetails';
import CardButton from '../../components/CardButton';
import { StackNavigationProp } from '@react-navigation/stack';


// props türü
type ProductDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

const index: React.FC<ProductDetailsScreenProps> = ({ route, navigation }) => {
  const [product, setProduct] = useState<Product | null>(null); 
 
  useEffect(() => {
    setProduct(route.params.product); 
  }, [route.params.product]);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox 
          price={product.price} 
          discountedPrice={product.discountedPrice}
          name={product.name} 
          quantity={product.quantity} 
          unit={product.unit}
        />
        <Text style={{ paddingHorizontal: 10, paddingVertical: 14, color: '#ee0e51', fontWeight: '600' }}>
          Details
        </Text>
        <ItemDetails />
      </ScrollView>
      <CardButton  product={product}/>
    </View>
  );
}
export default index