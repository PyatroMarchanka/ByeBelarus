import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../theme/colors';

type Props = {
  text: string;
};
const Hint = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Hint;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.primarySelected,
    borderRadius: 4,
  },
  text: {
    fontSize: 17,
    color: 'white',
  },
});
