import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import ToBuyListScreen from './ToBuyList';
import BoughtListScreen from './BoughtList';
import { StateType, actions } from '../store/reducer';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import TotalAmount from '../components/ShopingList/TotalAmount';
import { storeProducts } from '../services/storage';
type Props = {};
const ShopingList = ({}: Props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: StateType) => state);

  useEffect(() => {
    AsyncStorage.getItem('products').then((products) => {
      if (products) {
        dispatch(actions.setProducts(JSON.parse(products)));
      }
    });
  }, []);

  useEffect(() => {
    storeProducts(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <ToBuyListScreen />
      <BoughtListScreen />
      <TotalAmount />
    </View>
  );
};

export default ShopingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
