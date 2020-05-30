import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import ToBuyListScreen from './ToBuyList';
import BoughtListScreen from './BoughtList';
import { StateType } from '../store/reducer';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import { TotalAmount } from '../components/ShopingList/TotalAmount';
type Props = {
  productsToBuy: ProductType[];
  boughtProducts: ProductType[];
  amount: number;
};
const ShopingList = ({ productsToBuy, boughtProducts, amount }: Props) => {
  return (
    <View style={styles.container}>
      <ToBuyListScreen />
      <BoughtListScreen />
      <TotalAmount amount={amount} />
    </View>
  );
};
const mapStateToProps = (state: StateType) => ({
  productsToBuy: state.products,
  boughtProducts: state.products,
  // amount: state.products.reduce((acc, cur) => acc + cur.cost, 0),
});

export default connect(mapStateToProps)(ShopingList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
