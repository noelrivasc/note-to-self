import React, { Component } from 'react';
import type { PropsWithChildren } from 'react';
import { State } from '../redux/store';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
} from 'react-native';
import { getPanelHeight } from '../globals/theme';

export interface PanelProps extends PropsWithChildren {
  name: string,
  show?: boolean,
  color?: string,
};

class Panel extends Component<PanelProps, {}> {
  public static defaultProps = {
   color: 'red',
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
        height: getPanelHeight(),
        backgroundColor: this.props.color,
        opacity: 0.7
      },
    });

    return (
      <View style={ stylesheet.layoutContainer }>
        { this.props.children }
      </View>
    );
  }
};

const mapStateToProps = (state: State, ownProps: PanelProps)  => {
  const show = ownProps.name == state.showPanel;
  return { show };
};

export default connect(
  mapStateToProps
)(Panel);
