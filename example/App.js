/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Confetti} from '@hyperjumptech/react-native-confetti'

const App = () => {
  return (
    <View style={styles.body}>
      <Confetti
        isEnabled={true}
        color={"#6FC4C7"}
        character={"❅"}
      />
      <Text style={styles.text}>
        This is react native example app for react-native-confetti
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
