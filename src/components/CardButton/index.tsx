import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Product } from '../../models';

type CardButtonProps = {
  product: Product;  // `product` props'u zorunlu
};

const CardButton: React.FC<CardButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));  // Sepete ekleme işlemi
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ee0e51',
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default CardButton;
