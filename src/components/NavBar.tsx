import React, { Component } from 'react';
import { State } from '../redux/store';
import { connect } from 'react-redux';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import theme from '../globals/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons';


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
        height: theme.navBarHeight,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'black',
      },
      tabContainer: {
        flex: 1,
      },
      tab: {
        alignItems: 'center',
        paddingTop: 15
      },
      tabIcon: {
        marginBottom: 5,
        color: 'red'
      },
      tabText: {
        color: 'green',
      }
    });

    return (
      <View style={ stylesheet.layoutContainer }>
        <View style={ stylesheet.tabContainer }>
          <Pressable>
            <View style={ stylesheet.tab }>
              <FontAwesomeIcon style={ stylesheet.tabIcon } size={ 24 } icon={ faHouse }/>
              <Text>T</Text>
            </View>
          </Pressable>
        </View>

        <View style={ stylesheet.tabContainer }>
          <Pressable>
            <View style={ stylesheet.tab }>
              <FontAwesomeIcon style={ stylesheet.tabIcon } size={ 24 } icon={ faClockRotateLeft }/>
              <Text>Label</Text>
            </View>
          </Pressable>
        </View>

        <View style={ stylesheet.tabContainer }>
          <Pressable>
            <View style={ stylesheet.tab }>
              <FontAwesomeIcon style={ stylesheet.tabIcon } size={ 24 } icon={ faGear }/>
              <Text>Label</Text>
            </View>
          </Pressable>
        </View>
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
