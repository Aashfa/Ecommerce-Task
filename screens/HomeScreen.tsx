import React from 'react';
import { View, FlatList } from 'react-native';
import { PRODUCTS } from '../data/product';
import ProductItem from '../app/ProductItem';

type Product = typeof PRODUCTS[number];

const HomeScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem
      product={item}
      onPress={() => navigation.navigate('Details', { product: item })}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;