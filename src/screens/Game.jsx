import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import GameBoard from '../components/GameBoard';

import MainLayout from '../layouts/MainLayout';
import IconButton from '../components/Button';

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

  useEffect(() => {
    const winner = calculateWinner(current.squares);
    if (winner) {
      navigation.navigate('GameOver', {winner});
    }
  }, [current.squares, navigation]);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Tic Tac Toe </Text>
        </View>

        <View>
          <Text style={styles.status}>{status}</Text>
          <GameBoard squares={current.squares} onPress={handleClick} />
        </View>
        <View style={styles.buttonMenu}>
          <IconButton
            title="New Game"
            iconName="newGame"
            onPress={() => jumpTo(0)}
          />

          <IconButton
            title="Pause"
            iconName="pause"
            onPress={() => navigation.navigate('ResumeAndExit')}
          />

          <IconButton
            title="Menu"
            iconName="menu"
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
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
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
    alignItems: 'center',
    marginTop: '10%',
  },
  status: {
    fontSize: 20,
    fontFamily: 'NeonTilt-Regular',
    color: 'black',
    marginBottom: 10,
  },
});

export default Game;
