import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HistoryScreen(route, navigation) {

   const data = route.data;


    return (
      <View style={styles.container}>

        <Text style={styles.fixToText}>History</Text>
        <FlatList style={styles.list}
          data={data}
          keyExtractor= { (item, index) => index }
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
        }
        />
  
      </View>

    );
    }

    const styles = StyleSheet.create({
        container: {
          marginTop: 100,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 100,
          marginRight: 100,
        },
      
        list: {
          marginLeft: 100,
          marginRight: 100,
        }
      });

  export default HistoryScreen;