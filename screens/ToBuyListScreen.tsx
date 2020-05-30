import React, { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductToBuy from '../components/ShopingList/ProductToBuy';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import AddToByeProduct from '../components/AddToBuyProduct';
import { connect } from 'react-redux';
import { StateType } from '../store/reducer';

type Props = {
  products: ProductType[];
};

const ToBuyListScreen = ({ products }: Props) => {
  const [isAddToBuyModal, setIsAddToBuyModal] = useState(false);
  return (
    <View style={styles.container}>
      <AddToByeProduct
        visible={isAddToBuyModal}
        setVisible={setIsAddToBuyModal}
      />
      <FlatList
        renderItem={({ item }: { item: ProductType }) => (
          <ProductToBuy name={item.name} count={item.count} id={item.id} />
        )}
        data={products}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add item" onPress={() => setIsAddToBuyModal(true)} />
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
