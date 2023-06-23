import { NoteAudioText1Data } from './note-types';
import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  LayoutRectangle,
} from 'react-native';
import theme from '../../globals/theme';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface NoteAudioText1State {
  imageSize: number,
  imageLeft: number,
  imageTop: number,
  audioPlaying: boolean
};

/**
 * ABOUT THE CLASS NAME
 * Using a number as part of the class name may seem odd.
 *
 * The reason is that I may want to have different versions
 * of a similar component, but I'd rather not deprecate old versions,
 * have to keep content up to date or add logic to each component to 
 * respond to variations all.
 *
 * Keeping multiple versions of similar components active
 * could be a problem if the list grows too large, and could
 * also be a problem in terms of usability — but let's not get
 * ahead of ourselves here.
 */
export default class NoteAudioText1 extends Component<NoteAudioText1Data, NoteAudioText1State> {
  constructor(props: NoteAudioText1Data) {
    super(props);

    this.state = {
      imageSize: 250,
      imageLeft: 0,
      imageTop: 0,
      audioPlaying: false,
    };

    this.onLayout = this.onLayout.bind(this);
  }

  render() {
    const stylesheet = StyleSheet.create({
      top: {
        height: '50%',
      },
      bottom: {
        height: '50%',
      },
      // TODO: check if this container is really
      // necessary, or if the image can be positioned directly
      imageContainer: {
        width: this.state.imageSize,
        height: this.state.imageSize,
        position: 'absolute',
        left: this.state.imageLeft,
        top: this.state.imageTop,
      },
      image: {
        width: this.state.imageSize,
        height: this.state.imageSize,
      },
      audioPlayer: {
        position: 'absolute',
        bottom: 15,
        left: '60%',
        borderRadius: 100,
        width: 60,
        height: 60,
        paddingLeft: 15,
        paddingTop: 12,
        borderWidth: 2,
        borderColor: theme.palette.accent_4,
        backgroundColor: theme.palette.accent_2,
      },
      audioPlayerIcon: {
        color: theme.palette.neutral,
      },
      textContainer: {
        padding: 20,
      },
      text: {
        fontSize: 24,
      }
    });

    return (
      <View onLayout={ (event) => {
        this.onLayout(event.nativeEvent.layout);
      }}>
        <View style={ stylesheet.top }>
          <View style={ stylesheet.imageContainer }>
            <Image style={ stylesheet.image } source={{ uri: this.props.imageUrl }} />
          </View>
          <View style={ stylesheet.audioPlayer }>
            <Pressable onPress={ () => {
              this.toggleAudioPlay();
            }}>
              {
                (this.state.audioPlaying) ?
                  <FontAwesomeIcon style={ stylesheet.audioPlayerIcon } icon={ faPause } size={ 32 } /> :
                  <FontAwesomeIcon style={ stylesheet.audioPlayerIcon } icon={ faPlay } size={ 32 } />
              }
            </Pressable>
          </View>
        </View>
        <View style={ stylesheet.bottom }>
          <ScrollView style={ stylesheet.textContainer }>
            <Text style={ stylesheet.text } >{ this.props.text }</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  onLayout(layout: LayoutRectangle) {
    const imageSize = Math.max(Math.round(layout.width), Math.round(layout.height/2)) - 50;
    const imageLeft = Math.round((layout.width - imageSize) / 2);
    const imageTop = Math.round((( layout.height/2 ) - imageSize) / 2);

    this.setState({
      imageSize,
      imageLeft,
      imageTop
    });
  }

  toggleAudioPlay() {
    this.setState({
      audioPlaying: !this.state.audioPlaying
    });
  }
}
