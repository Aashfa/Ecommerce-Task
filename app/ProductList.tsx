import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { 
    id: '1', 
    name: 'Wireless Earbuds', 
    price: '$49.99', 
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    id: '2', 
    name: 'Smart Watch', 
    price: '$129.99', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    id: '3', 
    name: 'Bluetooth Speaker', 
    price: '$59.99', 
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    id: '4', 
    name: 'Phone Case', 
    price: '$19.99', 
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    id: '5', 
    name: 'Laptop Stand', 
    price: '$29.99', 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    id: '6', 
    name: 'USB-C Cable', 
    price: '$9.99', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' 
  },
];

const ProductList = () => {
  const renderProduct = React.useCallback(
    ({ item }: { item: Product }) => (
      <TouchableOpacity
        style={styles.productCard}
        activeOpacity={0.7}
        onPress={() => console.log('Pressed:', item.name)}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="cover"
          defaultSource={require('../assets/images/favicon.png')} // Add your local placeholder
          onError={() => console.log('Image failed to load:', item.image)}
        />
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={<Text style={styles.header}>Featured Products</Text>}
        ListFooterComponent={<Text style={styles.footer}>© {new Date().getFullYear()} Our Store</Text>}
        onEndReached={() => console.log('Reached end of list')}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#2c3e50',
  },
  footer: {
    fontSize: 14,
    color: '#7f8c8d',
    marginVertical: 24,
    textAlign: 'center',
  },
  productCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    maxWidth: '48%',
    minHeight: 220,
  },
  productImage: {
    width: '100%',
    height: 120,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    color: '#34495e',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27ae60',
  },
});

export default ProductList;