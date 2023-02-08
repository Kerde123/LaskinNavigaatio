import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from './HistoryScreen';

export default function CalculatorScreen({ navigation }) {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
    const [data, setData] = useState([]);
    const [history, setHistory] = useState([]);
  
    const plusResult = parseInt(number1)+parseInt(number2);
    const minusResult = parseInt(number1)-parseInt(number2);
    
    const pressed1 = () => { 
      setResult(plusResult);
      setNumber1('');
      setNumber2('');
  
      const text = number1 + "+" + number2 + "=" + plusResult;
      setHistory([...history, { key: text }]);
    };
    
    const pressed2 = () => {
      setResult(minusResult);
      setNumber1('');
      setNumber2('');
  
      const text = number1 + "-" + number2 + "=" + minusResult;
      setHistory([...history, { key: text }]);
    };
  
  
    return (
      <View>
      <View style={styles.container}>
  
        <Text>Result: {result} </Text>
        <TextInput
          style={{ width: 200, borderColor: 'black', borderWidth: 2}}
          keyboardType='numeric'
          onChangeText={number1 => setNumber1(number1)}
          value= {number1}
          />
        <TextInput
          style={{ width: 200, borderColor: 'black', borderWidth: 2}}
          keyboardType='numeric'
          onChangeText={number2 => setNumber2(number2)}
          value= {number2}
          />
        <StatusBar style="auto" />
      </View>
  
      <View style={styles.fixToText}>
        <Button
          title="+"
          onPress = {pressed1}
        />
        <Button
          title="-"
          onPress = {pressed2}
       />
       <Button
          title="HISTORY"
          onPress = {() => navigation.navigate('History', 
          { history})}
          />
      </View>
  
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
  
