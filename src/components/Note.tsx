/**
 * @file
 * The Note component acts as a wrapper for the
 * actual notes's contents. 
 *
 * The layout, style and behavior of the notes is
 * defined by the `type` property of the note data.
 *
 * A component with the name in `type` is used to
 * render the note contents. If the component specified
 * does not exist, an error is shown.
 */

import React, { Component } from 'react';
import { 
  View, 
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { State } from '../redux/store';
import { Actions } from '../redux/actions';

import { 
  AnyNoteData, 
  NoteAudioText1Data 
} from './notes/note-types';

import NoteAudioText1 from './notes/NoteAudioText1';
import NoteTypeNotFound from './notes/NoteTypeNotFound';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export interface NoteProps {
  dispatch: Function,
  show?: boolean,
  note?: AnyNoteData
};

class Note extends Component<NoteProps, {}> {
  public static defaultProps = {
    show: false,
  }

  render() {
    const noteContents = this.renderNoteContents();

    const left = this.props.show ? '0%' : '105%';

    const stylesheet = StyleSheet.create({
      noteModalContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        padding: 15,
        pointerEvents: 'box-none',
      },
      closeIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
      },
      noteModal: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        left,
        width: '100%',
      }
    });

    return (
      <View style={ stylesheet.noteModalContainer }>
        <View style={ stylesheet.noteModal }>
        <Pressable style={ stylesheet.closeIcon } onPress={ () => {
          this.props.dispatch(Actions.appGoHome());
        }}>
          <FontAwesomeIcon icon={ faClose } size={ 32 }/>
        </Pressable>
          { noteContents }
        </View>
      </View>
    );
  }

  renderNoteContents() {
    if(this.props.note !== undefined) {
      switch(this.props.note.type) {
        case 'NoteAudioText1': {
          const data: NoteAudioText1Data = {
            ...this.props.note,
          }

          return (
            <NoteAudioText1 {...data} />
          );
        };

        default: {
          return this.renderNotFound();
        };
      };
    }
    else {
      return this.renderNotFound();
    }
  }

  renderNotFound() {
    // NOTE that while functionally equivalent, the
    // following line will confuse TS and throw an error:
    // const noteType = (this.props.note != undefined) ? this.props.note.type : '(empty note)';
    const noteType = (this.props.note != undefined) ? this.props.note['type'] : '(empty note)';

    return (
      <NoteTypeNotFound type={ noteType } />
    );
  }
}

const mapStateToProps = (state: State)  => {
  const activeNote = state.activeNote;
  const showNote = state.showNote;

  if(activeNote !== undefined) {
    return {
      note: activeNote,
      show: showNote,
    };
  }
  else {
    return {
      show: false,
    };
  }
};

export default connect(mapStateToProps)(Note);
