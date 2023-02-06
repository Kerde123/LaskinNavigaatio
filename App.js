import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';

/* Pilko laskin sovellus kahteen komponenttiin: Calculator ja History. Käytä React Navigation kirjaston stack navigointia, jolla käyttäjä voi siirtyä eri komponenttien välillä.

Calculator komponentissa näytetään laskin ja 'History'- painike, jolla voi siirtyä historia sivulle.
History komponentissa näytetään kaikki tehdyt laskutoimitukset FlatList komponentilla. */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



