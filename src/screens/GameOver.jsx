import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import IconButton from '../components/Button';

const GameOver = ({navigation, route}) => {
  const {winner} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spacer}></View>
      <View>
        <Text style={styles.title}>Congrats!</Text>
        <Text style={styles.winText}>Player {winner} Wins</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#e4e6f2',
  },
  winText: {
    color: 'black',
    marginTop: 0,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'NeonTilt-Regular',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
  },
  buttonMenu: {
    alignItems: 'center',
    marginTop: '10%',
  },
  spacer: {
    height: 200,
  },
});

export default GameOver;
