/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import store from '../src/redux/store';
import { Actions } from '../src/redux/actions';
import sampleCollections from '../sample-data/collections.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('State switches loaded on ActionAppSetLoaded', () => {
  const state_before = store.getState();
  expect(state_before.loaded).toEqual(false);

  store.dispatch(Actions.appSetLoaded());
  const state_after = store.getState();
  expect(state_after.loaded).toEqual(true);
});

it('State notes added on ActionNotesAddMultiple', () => {
  
});

it('State collections added on ActionCollectionsAddMultiple', () => {
  // const state_before = store.getState();
  // expect(state_before.collections.length).toEqual(0);

  // store.dispatch(Actions.collectionsAddMultiple(collections));
  // const state_after = store.getState();
  // expect(state_after.loaded).toEqual(true);
});
