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

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
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
  expect(state_before.notes.length).toEqual(0);

  const notes = sampleNotes.notes;

  store.dispatch(Actions.notesAddMultiple(notes));
  const state_after = store.getState();
  expect(state_after.notes.length).toEqual(3);
});

it('has active note set on ActionNoteSetActive', () => {
  const state_before = store.getState();
  expect(state_before.activeNote).toBeUndefined();

  const note = sampleNotes.notes[0];

  store.dispatch(Actions.noteSetActive(note.uuid));
  const state_after = store.getState();
  expect(state_after.activeNote).toEqual(note);
});

it('has collections added to state on ActionCollectionsAddMultiple', () => {
  const state_before = store.getState();
  expect(state_before.collections.length).toEqual(0);

  const collections = sampleCollections.collections;

  store.dispatch(Actions.collectionsAddMultiple(collections));
  const state_after = store.getState();
  expect(state_after.collections.length).toEqual(3);
});


it('has active collection set on ActionCollectionSetActive', () => {
  const state_before = store.getState();
  expect(state_before.activeCollection).toBeUndefined();

  const collection = sampleCollections.collections[0];

  store.dispatch(Actions.collectionSetActive(collection));
  const state_after = store.getState();
  expect(state_after.activeCollection).toEqual(collection);
});
