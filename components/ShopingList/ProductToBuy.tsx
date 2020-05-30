import React, { Dispatch } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { StateType, actions } from '../../store/reducer';
import { Action } from 'redux';
import { BoughtProductTypeDTO } from './BoughtProduct';
import { Button, ListItem, Text, Left, Body, Icon } from 'native-base';
import { Units } from './AddEditBuyProduct/useProductForm';

export type ProductType = {
  name: string;
  amount: number;
  units: Units;
  boughtOptions?: null | {
    cost: null | number;
    amount: null | number;
  };
  id: string;
};

type Props = {
  product: ProductType;
  addBoughtProduct(prod: BoughtProductTypeDTO): void;
  removeToBuyProduct(id: string): void;
};

const ProductToBuy = ({
  product,
  addBoughtProduct,
  removeToBuyProduct,
}: Props) => {
  return (
    <ListItem icon>
      <Left>
        <Button style={{ backgroundColor: '#FF9501', height: 40, width: 40 }}>
          <Icon type="Entypo" name="edit" />
        </Button>
      </Left>
      <Body>
        <TouchableOpacity onPress={() => {}} style={styles.productContainer}>
          <Text>{product.name}</Text>
          <Text>{`${product.amount} ${product.units}`}</Text>
        </TouchableOpacity>
      </Body>
    </ListItem>
  );
};
const mapStateToProps = (state: StateType) => ({
  productsToBuy: state.products,
});
const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProductToBuy);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  productContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    marginLeft: 10,
  },
  editButton: {
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
});
