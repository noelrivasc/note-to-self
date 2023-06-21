import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Panel from './src/components/Panel';
import Home from './src/components/Home';
import NavBar from './src/components/NavBar';
import CollectionList from './src/components/CollectionList';
import Settings from './src/components/Settings';
import History from './src/components/History';
import { PanelNames } from './src/globals/types';

class App extends Component {
  // TODO:
  // - Connect the app to the store, wire the "ready" property
  // - show a "loading" screen while the content loads
  // - show the app (or a text) once the content is loaded

  render()  {
    const stylesheet = StyleSheet.create({
      appContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }
    });
      return (
        <Provider store={ store }>
          <SafeAreaView style={ stylesheet.appContainer }>
            <Home />

            <Panel name={PanelNames.settings}>
              <Settings />
            </Panel>
            <Panel name={PanelNames.history}>
              <History />
            </Panel>
            <Panel name={PanelNames.collectionList}>
              <CollectionList />
            </Panel>

            <NavBar />
          </SafeAreaView>
        </Provider>
    );
  }

}

export default App;
