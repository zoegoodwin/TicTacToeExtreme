import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './GamePiece';

const GameBoard = ({squares, onPress}) => (
  <View style={styles.board}>
    <View style={styles.row}>
      <Square value={squares[0]} onPress={() => onPress(0)} />
      <Square value={squares[1]} onPress={() => onPress(1)} />
      <Square value={squares[2]} onPress={() => onPress(2)} />
    </View>
    <View style={styles.row}>
      <Square value={squares[3]} onPress={() => onPress(3)} />
      <Square value={squares[4]} onPress={() => onPress(4)} />
      <Square value={squares[5]} onPress={() => onPress(5)} />
    </View>
    <View style={styles.row}>
      <Square value={squares[6]} onPress={() => onPress(6)} />
      <Square value={squares[7]} onPress={() => onPress(7)} />
      <Square value={squares[8]} onPress={() => onPress(8)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;
