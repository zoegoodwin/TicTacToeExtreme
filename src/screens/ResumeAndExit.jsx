import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '@rneui/base';
import MainLayout from '../layouts/MainLayout';

const ResumeAndExit = ({navigation}) => {
  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Are you sure you want to exit the game?
          </Text>
          <Text style={styles.contentText}>All progress will be lost.</Text>

          <Button
            title="Yes, Exit"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Resume"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Game')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentText: {
    textAlign: 'center',
    marginBottom: 20,
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
    marginVertical: 10,
  },
});

export default ResumeAndExit;
