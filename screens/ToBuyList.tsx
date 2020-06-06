import React, { useState, Dispatch } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductToBuy from '../components/ShopingList/ProductToBuy';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import AddToByeProduct from '../components/ShopingList/AddEditBuyProduct/AddEditBuyProduct';
import { connect } from 'react-redux';
import { StateType, actions } from '../store/reducer';
import { Units } from '../components/ShopingList/AddEditBuyProduct/useProductForm';
import { Action } from 'redux';
import { H2 } from 'native-base';

type Props = {
  products: ProductType[];
  addToBuyProduct: Function;
};

const ToBuyListScreen = ({ products, addToBuyProduct }: Props) => {
  const [isAddToBuyModal, setIsAddToBuyModal] = useState(false);
  return (
    <View style={styles.container}>
      <AddToByeProduct
        title="Хачу набыць!"
        onSubmit={addToBuyProduct}
        initials={{
          name: '',
          amount: 0,
          units: Units.kg,
        }}
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
      <Button title="Дадаць" onPress={() => setIsAddToBuyModal(true)} />
    </View>
  );
};

const mapStateToProps = (state: StateType) => ({
  products: state.products.filter((prod) => !prod.boughtOptions),
});
const mapDispatchToProps = (dispatch: any) => ({
  addToBuyProduct: (prod: ProductType) =>
    dispatch(actions.addToBuyProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToBuyListScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1.5,
  },
  splash: {
    flex: 1,
  },
});
