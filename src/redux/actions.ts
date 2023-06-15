import { Action } from 'redux';
import { CollectionData } from '../components/Collection';
import { NoteAudioText1Data, AnyNoteData } from '../components/notes/note-types';

export enum ActionTypes {
  appSetLoaded = "app/set-loaded",
  notesAddMultiple = "notes/add-multiple",
  noteSetActive = "notes/set-active",
  collectionsAddMultiple = "collections/add-multiple",
  collectionSetActive = "collections/set-active"
}

export interface ActionAppSetLoaded extends Action {
  payload: boolean
}

const appSetLoaded = (): ActionAppSetLoaded => {
  return {
    type: ActionTypes.appSetLoaded,
    payload: true
  }
};

export interface ActionNotesAddMultiple extends Action {
  payload: {
    notes: NoteAudioText1Data[]
  }
};

const notesAddMultiple = (notes: AnyNoteData[]): ActionNotesAddMultiple => {
  return {
    type: ActionTypes.notesAddMultiple,
    payload: {
      notes
    }
  }
};

export interface ActionNoteSetActive extends Action {
  payload: string
};

const noteSetActive = (uuid: string): ActionNoteSetActive => {
  return {
    type: ActionTypes.noteSetActive,
    payload: uuid
  };
};

export interface ActionCollectionsAddMultiple extends Action {
  payload: {
    collections: CollectionData[]
  }
};

export interface ActionCollectionSetActive extends Action {
  payload: string
};

export const Actions = {
  appSetLoaded,
  notesAddMultiple,
  noteSetActive,
};
