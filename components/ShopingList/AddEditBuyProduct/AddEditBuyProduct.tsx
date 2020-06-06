import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../theme/colors';
import { connect } from 'react-redux';
import { StateType, actions } from '../../../store/reducer';
import { ProductType } from '../ProductToBuy';
import {
  Text,
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
import { Dropdown } from 'react-native-material-dropdown';
import { useProductForm, Units, AddProductType } from './useProductForm';

type Props = {
  visible: boolean;
  setVisible: Function;
  onSubmit: Function;
  initials: AddProductType;
  title: string;
};
const AddEditBuyProduct = ({
  visible,
  setVisible,
  onSubmit,
  initials,
  title,
}: Props) => {
  const { state, actions } = useProductForm(initials);
  return (
    <Modal
      isVisible={visible}
      style={styles.container}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{title}</Text>
        <Form>
          <Item floatingLabel style={{ marginBottom: 10 }}>
            <Label>Title</Label>
            <Input
              value={state.name}
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
                  value={state.amount?.toString()}
                  onChangeText={(value: string) => actions.setAmount(value)}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </Item>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon type="Feather" name="arrow-down" />}
                style={{ width: '100%' }}
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
          <Button
            title="Close"
            onPress={() => {
              setVisible(false);
            }}
          />
          <Button
            disabled={!state.name}
            title="Ok"
            onPress={() => {
              onSubmit(state);
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

export default connect(mapStateToProps)(AddEditBuyProduct);

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
