import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ProductItem({ product, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{product.name}</Text>
      <Text style={{ color: 'gray' }}>${product.price}</Text>
    </TouchableOpacity>
  );
}
