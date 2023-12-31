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
import Note from './src/components/Note';
import { PanelNames } from './src/globals/types';
import theme from './src/globals/theme';

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
              <Panel color={ theme.palette.base_2 } name={PanelNames.settings} title="Settings">
                <Settings />
              </Panel>

              <Panel color={ theme.palette.accent_3 } name={PanelNames.history} title="History">
                <History />
              </Panel>

              {/* TODO: pass the name of the collection being
                  loaded to the panel */}
              <Panel color={ theme.palette.base_1 }name={PanelNames.collectionList} title="Collection">
                <CollectionList />
              </Panel>
            </PanelContainer>

            <NavBar />
            <Note />
          </SafeAreaView>

        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
