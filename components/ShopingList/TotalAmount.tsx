import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StateType } from '../../store/reducer';
import { ProductType } from './ProductToBuy';
import { Icon } from 'native-base';
type Props = {
  amount: number;
};
export const TotalAmount = ({ amount }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Набылі на {amount} р.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

const mapStateToProps = (state: StateType) => {
  const bought = state.products.filter(
    (prod) => prod.boughtOptions && prod.boughtOptions.cost,
  );
  return {
    amount: bought.reduce((acc, cur) => +acc + +cur.boughtOptions.cost, 0),
  };
};

export default connect(mapStateToProps)(TotalAmount);
