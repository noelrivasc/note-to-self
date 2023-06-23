import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from 'react-native';
import theme from '../globals/theme';

export default class Settings extends Component {
  render() {
    const stylesheet = StyleSheet.create({
      historyContainer: {
        padding: 20,
      },
      text: {
        color: theme.palette.neutral,
        fontSize: 24,
        marginBottom: 12,
      }
    });

    return (
      <View style={ stylesheet.historyContainer } >
        <Text style={ stylesheet.text } >This screen will eventually contain the 10 most recently viewed notes.</Text>
      </View>
    );
  }
};


