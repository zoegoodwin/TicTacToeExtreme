import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Slider } from '@rneui/themed';
import IconButton from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const Difficulty = ({ navigation }) => {
  const [time, setTime] = useState(5);
  const [difficultyMode, setDifficultyMode] = useState('normal');

  const sendMessage = (message) => {
    const selectedDifficultyMode = message === 'speedrun' ? 'speedrun' : 'normal';
    alert(`Game set to ${message} mode`);
    navigation.navigate('Game', { difficultyMode: selectedDifficultyMode, time });
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
            <IconButton title="Normal" iconName="start" onPress={() => sendMessage('normal')} />
            <IconButton
              title="Speed Run"
              iconName="speedrun"
              onPress={() => sendMessage('speedrun')}
            />
            <IconButton title="Back" iconName="back" onPress={() => navigation.navigate('Home')} />
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
