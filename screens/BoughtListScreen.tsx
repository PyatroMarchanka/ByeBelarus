import React from 'react';
import { ProductType } from '../components/ShopingList/ProductToBuy';
import { FlatList } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import BoughtProduct, {
  BoughtProductType,
} from '../components/ShopingList/BoughtProduct';

type Props = {
  products: BoughtProductType[];
};

const BoughtListScreen = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }: { item: BoughtProductType }) => (
          <BoughtProduct name={item.name} count={item.count} cost={item.cost} />
        )}
        data={products}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BoughtListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    backgroundColor: colors.secondary,
  },
});
