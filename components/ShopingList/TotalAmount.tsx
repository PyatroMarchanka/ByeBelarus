import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
type Props = {
  amount: number;
};
export const TotalAmount = ({ amount }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total amount: {amount}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default TotalAmount;
