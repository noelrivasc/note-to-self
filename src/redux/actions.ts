import { Action } from 'redux';
import { CollectionData } from '../components/Collection';
import { NoteAudioText1Data, AnyNoteData } from '../components/notes/note-types';

export enum ActionTypes {
  appSetLoaded = "app/set-loaded",
  appShowPanel = "app/panel-show",
  notesAddMultiple = "notes/add-multiple",
  noteSetActive = "notes/set-active",
  collectionsAddMultiple = "collections/add-multiple",
  collectionSetActive = "collections/set-active",
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

export interface ActionAppShowPanel extends Action {
  payload: string
};

const appShowPanel = (panelName: string): ActionAppShowPanel => {
  return {
    type: ActionTypes.appShowPanel,
    payload: panelName
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

const collectionsAddMultiple = (collections: CollectionData[]): ActionCollectionsAddMultiple => {
  return {
    type: ActionTypes.collectionsAddMultiple,
    payload: {
      collections
    }
  }
};

export interface ActionCollectionSetActive extends Action {
  payload: string
};

const collectionSetActive = (uuid: string): ActionCollectionSetActive => {
  return {
    type: ActionTypes.collectionSetActive,
    payload: uuid
  }
};

export const Actions = {
  appSetLoaded,
  appShowPanel,
  notesAddMultiple,
  noteSetActive,
  collectionsAddMultiple,
  collectionSetActive
};
