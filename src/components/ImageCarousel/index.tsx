import React, { useState, useRef } from "react";
import { FlatList, Image, Dimensions, View, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

function Index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.30,
        paddingTop: 15,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width * 0.6, height: height * 0.3 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{
              width: width * 0.6,
              height: height * 0.3,
              resizeMode: "stretch",
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.6}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? "#ee0e51" : "#d6d4e0" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default Index;
