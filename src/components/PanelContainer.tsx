import React, { Component } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import theme from '../globals/theme';

import {
  StyleSheet,
  Dimensions,
  View,
  Platform,
} from 'react-native';

export default class PanelContainer extends Component<PropsWithChildren, {}> {
  render() {
    return (
      <SafeAreaInsetsContext.Consumer>
        { (insets) =>  {
          let top, height;

          if(insets) {
            top = insets.top;
            console.log(Platform.OS);
            console.log(insets.top);
            height = Dimensions.get('window').height -insets.bottom - insets.top - theme.navBarHeight;

            // HACK ALERT!
            // Inset arithmetics aren't working properly for
            // Android but hardcoding a number to make 'em match
            // is not an acceptable way to solve the problem.
            // See (and solve) issue #1.
            // https://github.com/noelrivasc/note-to-self/issues/1
            if(Platform.OS == 'android') {
              height -= 23;
            }
          }
          else {
            top = 0;
            height = Dimensions.get('window').height;
          }
          const stylesheet = StyleSheet.create({
            panelContainer: {
              position: 'absolute',
              top,
              height,
              width: '100%',
              pointerEvents: 'box-none',
            }
          });
          
          return (
            <View style={stylesheet.panelContainer}>
              { this.props.children }
            </View>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    );
  }
};
