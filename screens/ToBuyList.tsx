import React, { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductToBuy from '../components/ShopingList/ProductToBuy';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import AddToByeProduct from '../components/ShopingList/AddEditBuyProduct/AddEditBuyProduct';
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
          <ProductToBuy product={item} />
        )}
        data={products}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add item" onPress={() => setIsAddToBuyModal(true)} />
    </View>
  );
};

const mapStateToProps = (state: StateType) => ({
  products: state.products.filter((prod) => !prod.boughtOptions),
});

export default connect(mapStateToProps)(ToBuyListScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1.5,
  },
});
