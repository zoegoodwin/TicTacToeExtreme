import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import IButton from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const ResumeAndExit = ({navigation}) => {
  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>
            Are you sure you want to exit the game?
          </Text>
          <Text style={styles.contentText}>All progress will be lost.</Text>
          <IButton
            title="Yes, Exit"
            iconName="home"
            onPress={() => navigation.navigate('Home')}
          />
          <IButton
            title="Resume"
            iconName="back"
            onPress={() => navigation.navigate('Game')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '50%',
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
});

export default ResumeAndExit;
