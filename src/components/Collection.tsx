import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  LayoutRectangle,
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

interface CollectionState {
  collectionImageSize: number,
  collectionImageLeft: number,
  collectionImageTop: number
};

class Collection extends Component<CollectionProps, CollectionState> {
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
        height: 270,
      },
      collectionCardWrapper: {
        flex: 1,
        padding: 15,
      },
      collectionCard: {
        flex: 1,
      },
      collectionImage: {
        left: this.state.collectionImageLeft,
        width: this.state.collectionImageSize,
        height: this.state.collectionImageSize,
      },
      text: {
        fontSize: 24,
        color: theme.palette.accent_4,
        marginTop: 6,
        textAlign: 'center',
      }
    });

    return (
      <View style={ stylesheet.collectionContainer }>
        <View style={ stylesheet.collectionCardWrapper }>
          <Pressable 
            style={ stylesheet.collectionCard } 
            key={ `collection-${this.props.uuid}` } 
            onPress={ () => { 
              this.props.dispatch(Actions.collectionSetActive(this.props.uuid));
              this.props.dispatch(Actions.appShowPanel(PanelNames.collectionList));
            }}
            onLayout={ (event) => {
              this.onLayout(event.nativeEvent.layout);
            }}
          >
            <Image style={ stylesheet.collectionImage } source={{ uri: this.props.imageUrl }} />
            <Text style={ stylesheet.text }>{ this.props.name }</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  onLayout(layout: LayoutRectangle) {
    // Image has height - 30px
    const collectionImageSize = layout.height - 40;
    const collectionImageLeft = Math.round(( layout.width - collectionImageSize ) / 2);

    this.setState({
      collectionImageSize,
      collectionImageLeft,
    });
  }
}

export default connect()(Collection);
