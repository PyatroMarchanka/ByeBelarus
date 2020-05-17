import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import ToBuyListScreen from './ToBuyListScreen';
import BoughtListScreen from './BoughtListScreen';
import { StateType } from '../store/reducer';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import { BoughtProductType } from '../components/ShopingList/BoughtProduct';
import { TotalAmount } from '../components/ShopingList/TotalAmount';
type Props = {
  productsToBuy: ProductType[];
  boughtProducts: BoughtProductType[];
  amount: number;
};
const ShopingList = ({ productsToBuy, boughtProducts, amount }: Props) => {
  return (
    <View style={styles.container}>
      <ToBuyListScreen products={productsToBuy} />
      <BoughtListScreen products={boughtProducts} />
      <TotalAmount amount={amount} />
    </View>
  );
};
const mapStateToProps = (state: StateType) => ({
  productsToBuy: state.products,
  boughtProducts: state.boughtProducts,
  amount: state.boughtProducts.reduce((acc, cur) => acc + cur.cost, 0),
});

export default connect(mapStateToProps)(ShopingList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
