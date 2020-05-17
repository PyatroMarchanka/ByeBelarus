import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductToBuy from '../components/ShopingList/ProductToBuy';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import { StateType } from '../store/reducer';
type Props = {
  products: ProductType[];
};
const ToBuyListScreen = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }: { item: ProductType }) => (
          <ProductToBuy name={item.name} count={item.count} />
        )}
        data={products}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state: StateType) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ToBuyListScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
