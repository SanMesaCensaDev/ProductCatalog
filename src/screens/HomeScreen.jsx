import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from  '@react-navigation/native'
import products from '../data/products'

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex:1, padding: 20}}>
            <FlatList
                data={products}
                keyExtracto={(item) => item.id.toString()}
                renderItem={({ item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product:item })}>
                        <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

