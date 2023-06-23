import React, { Component } from 'react';
import type { PropsWithChildren } from 'react';
import { State } from '../redux/store';
import { Actions } from '../redux/actions';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export interface PanelProps {
  dispatch: Function,
  name: string,
  title: string,
  show?: boolean,
  color?: string,
};

class Panel extends Component<PropsWithChildren<PanelProps>, {}> {
  public static defaultProps = {
   color: 'teal',
   show: false
  }

  constructor(props: PanelProps) {
   super(props); 
  }

  render() {
    const left = this.props.show ? '0%' : '105%';
    const stylesheet = StyleSheet.create({
      layoutContainer: {
        position: 'absolute',
        left,
        width: '100%',
        height: '100%',
        backgroundColor: this.props.color,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 25,
      },
      iconContainer: {
        padding: 12,
        width: 48,
        flex: 0,
      },
      titleContainer: {
        flex: 1,
        padding: 12,
      },
      title: {
        fontSize: 20,
        lineHeight: 22,
      },
      notesContainer: {
      }
    });

    return (
      <View style={ stylesheet.layoutContainer }>

        <View style={ stylesheet.header }>
          <Pressable style={ stylesheet.iconContainer } onPress={ () => {
            this.props.dispatch(Actions.appGoHome());
          }}>
            <FontAwesomeIcon icon={ faArrowLeft } size={ 24 } />
          </Pressable>

          <View style={ stylesheet.titleContainer }>
            <Text style={ stylesheet.title }>{ this.props.title }</Text>
          </View>
        </View>
        
        <View style={ stylesheet.notesContainer }>
          { this.props.children }
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state: State, ownProps: PropsWithChildren<PanelProps>)  => {
  const show = ownProps.name == state.showPanel;
  return { show };
};

export default connect(
  mapStateToProps
)(Panel);
