import React, { Component } from 'react';
import { State } from '../redux/store';
import { connect } from 'react-redux';
import {
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import theme from '../globals/theme';
import { faHouse, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import NavBarTab from './NavBarTab';
import { Actions } from '../redux/actions';
import { PanelNames } from '../globals/types';

interface NavBarProps {
  dispatch: Function
};

class NavBar extends Component<NavBarProps, {}> {
  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    const stylesheet = StyleSheet.create({
      layoutContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: theme.navBarHeight - 2,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: theme.palette.base_2,
        backgroundColor: theme.palette.base_0,
      },
      pressable: {
        flex: 1,
      }
    });

    return (
      <View style={ stylesheet.layoutContainer }>

        <Pressable style={ stylesheet.pressable } onPress={ () => {
          this.props.dispatch(Actions.appGoHome());
        }}>
          <NavBarTab label='Home' icon={ faHouse } />
        </Pressable>

        <Pressable style={ stylesheet.pressable } onPress={ () => {
          this.props.dispatch(Actions.appShowPanel(PanelNames.history));
        }}>
          <NavBarTab label='History' icon={ faClockRotateLeft } />
        </Pressable>

        <Pressable style={ stylesheet.pressable } onPress={ () => {
          this.props.dispatch(Actions.appShowPanel(PanelNames.settings));
        }}>
          <NavBarTab label='Settings' icon={ faGear } />
        </Pressable>
      </View>
    );
  }
}

const mapStateToProps = (state: State)  => {
  return {};
};

export default connect(
  mapStateToProps
)(NavBar);
