import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../theme/colors';
import { connect } from 'react-redux';
import { StateType, actions } from '../store/reducer';
import { ProductTypeDTO } from './ShopingList/ProductToBuy';
type Props = {
  visible: boolean;
  setVisible: Function;
  addToBuyProduct: Function;
};
const AddToBuyProduct = ({ visible, setVisible, addToBuyProduct }: Props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <Modal isVisible={visible} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Add item</Text>
        <TextInput
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder="Title"
          value={title}
          onChangeText={(value: string) => setTitle(value)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder="Amount"
          value={amount}
          onChangeText={(value: string) => setAmount(value)}
          style={styles.input}
        />
        <View style={styles.buttons}>
          <Button title="Close" onPress={() => setVisible(false)} />
          <Button
            title="Ok"
            onPress={() => {
              addToBuyProduct({ name: title, count: amount });
              setVisible(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: StateType) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  addToBuyProduct: (prod: ProductTypeDTO) =>
    dispatch(actions.addToBuyProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToBuyProduct);

const styles = StyleSheet.create({
  innerContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    height: 400,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
