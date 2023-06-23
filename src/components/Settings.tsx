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
      settingsContainer: {
        padding: 20,
      },
      text: {
        color: theme.palette.neutral,
        fontSize: 24,
        marginBottom: 12,
      }
    });

    return (
      <View style={ stylesheet.settingsContainer } >
        <Text style={ stylesheet.text } >This screen will eventually be the settings form.</Text>
        <Text style={ stylesheet.text } >— Reload content & set content source(s).</Text>
        <Text style={ stylesheet.text } >— Set semi-random reminders.</Text>
      </View>
    );
  }
};

