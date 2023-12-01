import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Slider} from '@rneui/themed';
import IconButton from '../components/Button';

const Difficulty = ({navigation}) => {
  const [time, setTime] = useState(5);

  const sendMessage = message => {
    alert(`Game set to ${message} mode`);
  };

  return (
    <SafeAreaView style={styles.container}>
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
            onPress={() => sendMessage('speed run')}
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
          onValueChange={value => setTime(value)}
        />
        <Text style={styles.rangeValue}>{`Time: ${time} seconds`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#e4e6f2',
  },
  spacer: {
    height: 200,
  },
  title: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'BungeeShade-Regular',
    color: 'black',
    marginLeft: '5%',
  },
  sliderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40%',
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
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Difficulty;
