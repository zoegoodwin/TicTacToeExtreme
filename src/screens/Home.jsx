import React from 'react';
import {SafeAreaView, Button, View, StyleSheet, Text} from 'react-native';

import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe Extreme</Text>
          </View>
          <Button
            title="Instructions"
            onPress={() => navigation.navigate('Instructions')}
          />
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
});

export default Home;
