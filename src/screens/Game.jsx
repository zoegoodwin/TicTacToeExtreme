import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import GameBoard from '../components/GameBoard';
import {useGameMode} from '../screens/GameMode';

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

const Game = ({ navigation, route }) => {
  const { initialTime } = route.params || {};
  const { time, setTime } = useGameMode(initialTime || 5);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const [isNewGameFromGameOver, setIsNewGameFromGameOver] = useState(false);

  let isDraw = false;

  const handleClick = i => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = current.squares.slice();

    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares: currentSquares }]));
    setStepNumber(newHistory.length);
  };

  const jumpTo = step => {
    setStepNumber(step);
  };

  useEffect(() => {
    const winner = calculateWinner(current.squares);
    let isDraw;

    if (!winner) {
      isDraw = current.squares.every(square => square !== null);
    }

    if (time === 0) {
      navigation.navigate('GameOver', { winner: null, isDraw: false });
      setTime(0);
    } else if (winner || isDraw) {
      navigation.navigate('GameOver', { winner, isDraw });
      setHistory([{ squares: Array(9).fill(null) }]);
      setStepNumber(0);
    } else if (time > 0 && xIsNext && !winner && !isDraw && !isNewGameFromGameOver) {
      const countdownInterval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }

    if (isNewGameFromGameOver) {
      setTime(initialTime);
      setIsNewGameFromGameOver(false);
    }
  }, [current.squares, navigation, time, xIsNext, winner, setTime, isNewGameFromGameOver, initialTime]);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <MainLayout>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Tic Tac Toe </Text>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.status}>{`Time Left: ${time === 1 ? '1 second' : time === 0 ? '0 second' : `${time} seconds`}`}</Text>
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
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
    marginBottom: '10',
  },
  buttonMenu: {
    marginTop: '5%',
  },
  status: {
    fontSize: 20,
    fontFamily: 'NeonTilt-Regular',
    color: 'black',
    marginBottom: 10,
  },
});

export default Game;
