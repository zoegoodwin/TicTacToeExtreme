import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import IconButton from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const Instructions = ({navigation}) => {
  return (
    <MainLayout>
      <SafeAreaView>
        <View>
          <View>
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

            <Text style={styles.sectionTitle}>Timed</Text>
            <View>
              <Text style={styles.descText}>
                Follows the same rules as above, except each player only has a
                set number of seconds to complete their turn.
              </Text>
              <Text style={styles.descText}>
                If a player does not take their turn within the time limit, the
                game moves forward with the next player's turn.
              </Text>
              <Text style={styles.descText}>
                The number of seconds per turn can be adjusted in the difficulty
                settings menu.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonMenu}>
          <IconButton
            title="Back"
            iconName="back"
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
    marginBottom: '5%',
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: '5%',
    marginBottom: '5%',
    fontWeight: 'bold',
    color: 'black',
  },
  boldText: {
    fontSize: 20,
    marginTop: '1%',
    marginBottom: '2%',
    color: 'black',
  },
  descText: {
    color: 'black',
    marginBottom: '1%',
  },
  buttonMenu: {
    marginTop: '10%',
  },
});

export default Instructions;
