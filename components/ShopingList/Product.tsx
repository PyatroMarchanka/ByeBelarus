import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export type ProductType = {
  name: string;
  count: string;
  id: string;
};

export type ProductTypeDTO = {
  name: string;
  count: string;
};

const Product = ({ name, count }: ProductTypeDTO) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
});
