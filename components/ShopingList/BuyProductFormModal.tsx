import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {
  Text,
  Button,
  Left,
  Right,
  Content,
  Container,
  View,
  Title,
  Input,
  Item,
  Label,
  Form,
  Icon,
} from 'native-base';
import { ProductType } from './ProductToBuy';

type Props = {
  isVisible: boolean;
  setVisible: Function;
  product: ProductType;
  onSubmit: Function;
};

const BuyProductFormModal = ({
  isVisible,
  setVisible,
  product,
  onSubmit,
}: Props) => {
  const [cost, setCost] = useState('');
  const [amount, setAmount] = useState(product.amount.toString());

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Бяру!</Text>
        <Form>
          <Item floatingLabel style={{ marginBottom: 10 }}>
            <Label>Кошт</Label>
            <Input
              value={cost}
              onChangeText={(value) => setCost(value)}
              autoCapitalize="sentences"
              style={styles.input}
              keyboardType="numeric"
            />
            <Icon type="Octicons" name="squirrel" />
          </Item>
          <Item floatingLabel style={{ marginBottom: 10 }}>
            <Label>{product.units}</Label>
            <Input
              value={amount}
              onChangeText={(value) => setAmount(value)}
              autoCapitalize="sentences"
              style={styles.input}
              keyboardType="numeric"
            />
          </Item>
          <View style={styles.buttons}>
            <Button onPress={() => setVisible(false)} style={styles.margin}>
              <Text>Назад</Text>
            </Button>
            <Button
              success
              style={styles.margin}
              onPress={() =>
                onSubmit(product, {
                  cost: cost || null,
                  amount: amount || null,
                })
              }
            >
              <Text>Гатова!</Text>
            </Button>
          </View>
        </Form>
      </View>
    </Modal>
  );
};

export default BuyProductFormModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  margin: {
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
    fontSize: 20,
  },
  input: {
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
