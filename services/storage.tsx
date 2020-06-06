import { ProductType } from '../components/ShopingList/ProductToBuy';
import { AsyncStorage } from 'react-native';

export const storeProducts = async (products: ProductType[]) => {
  await AsyncStorage.setItem('products', JSON.stringify(products));
};
