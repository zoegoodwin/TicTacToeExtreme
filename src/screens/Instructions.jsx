import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
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
              <Text>
                The goal is to get three of your symbols (either 'X' or 'O') in
                a row, either horizontally, vertically, or diagonally.
              </Text>
            </View>

            <View>
              <Text style={styles.boldText}>Game Play: </Text>
              <Text>
                Players take turns placing their symbol ('X' or 'O') in an empty
                cell of the grid.
              </Text>
              <Text>
                The first player to get three of their symbols in a row wins.
              </Text>
              <Text>
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
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  boldText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f9d335',
    borderRadius: 15,
    borderColor: '#634a8e',
    borderStyle: 'solid',
    borderWidth: 3,
    height: 50,
    width: 200,
    marginVertical: 50,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonContainer: {
    marginHorizontal: '20%',
  },
});

export default Instructions;
