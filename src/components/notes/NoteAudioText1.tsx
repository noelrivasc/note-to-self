import { NoteAudioText1Data } from './note-types';
import React, { Component } from 'react';
import { 
  View, 
  Text ,
} from 'react-native';

/**
 * ABOUT THE CLASS NAME
 * Using a number as part of the class name may seem odd.
 *
 * The reason is that I may want to have different versions
 * of a similar component, but I'd rather not deprecate old versions,
 * have to keep content up to date or add logic to each component to 
 * respond to variations all.
 *
 * Keeping multiple versions of similar components active
 * could be a problem if the list grows too large, and could
 * also be a problem in terms of usability — but let's not get
 * ahead of ourselves here.
 */
export default class NoteAudioText1 extends Component<NoteAudioText1Data, {}> {
  render() {
    return (
      <View>
        <Text>This is a demo.</Text>
      </View>
    );
  }
}
