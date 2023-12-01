import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from '@rneui/base';

const Square = ({value = ' ', onPress}) => (
  <Button
    title={value}
    onPress={onPress}
    buttonStyle={styles.square}
    titleStyle={styles.squareText}
  />
);

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#773d6d',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#000000',
    margin: 5,
  },
  squareText: {
    fontSize: 60,
    color: '#ffffff',
  },
});

export default Square;
