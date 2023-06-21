import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import { Actions } from '../redux/actions';
import { CollectionData } from './Collection';
import {
  StyleSheet, 
  View,
  Text,
  Pressable,
} from 'react-native';
import { PanelNames } from '../globals/types';

interface HomeProps {
  dispatch: Function,
  collections: CollectionData[]
};

class Home extends Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    const stylesheet = StyleSheet.create({
      layoutContainer: {
        width: '100%',
        flex: 1,
      },
      collectionContainer: {
        padding: 5,
        backgroundColor: 'teal',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
      }
    });

    const collectionElements = this.props.collections.map((c) => {
      return (
        <Pressable key={ `collection-${c.uuid}` } onPress={ () => { 
          this.props.dispatch(Actions.collectionSetActive(c.uuid));
          this.props.dispatch(Actions.appShowPanel(PanelNames.collectionList));
        }}>
          <View style={ stylesheet.collectionContainer }>
            <Text>{ c.name }</Text>
          </View>
        </Pressable>
      )
    });

    return (
      <View style={stylesheet.layoutContainer}>
        <Text>This is Home.</Text>
        { collectionElements }
      </View>
    );
  }
};


const mapStateToProps = (state: State)  => {
  const collections = Array.from(state.collections).map((c) => {
    return c[1];
  })

  return { collections };
};

export default connect(mapStateToProps)(Home);
