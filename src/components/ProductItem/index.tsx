import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product, RootStackParamList } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const { height, width } = Dimensions.get("window");

type ProductItemProps = {
  item: Product;
};

const ProductItem = ({ item }: ProductItemProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { product: item });
      }}
      style={{
        width: width * 0.285,
        marginTop: 12,
        height: height * 0.25,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{ uri: item.image }}
      />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={{ fontSize: 10, color: "#475053", textDecorationLine: "line-through" }}>
          <FontAwesome name="dollar" size={10} color="#475053" /> {item.price}
        </Text>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 12, marginLeft: 5 }}>
          <FontAwesome name="dollar" size={12} color="black" /> {item.discountedPrice}
        </Text>
      </View>
      <Text style={{ fontSize: 12.5, fontWeight: "600", marginTop: 5 }}>{item.name}</Text>
      <Text style={{ color: "#475053", fontSize: 12, fontWeight: "500" }}>{item.quantity} {item.unit}</Text>

      {/* Sepete Ekle Butonu */}
      <TouchableOpacity
        onPress={() => dispatch(addToCart(item))}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
          borderWidth: 0.2,
          borderColor: "grey",
          backgroundColor: "white",
          position: "absolute",
          right: -4,
          top: -3,
          borderRadius: 5,
        }}
      >
        <Entypo name="plus" size={22} color="#ee0e51" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;
