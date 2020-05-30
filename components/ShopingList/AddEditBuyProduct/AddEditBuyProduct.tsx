import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../theme/colors';
import { connect } from 'react-redux';
import { StateType, actions } from '../../../store/reducer';
import { ProductType } from '../ProductToBuy';
import {
  Form,
  Item,
  Input,
  Label,
  Title,
  Picker,
  Icon,
  Right,
  Left,
} from 'native-base';
import { useProductForm, Units } from './useProductForm';

type Props = {
  visible: boolean;
  setVisible: Function;
  addToBuyProduct: Function;
};
const AddEditBuyProduct = ({ visible, setVisible, addToBuyProduct }: Props) => {
  const [state, actions] = useProductForm({
    title: '',
    amount: 0,
    units: Units.kg,
  });
  return (
    <Modal isVisible={visible} style={styles.container}>
      <View style={styles.innerContainer}>
        <Title style={styles.text}>Add item</Title>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={state.title}
              onChangeText={(value: string) => actions.setTitle(value)}
              autoCapitalize="sentences"
              autoCorrect={true}
              style={styles.input}
            />
          </Item>

          <Item picker>
            <Left>
              <Item floatingLabel last>
                <Label>Amount</Label>
                <Input
                  onChangeText={(value: string) => actions.setAmount(value)}
                  style={styles.input}
                />
              </Item>
            </Left>
            <Right>
              <Picker
                mode="dialog"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={state.units}
                onValueChange={(value) => actions.setUnits(value)}
              >
                <Picker.Item label="Kg" value={Units.kg} />
                <Picker.Item label="Liters" value={Units.l} />
                <Picker.Item label="Milliliters" value={Units.ml} />
                <Picker.Item label="Items" value={Units.item} />
                <Picker.Item label="Grams" value={Units.g} />
              </Picker>
            </Right>
          </Item>
        </Form>

        <View style={styles.buttons}>
          <Button title="Close" onPress={() => setVisible(false)} />
          <Button
            title="Ok"
            onPress={() => {
              console.warn(state);
              addToBuyProduct({
                name: state.title,
                amount: state.amount,
                units: state.units,
              });
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
  addToBuyProduct: (prod: ProductType) =>
    dispatch(actions.addToBuyProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditBuyProduct);

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
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
    fontSize: 20,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
