import React, { Dispatch } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { StateType, actions } from '../../store/reducer';
import { Action } from 'redux';
import { BoughtProductTypeDTO } from './BoughtProduct';

export type ProductType = {
  name: string;
  count: string;
  id: string;
};

export type ProductTypeDTO = {
  name: string;
  count: string;
  id: any;
};

type Props = {
  name: string;
  count: string;
  id: string;
  addBoughtProduct(prod: BoughtProductTypeDTO): void;
  removeToBuyProduct(id: string): void;
};

const ProductToBuy = ({
  name,
  count,
  id,
  addBoughtProduct,
  removeToBuyProduct,
}: Props) => {
  const onPress = () => {
    addBoughtProduct({ name, count, cost: 3 });
    removeToBuyProduct(id);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{count}</Text>
      </View>
    </TouchableOpacity>
  );
};
const mapStateToProps = (state: StateType) => ({
  productsToBuy: state.products,
  boughtProducts: state.boughtProducts,
  amount: state.boughtProducts.reduce((acc, cur) => acc + cur.cost, 0),
});
const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  addBoughtProduct: (prod: BoughtProductTypeDTO) =>
    dispatch(actions.addBoughtProduct(prod)),

  removeToBuyProduct: (id: string) => dispatch(actions.deleteToBuyProduct(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductToBuy);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
});
