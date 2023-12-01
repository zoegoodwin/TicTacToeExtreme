import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import IconButton from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const GameOver = ({navigation, route}) => {
  const {winner, isDraw} = route.params;

  let message;
  if (isDraw) {
    message = "It's a Draw!";
  } else {
    message = `Player ${winner} Wins`;
  }

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Game Over!</Text>
          <Text style={styles.winText}>{message}</Text>
        </View>

        <View style={styles.buttonMenu}>
          <IconButton
            title="New Game"
            iconName="newGame"
            onPress={() => navigation.navigate('Game')}
          />

          <IconButton
            title="Home"
            iconName="home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  winText: {
    color: 'black',
    marginTop: 0,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'NeonTilt-Regular',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
    marginBottom: '5%',
  },
  buttonMenu: {
    alignItems: 'center',
    marginTop: '10%',
  },
});

export default GameOver;
