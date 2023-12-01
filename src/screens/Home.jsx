import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import IconButton from '../components/Button';

import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe </Text>
            <Text style={styles.title}>Extreme </Text>
          </View>
          <View style={styles.buttonMenu}>
            <IconButton
              title="New Game"
              iconName="start"
              onPress={() => navigation.navigate('Game')}
            />
            <IconButton
              title="Settings"
              iconName="settings"
              onPress={() => navigation.navigate('Difficulty')}
            />
            <IconButton
              title="How to Play"
              iconName="instructions"
              onPress={() => navigation.navigate('Instructions')}
            />
          </View>
        </SafeAreaView>
      </MainLayout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#e4e6f2',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
  },
  buttonMenu: {
    alignItems: 'center',
    marginTop: '50%',
  },
});

export default Home;
