import React from 'react';
import { SafeAreaView } from 'react-native';
import Game from './app/game';

const App = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Game />
  </SafeAreaView>
);

export default App;
