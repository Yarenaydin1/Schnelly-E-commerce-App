import React from "react";
import { FlatList, Image, View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const banners = [
  
  require("../../../assets/bannerr.jpg"),
  require("../../../assets/snack.jpg"),
  require("../../../assets/popcorn.jpg"),
  
];


function index() {
  return (
    <FlatList
      data={banners}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.bannerContainer}>
          <Image source={item} style={styles.banner} />
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}

const styles = StyleSheet.create({
  bannerContainer: {

  },
  banner: {
    width: width  , // responsive olarak tam ekran genişliğine yakın bir değer
    height:260,
    resizeMode: "cover",
   

  },
});

export default index;
