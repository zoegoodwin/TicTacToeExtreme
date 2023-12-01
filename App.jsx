import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameModeProvider } from './src/screens/GameMode';

import Home from './src/screens/Home';
import Instructions from './src/screens/Instructions';
import Game from './src/screens/Game';
import Difficulty from './src/screens/Difficulty';
import ResumeAndExit from './src/screens/ResumeAndExit';
import GameOver from './src/screens/GameOver';

const Stack = createStackNavigator();

function App() {
  return (
    <GameModeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Instructions"
            component={Instructions}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Game"
            component={Game}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Difficulty"
            component={Difficulty}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ResumeAndExit"
            component={ResumeAndExit}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="GameOver"
            component={GameOver}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameModeProvider>
  );
}

export default App;
