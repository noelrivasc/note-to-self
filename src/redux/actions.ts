import { Action } from 'redux';
import { CollectionData } from '../components/Collection';
import { NoteAudioText1Data, AnyNoteData } from '../components/notes/note-types';

export enum ActionTypes {
  appSetLoaded = "app/set-loaded",
  notesAddMultiple = "notes/add-multiple",
  activeNoteSet = "active-note/set",
  collectionsAddMultiple = "collections/add-multiple",
  activeCollectionSet = "active-collection/set"
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
};
