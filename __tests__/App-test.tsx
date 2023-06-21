/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import store from '../src/redux/store';
import { Actions } from '../src/redux/actions';
import sampleNotes from '../sample-data/notes.json';
import sampleCollections from '../sample-data/collections.json';
import { CollectionData } from '../src/components/Collection';
import { AnyNoteData } from '../src/components/notes/note-types';
import { ActionTypes } from '../src/redux/actions';

// jest.mock('@fortawesome/react-native-fontawesome', () => ({
//     FontAwesomeIcon: ''
// }))

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// TODO: Fix the Jest environment to make this
// test pass and understand what is going on
// it('renders correctly', () => {
//   renderer.create(<App />);
// });

beforeEach(() => {
  store.dispatch({
    type: ActionTypes.wipeState
  });
});

it('has the "loaded" state set on ActionAppSetLoaded', () => {
  const state_before = store.getState();
  expect(state_before.loaded).toEqual(false);

  store.dispatch(Actions.appSetLoaded());
  const state_after = store.getState();
  expect(state_after.loaded).toEqual(true);
});

it('has notes added to state on ActionNotesAddMultiple', () => {
  const state_before = store.getState();
  expect(state_before.notes.size).toEqual(0);

  const notes: AnyNoteData[] = sampleNotes.notes;

  store.dispatch(Actions.notesAddMultiple(notes));
  const state_after = store.getState();
  expect(state_after.notes.size).toEqual(3);
});

it('sets the panel to be shown on ActionAppShowPanel', () => {
  const state_before = store.getState();
  expect(state_before.showPanel).toEqual(false);

  const name = 'somePanelName';
  store.dispatch(Actions.appShowPanel(name));
  const state_after = store.getState();
  expect(state_after.showPanel).toEqual(name);
});

it('loads a note and sets the show note state on ActionAppShowNote', () => {
  const state_before = store.getState();
  expect(state_before.showNote).toEqual(false);
  expect(state_before.activeNote).toEqual(undefined);

  const notes: AnyNoteData[] = sampleNotes.notes;
  store.dispatch(Actions.notesAddMultiple(notes));
  // The loading of notes is tested elsewhere

  const note = notes[0];
  store.dispatch(Actions.appShowNote(note.uuid));
  const state_after = store.getState();
  expect(state_after.showNote).toEqual(true);
  expect(state_after.activeNote.name).toEqual("5-minute body scan");
});

it('closes the active panel on ActionAppGoHome', () => {
  const name = 'somePanelName';
  store.dispatch(Actions.appShowPanel(name));
  const state_before = store.getState();
  expect(state_before.showPanel).toEqual(name);

  store.dispatch(Actions.appGoHome());
  const state_after = store.getState();
  expect(state_after.showPanel).toEqual(false);
});

it('closes the active note on ActionAppGoHome', () => {
  const notes: AnyNoteData[] = sampleNotes.notes;
  const note = notes[0];

  store.dispatch(Actions.notesAddMultiple(notes));
  store.dispatch(Actions.appShowNote(note.uuid));

  const state_before = store.getState();
  expect(state_before.activeNote.uuid).toEqual(note.uuid);
  expect(state_before.showNote).toEqual(true);

  store.dispatch(Actions.appGoHome());
  const state_after = store.getState();
  expect(state_after.showNote).toEqual(false);
});

it('has active note set on ActionNoteSetActive', () => {
  const notes: AnyNoteData[] = sampleNotes.notes;
  const note: AnyNoteData = sampleNotes.notes[0];
  store.dispatch(Actions.notesAddMultiple(notes));

  const state_before = store.getState();
  expect(state_before.activeNote).toBeUndefined();

  store.dispatch(Actions.appShowNote(note.uuid));
  const state_after = store.getState();
  expect(state_after.activeNote).toEqual(note);
});

it('has collections added to state on ActionCollectionsAddMultiple', () => {
  const state_before = store.getState();
  expect(state_before.collections.size).toEqual(0);

  const collections: CollectionData[] = sampleCollections.collections;

  store.dispatch(Actions.collectionsAddMultiple(collections));
  const state_after = store.getState();
  expect(state_after.collections.size).toEqual(3);
});


it('has active collection set on ActionCollectionSetActive', () => {
  const collections = sampleCollections.collections;
  const collection: CollectionData = collections[0];

  store.dispatch(Actions.collectionsAddMultiple(collections));

  const state_before = store.getState();
  expect(state_before.activeCollection).toBeUndefined();

  store.dispatch(Actions.collectionSetActive(collection.uuid));
  const state_after = store.getState();
  expect(state_after.activeCollection).toEqual(collection);
});
