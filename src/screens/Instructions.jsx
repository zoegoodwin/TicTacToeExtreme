import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Button} from '@rneui/base';

import MainLayout from '../layouts/MainLayout';

const Instructions = ({navigation}) => {
  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>How to Play</Text>

            <Text style={styles.sectionTitle}>Regular Game</Text>
            <View>
              <Text style={styles.boldText}>Objective: </Text>
              <Text style={styles.descText}>
                The goal is to get three of your symbols (either 'X' or 'O') in
                a row, either horizontally, vertically, or diagonally.
              </Text>
            </View>

            <View>
              <Text style={styles.boldText}>Game Play: </Text>
              <Text style={styles.descText}>
                Players take turns placing their symbol ('X' or 'O') in an empty
                cell of the grid.
              </Text>
              <Text style={styles.descText}>
                The first player to get three of their symbols in a row wins.
              </Text>
              <Text style={styles.descText}>
                If all the cells are filled and no player has three in a row,
                the game is a tie.
              </Text>
            </View>

            <Button
              title="Back"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              icon={() => (
                <Image
                  source={require('../assets/back-icon.png')}
                  style={styles.icon}
                />
              )}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
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
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  boldText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  descText: {
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
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Instructions;
