import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Square = ({ value, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
    }}
  >
    <Text style={{ fontSize: 36 }}>{value}</Text>
  </TouchableOpacity>
);

export default Square;
