import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import {Button} from '@rneui/base';

import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe Extreme</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Button
              title="New Game"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              icon={() => (
                <Image
                  source={require('../assets/start-icon.png')}
                  style={styles.icon}
                />
              )}
              onPress={() => navigation.navigate('Game')}
            />
            <Button
              title="Settings"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              icon={() => (
                <Image
                  source={require('../assets/settings-icon.png')}
                  style={styles.icon}
                />
              )}
              onPress={() => navigation.navigate('Difficulty')}
            />
            <Button
              title="How to Play"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              icon={() => (
                <Image
                  source={require('../assets/instructions-icon.png')}
                  style={styles.icon}
                />
              )}
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
  button: {
    backgroundColor: '#f9d335',
    borderRadius: 15,
    borderColor: '#634a8e',
    borderStyle: 'solid',
    borderWidth: 3,
    height: 50,
    width: 200,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    fontFamily: '../assets/fonts/TiltNeon-Regular',
    color: 'black',
  },
  buttonContainer: {
    marginHorizontal: '20%',
  },
  buttonMenu: {
    marginTop: '50%',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Home;
