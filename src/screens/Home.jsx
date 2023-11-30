import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Button} from '@rneui/base';

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
            <Button
              title="New Game"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              onPress={() => navigation.navigate('Game')}
            />
            <Button
              title="Settings"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              onPress={() => navigation.navigate('Home')}
            />
            <Button
              title="How to Play"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
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
    padding: 10,
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
    marginTop: '50%',
  },
});

export default Home;
