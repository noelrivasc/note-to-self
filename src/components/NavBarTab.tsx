import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import theme from '../globals/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavBarTabProps {
  icon: IconDefinition,
  label: string
};

class NavBarTab extends Component<NavBarTabProps, {}> {
  constructor(props: NavBarTabProps) {
    super(props);
  }

  render() {
    const stylesheet = StyleSheet.create({
      tabContainer: {
        flex: 1,
      },
      tab: {
        alignItems: 'center',
        paddingTop: 15,
      },
      tabIcon: {
        marginBottom: 5,
        color: theme.palette.neutral,
      },
      tabLabel: {
        color: theme.palette.accent_4,
      }
    });

    return (
      <View style={ stylesheet.tabContainer }>
        <View style={ stylesheet.tab }>
          <FontAwesomeIcon style={ stylesheet.tabIcon } size={ 24 } icon={ this.props.icon }/>
          <Text style={ stylesheet.tabLabel } >{ this.props.label }</Text>
        </View>
      </View>
    );
  }
}

export default NavBarTab;
