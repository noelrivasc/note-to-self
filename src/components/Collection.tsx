import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { Actions } from '../redux/actions';
import { connect } from 'react-redux';
import theme from '../globals/theme';
import { PanelNames } from '../globals/types';

export type CollectionData = {
  uuid: string,
  name: string,
  imageUrl: string,
  notes: string[]
}

interface CollectionProps extends CollectionData {
  dispatch: Function
};

class Collection extends Component<CollectionProps, {}> {
  constructor(props: CollectionProps) {
    super(props);

    this.state = {
      // The size and position of images within
      // the collection containers
      collectionImageSize: 250,
      collectionImageLeft: 0,
      collectionImageTop: 0,
    };
  }

  render() {
    const stylesheet = StyleSheet.create({
      collectionContainer: {
        width: '100%',
        height: 300,
      },
      collectionCardWrapper: {
        flex: 1,
        padding: 15,
      },
      collectionCard: {
        flex: 1,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: theme.palette.base_0,
        backgroundColor: theme.palette.base_1,
      }
    });

    return (
      <View style={ stylesheet.collectionContainer }>
        <View style={ stylesheet.collectionCardWrapper }>
          <Pressable style={ stylesheet.collectionCard } key={ `collection-${this.props.uuid}` } onPress={ () => { 
            this.props.dispatch(Actions.collectionSetActive(this.props.uuid));
            this.props.dispatch(Actions.appShowPanel(PanelNames.collectionList));
          }}>
            <Text>{ this.props.name }</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

export default connect()(Collection);
