import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import Collection, { CollectionData } from './Collection';
import {
  Dimensions,
  Platform,
  StyleSheet, 
  ScrollView,
} from 'react-native';
import theme from '../globals/theme';

interface HomeProps {
  dispatch: Function,
  collections: CollectionData[]
};

class Home extends Component<HomeProps, {}> {
  render() {
    const collectionElements = this.props.collections.map( (collection) => {
      return (
        <Collection {...collection} />
      )
    });

    const stylesheet = this.getStyleSheet();
    return (
      <ScrollView style={ stylesheet.layoutContainer }>
        { collectionElements }
      </ScrollView>
    );
  }

  getStyleSheet() {
    let height;

    // HACK ALERT!
    if(Platform.OS == 'android') {
      height = Dimensions.get('window').height - theme.navBarHeight - 22;
    }
    else {
      height = Dimensions.get('window').height - theme.navBarHeight + 2;
    }

    const stylesheet = StyleSheet.create({
      layoutContainer: {
        position: 'absolute',
        top: 0,
        height: height,
        width: '100%',
        backgroundColor: theme.palette.base_1,
      },
    });

    return stylesheet;
  }
};


const mapStateToProps = (state: State)  => {
  const collections = Array.from(state.collections).map((c) => {
    return c[1];
  })

  return { collections };
};

export default connect(mapStateToProps)(Home);
