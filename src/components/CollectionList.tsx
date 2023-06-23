import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import { Actions } from '../redux/actions';
import { AnyNoteData } from './notes/note-types';
import theme from '../globals/theme';

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
      noteWrapper: {
        padding: 20,
      },
      note: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, .6)',
        backgroundColor: theme.palette.base_2,
        borderRadius: 10,
        shadowColor: theme.palette.base_0,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      noteImage: {
        width: 50,
        height: 50,
        flex: 0,
        marginRight: 15,
      },
      noteTitle: {
        flex: 1,
        fontSize: 24,
      },
    });

    // TODO: move this into a new component, NoteCard
    const notes = this.props.notes.map((n: AnyNoteData): JSX.Element => {
      const uuid = n.uuid;
      const name = n.name;
      return (
        <Pressable key={ `note-${uuid}` } style={ stylesheet.noteWrapper } onPress={ () => {
          this.props.dispatch(Actions.appShowNote(uuid));
        }}>
          <View style={ stylesheet.note }>
            <Image source={{ uri: n.imageUrl }} style={ stylesheet.noteImage } />
            <Text style={ stylesheet.noteTitle }>{ name }</Text>
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
  const activeCollection = state.activeCollection;

  if(activeCollection !== undefined) {
    const collectionNoteIds: string[] = activeCollection.notes;
    const notes: AnyNoteData[] = [];

    for(let nid of collectionNoteIds) {
      const note = state.notes.get(nid);
      if(note != undefined) {
        notes.push(note);
      }
    };

    // FUTURE LEARNING:
    // I failed at appeasing the Compiler Gods.
    //
    // Couldn't get this working with array.map() and array.filter()
    // TypeScript complained (understandably) that the results of those
    // could be undefined. 
    //
    // const notes = collectionNoteIds.map((nid) => {
    //   return state.notes.get(nid);
    // })
    // const filteredNotes: AnyNoteData[] = notes.filter((n) => {
    //   return n !== undefined;
    // });

    return { notes: notes };
  }
  else {
    return { notes: [] };
  }
};

export default connect(mapStateToProps)(CollectionList);
