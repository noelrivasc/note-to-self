import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import theme, { getPanelHeight } from '../globals/theme';
import {
  StyleSheet, 
  Dimensions,
  View,
  Text,
  Pressable,
  StatusBar,
} from 'react-native';

interface HomeProps {
  dispatch: Function
};

class Home extends Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    const stylesheet = StyleSheet.create({
      layoutContainer: {
        position: 'absolute',
        width: '100%',
        height: getPanelHeight(),
      },
    });
    return (
      <View style={stylesheet.layoutContainer}>
        <Text>This is Home.</Text>
        <Pressable onPress={ () => console.log('HANDLE THE CLICK IN HOME. This should dispatch() a show collection action!') }>
          <Text >Show collection X</Text>
        </Pressable>
      </View>
    );
  }
};


const mapStateToProps = (state: State)  => {
  return {};
};

export default connect(mapStateToProps)(Home);
