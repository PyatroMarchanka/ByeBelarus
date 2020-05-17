import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../theme/colors';
type Props = {
  visible: boolean;
  setVisible: Function;
};
const AddToBuyProduct = ({ visible, setVisible }: Props) => {
  return (
    <Modal isVisible={visible} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Add item</Text>
        <TextInput
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder="Title"
          style={styles.input}
        />
        <TextInput
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder="Amount"
          style={styles.input}
        />
        <Button title="Close" onPress={() => setVisible(false)} />
      </View>
    </Modal>
  );
};

export default AddToBuyProduct;

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
});
