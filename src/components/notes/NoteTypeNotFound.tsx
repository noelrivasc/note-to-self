import React, { Component } from 'react';
import { 
  View, 
  Text ,
  StyleSheet,
} from 'react-native';

export interface NoteTypeNotFoundProps {
  type: string
};

export default class NoteTypeNotFound extends Component<NoteTypeNotFoundProps, {}> {
  render() {
    const stylesheet = StyleSheet.create({
      warningContainer: {
        padding: 50,
      },
      text: {
        fontSize: 30,
      }
    });
    return (
      <View style={ stylesheet.warningContainer }>
        <Text style={ stylesheet.text }>{`Uh-oh! \n\nWe were unable to find a component for that note type! \n\nThe type requested was: ${ this.props.type }`}</Text>
      </View>
    );
  }
}
