import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { ProductType } from './ProductToBuy';
import { StateType } from '../../store/reducer';
import { connect } from 'react-redux';

export type BoughtProductTypeDTO = {
  product: ProductType;
};

const BoughtProduct = ({ product }: BoughtProductTypeDTO) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>
        {`${product.boughtOptions?.amount || product.amount} ${product.units}`}
      </Text>
      <Text style={styles.text}>
        {product.boughtOptions?.cost ? product.boughtOptions?.cost + '$' : ''}
      </Text>
    </View>
  );
};
const mapStateToProps = (state: StateType) => ({
  products: state.products.filter((prod) => !!prod.boughtOptions),
});

export default connect(mapStateToProps)(BoughtProduct);

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
