import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import IconButton from '../components/Button';

import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe Extreme</Text>
            <Image
              style={styles.logo}
              source={require('../assets/icons/tic-tac-toe-logo.png')}
            />
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
    paddingBottom: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
    marginBottom: '5%',
  },
  logo: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  buttonMenu: {
    alignItems: 'center',
  },
});

export default Home;
