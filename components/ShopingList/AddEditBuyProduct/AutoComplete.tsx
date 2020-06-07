import React, { Component, useState, useEffect } from 'react';
import { productSearcher } from './useAutoComplete';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Hint from './Hint';

type Props = {
  serchString: string;
  autoComplete: Function;
};

export const AutoComplete = ({ serchString, autoComplete }: Props) => {
  const [hints, setHints] = useState<string[]>([]);

  useEffect(() => {
    setHints(productSearcher(serchString));
  }, [serchString]);

  return (
    <View style={styles.container}>
      {hints.map((hint) => (
        <TouchableOpacity key={hint} onPress={() => autoComplete(hint)}>
          <Hint text={hint} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default AutoComplete;
