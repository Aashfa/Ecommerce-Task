import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = width * 0.1; // 50% of screen width (more compact)

const DetailsScreen = ({ route }: any) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Compact image container */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      
      {/* Product Info - moved closer to image */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10, // Small top padding
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    marginBottom: 12, // Reduced margin
    padding: 16, // Inner padding
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    paddingHorizontal: 16, // Side padding only
  },
  name: {
    fontSize: 20, // Slightly smaller
    fontWeight: 'bold',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2ecc71',
    marginBottom: 12,
  },
  description: {
    fontSize: 15, // Slightly smaller
    lineHeight: 22,
    color: '#555',
  },
});

export default DetailsScreen;