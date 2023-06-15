import store from './redux/store';
import { Actions } from './redux/actions';


// Set the content URLs
// Load the contents and get a promise for each
// On promise.all dispatch the actions to populate
// the store with the content, and to set the state
// to "ready" so the app renders

export default class ContentLoader {
  static loadCollections() {
    const collectionsUrl = 'https://note-to-self-app.s3.us-west-2.amazonaws.com/collections.json';
    return fetch(collectionsUrl)
      .then((response) => {
        if(!response.ok) {
          throw new Error('The Collections request failed');
        }

        return response.json();
      })
      .then((data) => {
        store.dispatch(Actions.collectionsAddMultiple(data.collections));
        return data;
      })
      .catch((error) => {
        // TODO: figure out a better way to handle errors in React Native
        console.error(`Unhandled error: ${error.message}`);
      })
  }

  static loadNotes() {
    const notesUrl = 'https://note-to-self-app.s3.us-west-2.amazonaws.com/notes.json';
    return fetch(notesUrl)
      .then((response) => {
        if(!response.ok) {
          throw new Error('The Notes request failed');
        }

        return response.json();
      })
      .then((data) => {
        store.dispatch(Actions.notesAddMultiple(data.notes));
        return data;
      })
      .catch((error) => {
        // TODO: figure out a better way to handle errors in React Native
        console.error(`Unhandled error: ${error.message}`);
      })
  }

  static loadAll() {
    return Promise.all([ContentLoader.loadCollections(), ContentLoader.loadNotes()])
      .then((values) => {
        store.dispatch(Actions.appSetLoaded());
        return values;
      })
  }
};
