import { createStore, AnyAction } from 'redux';
import { ActionTypes, ActionNotesAddMultiple, ActionNoteSetActive, ActionCollectionsAddMultiple, ActionCollectionSetActive } from './actions';
import { AnyNoteData } from '../components/notes/note-types';
import { CollectionData } from '../components/Collection';

type State = {
  loaded: boolean,
  notes: AnyNoteData[],
  activeNote?: AnyNoteData,
  collections: CollectionData[],
  activeCollection?: CollectionData
};

const initialState = {
  loaded: false,
  notes: [],
  collections: []
}

const reducer = (state: State | undefined = initialState, action: AnyAction): State => {
  switch(action.type) {
    case ActionTypes.appSetLoaded: {
      return {...state, loaded: true};
    };

    case ActionTypes.notesAddMultiple: {
      const a = action as ActionNotesAddMultiple;

      return {
        ...state,

        /**
          * NOTE that if multiple notes with the same UUID are added
          * this will result in uuid duplicates and not an updated note.
          *
          * An insert or update behavior may be needed if the notes are
          * saved locally for faster boot, but then loaded from a remote source
          * that may have newer content.
          */
        notes: state.notes.concat(a.payload.notes) 
      }
    };

    case ActionTypes.noteSetActive: {
      const a = action as ActionNoteSetActive;

      // Retrieve the note props from the notes array
      // If it doesn't exist or if the uuid is found multiple times, 
      // throw errors.
      const noteProps = state.notes.filter((n) => {
        return n.uuid == a.payload;
      })

      // TODO: handle errors
      if(!noteProps.length) {
        throw new Error(`Can't set the note with UUID ${a.payload} as active. Note not found. Failed setting active note.`);
      }
      else if(noteProps.length > 1) {
        throw new Error(`Found more than one note with UUID ${a.payload}. Failed setting active note.`);
      }
      else {
        return {
          ...state,
          activeNote: noteProps[0]
        }
      }
    };

    case ActionTypes.collectionsAddMultiple: {
      const a = action as ActionCollectionsAddMultiple;
      return {
        ...state,

        /**
          * See note in notesAddMultiple above about potential UUID duplicates
          */
        collections: state.collections.concat(a.payload.collections)
      }
    };

    case ActionTypes.activeCollectionSet: {
      const a = action as ActionActiveCollectionSet;

      // Retrieve the collection props from the notes array
      // If it doesn't exist or if the uuid is found multiple times, 
      // throw errors.
      const collectionProps = state.collections.filter((c) => {
        return c.uuid == a.payload;
      })

      // TODO: handle errors
      if(!!collectionProps.length) {
        throw new Error(`Can't set the collection with UUID ${a.payload} as active. Collection not found. Failed setting active collection.`);
      }
      else if(collectionProps.length > 1) {
        throw new Error(`Found more than one collection with UUID ${a.payload}. Failed setting active collection.`);
      }
      else {
        return {
          ...state,
          activeCollection: collectionProps[0]
        }
      }
    };
  }

  return state;
};

export default createStore(reducer);
