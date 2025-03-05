import React from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onPress={() => navigation.navigate('ProductDetail', { product: item })} />
        )}
      />
    </View>
  );
}
