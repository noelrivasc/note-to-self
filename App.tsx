import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  StyleSheet,
} from 'react-native';

import Panel from './src/components/Panel';
import PanelContainer from './src/components/PanelContainer';
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

  render()  {
    const stylesheet = StyleSheet.create({
      appContainer: {
        flex: 1,
      }
    });

    return (
      <Provider store={ store }>
        <SafeAreaProvider>

          <SafeAreaView style={ stylesheet.appContainer }>
            <Home />

            <PanelContainer>
              <Panel name={PanelNames.settings}>
                <Settings />
              </Panel>

              <Panel name={PanelNames.history}>
                <History />
              </Panel>

              <Panel color="coral" name={PanelNames.collectionList}>
                <CollectionList />
              </Panel>
            </PanelContainer>

            <NavBar />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
