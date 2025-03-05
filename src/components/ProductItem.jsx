import react from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ProductItem({ product, onPress }) {
    <TouchableOpacity onPress={onPress} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
        <Text style={{ fontSize: 18 }}>{product.name}</Text>
        <Text style={{ color: 'gray' }}>${product.price}</Text>
    </TouchableOpacity>
}

