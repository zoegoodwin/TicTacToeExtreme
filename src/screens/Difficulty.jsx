import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Slider} from '@rneui/themed';
import IconButton from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import {useGameMode} from '../screens/GameMode';

const Difficulty = ({ navigation }) => {
  const { time, setTime, isNormalMode, setIsNormalMode } = useGameMode();

  const sendMessage = message => {
    setIsNormalMode(message === 'normal');
    alert(`Game set to ${message} mode`);
  };

  const startGame = () => {
    navigation.navigate('Game', { initialTime: time });
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.spacer}></View>
        <View>
          <Text style={styles.title}>Select Difficulty</Text>
        </View>
        <View>
          <View style={styles.buttonMenu}>
            <IconButton
              title="Normal"
              iconName="start"
              onPress={() => sendMessage('normal')}
            />
            <IconButton
              title="Speed Run"
              iconName="speedrun"
              onPress={() => navigation.navigate('Game', { initialTime: time })}
            />
            <IconButton
              title="Back"
              iconName="back"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Slider
            style={styles.rangeInput}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={time}
            onValueChange={(value) => setTime(value)}
          />
          <Text style={styles.rangeValue}>{`Time: ${time} seconds`}</Text>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  spacer: {
    height: '20%',
  },
  title: {
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
    marginLeft: '5%',
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15%',
  },
  rangeInput: {
    width: '80%',
    margin: 10,
  },
  rangeValue: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'TiltNeon-Regular',
  },
});

export default Difficulty;
