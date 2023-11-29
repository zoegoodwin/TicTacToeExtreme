import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '@rneui/base';
import GameBoard from '../components/GameBoard';

import MainLayout from '../layouts/MainLayout';

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game = ({navigation}) => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = i => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = current.squares.slice();

    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{squares: currentSquares}]));
    setStepNumber(newHistory.length);
  };

  const jumpTo = step => {
    setStepNumber(step);
  };

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <MainLayout>
      <SafeAreaView>
        <View style>
          <Text>{status}</Text>
          <GameBoard squares={current.squares} onPress={handleClick} />
        </View>
        <View style={styles.buttonMenu}>
          <Button
            title="New Game"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => jumpTo(0)}
          />
          <Button
            title="Menu"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f9d335',
    borderRadius: 15,
    borderColor: '#634a8e',
    borderStyle: 'solid',
    borderWidth: 3,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
    marginVertical: -5,
  },
  buttonContainer: {
    marginHorizontal: '20%',
  },
  buttonMenu: {
    marginTop: '40%',
  },
});

export default Game;
