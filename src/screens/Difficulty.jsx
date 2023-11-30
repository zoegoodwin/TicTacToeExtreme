import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Slider} from '@rneui/themed';
import {Button} from '@rneui/base';

const Difficulty = ({navigation}) => {
  const [time, setTime] = useState(5);

  const sendMessage = message => {
    alert(`Game set to ${message} mode`);
  };

  return (
    <SafeAreaView>
      <View style={styles.spacer}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Difficulty</Text>
      </View>

      <View style={styles.options}>
        <View>
          <View style={styles.buttonMenu}>
            <Button
              title="Normal"
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
              onPress={() => sendMessage('Normal')}
            />
            <Button
              title="Speed Run"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
              icon={() => (
                <Image
                  source={require('../assets/speedrun-icon.png')}
                  style={styles.icon}
                />
              )}
              onPress={() => sendMessage('Speed Run')}
            />
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
  },
  winText: {
    color: 'black',
    marginTop: 0,
    fontSize: 24,
  },
  playerInfoDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 0,
  },
  instructions: {
    textAlign: 'left',
    margin: 0,
  },
  options: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#000000',
  },
  sliderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
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

export default Difficulty;
