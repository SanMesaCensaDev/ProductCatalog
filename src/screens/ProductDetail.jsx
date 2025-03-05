import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetail({ route }) {
  const { product } = route.params;
  
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{product.name}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{product.description}</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>${product.price}</Text>
    </View>
  );
}
