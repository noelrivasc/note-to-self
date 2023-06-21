import { Action } from 'redux';
import { CollectionData } from '../components/Collection';
import { NoteAudioText1Data, AnyNoteData } from '../components/notes/note-types';

export enum ActionTypes {
  wipeState = 'app/wipe-state',
  appSetLoaded = "app/set-loaded",
  appShowPanel = "app/panel-show",
  appShowNote = "app/note-show",
  appGoHome = "app/go-home",
  notesAddMultiple = "notes/add-multiple",
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

// export interface ActionAppGoHome extends Action {}

const appGoHome = (): Action => {
  return {
    type: ActionTypes.appGoHome,
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

export interface ActionAppShowNote extends Action {
  payload: string
};

const appShowNote = (uuid: string): ActionAppShowNote => {
  return {
    type: ActionTypes.appShowNote,
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
  appShowNote,
  appGoHome,
  notesAddMultiple,
  collectionsAddMultiple,
  collectionSetActive
};
