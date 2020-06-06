import React, { Dispatch } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { ProductType } from './ProductToBuy';
import { StateType, actions } from '../../store/reducer';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type BoughtProductTypeDTO = {
  product: ProductType;
  returnProduct: Function;
};

const BoughtProduct = ({ product, returnProduct }: BoughtProductTypeDTO) => {
  return (
    <TouchableOpacity
      onLongPress={() => {
        returnProduct(product.id);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>
          {`${product.boughtOptions?.amount || product.amount} ${
            product.units
          }`}
        </Text>
        <Text style={styles.text}>
          {product.boughtOptions?.cost
            ? product.boughtOptions?.cost + 'р.'
            : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const mapStateToProps = (state: StateType) => ({
  products: state.products.filter((prod) => !!prod.boughtOptions),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  returnProduct: (id: string) => {
    dispatch(actions.returnProduct(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoughtProduct);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primarySelected,
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
});
