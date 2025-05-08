import React from 'react';
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Category } from '../../models';
import { RootStackParamList } from '../../models';

const { width } = Dimensions.get('window');

type CategoryItemProps = {
  item: Category;
};

function index({ item }: CategoryItemProps) {
  // useNavigation'a tür belirtiyoruz
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
      style={{
        width: width * 0.25,
        height: width * 0.25,
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: 'black', fontWeight: '500' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
