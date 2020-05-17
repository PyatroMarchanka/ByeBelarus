import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { ProductTypeDTO } from './ProductToBuy';
export type BoughtProductType = {
  name: string;
  count: string;
  id: string;
  cost: number;
};

export type BoughtProductTypeDTO = {
  name: string;
  count: string;
  cost: number;
};
const BoughtProduct = ({ name, count, cost }: BoughtProductTypeDTO) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text}>{cost}$</Text>
    </View>
  );
};

export default BoughtProduct;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primarySelected,
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
  },
});
