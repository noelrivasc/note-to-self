import React, { Component } from 'react';
import { 
  View, 
  Text ,
  StyleSheet,
  Pressable,
} from 'react-native';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import { Actions } from '../redux/actions';
import { AnyNoteData } from './notes/note-types';

export interface CollectionListProps {
  dispatch: Function,
  notes: AnyNoteData[]
};

class CollectionList extends Component<CollectionListProps, {}> {
  constructor(props: CollectionListProps) {
    super(props);
  }
  
  render() {
    const stylesheet = StyleSheet.create({
      note: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'mauve',
        marginBottom: 25,
      }
    });

    const notes = this.props.notes.map((n) => {
      return (
        <Pressable key={ `note-${n.uuid}` } onPress={ () => {
          this.props.dispatch(Actions.appShowNote(n.uuid));
        }}>
          <View style={ stylesheet.note }>
            <Text>{ n.name }</Text>
          </View>
        </Pressable>
      )
    });

    return (
      <View>
        { notes }
      </View>
    );
  }
};

const mapStateToProps = (state: State)  => {
  const notes = Array.from(state.notes).map((n) => {
    return n[1];
  })

  return { notes };
};

export default connect(mapStateToProps)(CollectionList);
