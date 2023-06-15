import { AnyAction } from 'redux';
import { NoteAudioText1Data } from '../components/notes/NoteAudioText1';
import { CollectionData } from '../components/Collection';

export enum ActionTypes {
  appSetLoaded = "app/set-loaded",
  notesAddMultiple = "notes/add-multiple",
  activeNoteSet = "active-note/set",
  collectionsAddMultiple = "collections/add-multiple",
  activeCollectionSet = "active-collection/set"
}

export type ActionAppSetLoaded = AnyAction & {
  payload: boolean
}

const appSetLoaded = (): ActionAppSetLoaded => {
  return {
    type: ActionTypes.appSetLoaded,
    payload: true
  }
};

export type ActionNotesAddMultiple = AnyAction & {
  payload: {
    notes: NoteAudioText1Data[]
  }
};

export type ActionActiveNoteSet = AnyAction & {
  payload: string
};

export type ActionCollectionsAddMultiple = AnyAction & {
  payload: {
    collections: CollectionData[]
  }
};

export type ActionActiveCollectionSet = AnyAction & {
  payload: string
};

export const Actions = {
  appSetLoaded,
};
