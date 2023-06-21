import { createStore, AnyAction } from 'redux';
import { ActionTypes, ActionAppShowPanel, ActionNotesAddMultiple, ActionAppShowNote, ActionCollectionsAddMultiple, ActionCollectionSetActive } from './actions';
import { AnyNoteData } from '../components/notes/note-types';
import { CollectionData } from '../components/Collection';

export type State = {
  loaded: boolean,
  notes: Map<string, AnyNoteData>,
  activeNote?: AnyNoteData,
  collections: Map<string, CollectionData>,
  activeCollection?: CollectionData,
  showPanel?: string | boolean, 
  showNote: boolean,
};

const initialState = {
  loaded: false,
  notes: new Map(),
  collections: new Map(),
  showPanel: false,
  showNote: false,
}

const reducer = (state: State | undefined = initialState, action: AnyAction): State => {
  switch(action.type) {
    case ActionTypes.wipeState: {
      return initialState;
    };

    case ActionTypes.appSetLoaded: {
      return {...state, loaded: true};
    };

    case ActionTypes.appShowPanel: {
      return {
        ...state, 
        showPanel: action.payload, 
        showNote: false
      };
    };

    case ActionTypes.appShowNote: {
      const a = action as ActionAppShowNote;

      const noteProps = state.notes.get(a.payload);

      if(noteProps === undefined) {
        throw new Error(`Can't set the note with UUID ${a.payload} as active. Note not found. Failed setting active note.`);
      }

      return {
        ...state,
        activeNote: noteProps,
        showNote: true,
      }
    };

    case ActionTypes.appGoHome: {
      return {
        ...state,
        showPanel: false,
        showNote: false,
      }
    };

    case ActionTypes.notesAddMultiple: {
      const a = action as ActionNotesAddMultiple;

      // The zen of not mutating the state...
      const newNotes = new Map(state.notes);
      
      a.payload.notes.forEach((n) => {
        newNotes.set(n.uuid, n);
      });

      return {
        ...state,
        notes: newNotes 
      }
    };

    case ActionTypes.collectionsAddMultiple: {
      const a = action as ActionCollectionsAddMultiple;

      // The zen of not mutating the state...
      const newCollections = new Map(state.collections);

      a.payload.collections.forEach((c) => {
        return newCollections.set(c.uuid, c);
      });

      return {
        ...state,
        collections: newCollections
      }
    };

    case ActionTypes.collectionSetActive: {
      const a = action as ActionCollectionSetActive;

      // Retrieve the collection props from the notes map
      // If it doesn't exist, throw an error 
      const collectionProps = state.collections.get(a.payload);

      if(collectionProps === undefined) {
        throw new Error(`Can't set the collection with UUID ${a.payload} as active. Collection not found. Failed setting active collection.`);
      }

      return {
        ...state,
        activeCollection: collectionProps
      }
    };
  }

  return state;
};

export default createStore(reducer);
