import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { StateType } from '../../../store/reducer';
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
  Button,
} from 'native-base';
import { useProductForm, Units, AddProductType } from './useProductForm';
import AutoComplete from './AutoComplete';

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
  useEffect(() => {
    if (title === 'Хачу набыць!') {
      actions.reset();
    }
  }, [visible]);
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
            <Label>Назва</Label>
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
                <Label>Колькасць</Label>
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
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={state.units}
                onValueChange={(value) => actions.setUnits(value)}
              >
                <Picker.Item label="Кіло" value={Units.kg} />
                <Picker.Item label="Літры" value={Units.l} />
                <Picker.Item label="Мілілітры" value={Units.ml} />
                <Picker.Item label="Штукі" value={Units.item} />
                <Picker.Item label="Грамы" value={Units.g} />
              </Picker>
            </Right>
          </Item>
        </Form>
        <AutoComplete
          serchString={state.name}
          autoComplete={actions.setTitle}
        />
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text>Назад</Text>
          </Button>
          <Button
            success
            disabled={!state.name}
            onPress={() => {
              onSubmit(state);
              setVisible(false);
            }}
          >
            <Text>Гатова!</Text>
          </Button>
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
