import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from '@rneui/base';

const Square = ({value = ' ', onPress}) => (
  //   <TouchableOpacity
  //     onPress={onPress}
  //     style={{
  //       flex: 1,
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       borderWidth: 1,
  //       borderColor: '#ccc',
  //     }}>
  //     <Text style={{fontSize: 36}}>{value}</Text>
  //   </TouchableOpacity>
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
    borderWidth: 5,
    borderColor: '#000000',
    margin: 5,
  },
  squareText: {
    fontSize: 36,
    color: '#ffffff',
  },
});

export default Square;
