import React, { Dispatch, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { StateType, actions } from '../../store/reducer';
import { Action } from 'redux';
import { BoughtProductTypeDTO } from './BoughtProduct';
import { Button, ListItem, Text, Left, Body, Icon } from 'native-base';
import { Units, AddProductType } from './AddEditBuyProduct/useProductForm';
import AddEditBuyProduct from './AddEditBuyProduct/AddEditBuyProduct';
import BuyProductFormModal from './BuyProductFormModal';

export type ProductType = {
  name: string;
  amount: number;
  units: Units;
  boughtOptions?: BoughtOptions;
  id: string;
};

export type BoughtOptions = null | {
  cost: null | number;
  amount: null | number;
};

type Props = {
  product: ProductType;
  buyProduct(product: ProductType, boughtOptions: BoughtOptions): void;
  deleteToBuyProduct(id: string): void;
  editToBuyProduct(product: AddProductType): void;
};

const ProductToBuy = ({
  product,
  editToBuyProduct,
  deleteToBuyProduct,
  buyProduct,
}: Props) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isBuyModal, setIsBuyModal] = useState(false);
  return (
    <ListItem icon>
      <AddEditBuyProduct
        title="Хачу змяніць!"
        onSubmit={editToBuyProduct}
        visible={isEditModal}
        setVisible={setIsEditModal}
        initials={{
          name: product.name,
          amount: product.amount,
          units: product.units,
          id: product.id,
        }}
      />
      <BuyProductFormModal
        isVisible={isBuyModal}
        setVisible={setIsBuyModal}
        onSubmit={buyProduct}
        product={product}
      />
      <Left>
        <Button
          onPress={() => {
            setIsEditModal(true);
          }}
          style={{ backgroundColor: '#FF9501', height: 40, width: 40 }}
        >
          <Icon type="Entypo" name="edit" />
        </Button>
      </Left>
      <Body>
        <TouchableOpacity
          onLongPress={() => deleteToBuyProduct(product.id)}
          style={styles.productContainer}
          //TODO: feature for choose whether to ask user for price or not
          onPress={() => {
            if (true) {
              setIsBuyModal(true);
            } else {
              buyProduct(product, null);
            }
          }}
        >
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
const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  editToBuyProduct: (product: AddProductType) => {
    dispatch(actions.editToBuyProduct(product));
  },
  deleteToBuyProduct: (id: string) => dispatch(actions.deleteToBuyProduct(id)),
  buyProduct: (product: ProductType, boughtOptions: BoughtOptions) => {
    dispatch(
      actions.buyProduct(
        product,
        boughtOptions || {
          cost: null,
          amount: null,
        },
      ),
    );
  },
});
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
