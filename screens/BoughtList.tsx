import React from 'react';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import { FlatList } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import BoughtProduct from '../components/ShopingList/BoughtProduct';
import { StateType } from '../store/reducer';
import { connect } from 'react-redux';
import { H2 } from 'native-base';

type Props = {
  products: ProductType[];
};

const BoughtListScreen = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <FlatList
          renderItem={({ item }: { item: ProductType }) => (
            <BoughtProduct product={item} />
          )}
          data={products}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.splash}>
          <H2 style={styles.splash}>Набудзьце што-небудзь беларускае</H2>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = (state: StateType) => ({
  products: state.products.filter((prod) => prod.boughtOptions),
});

export default connect(mapStateToProps)(BoughtListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
