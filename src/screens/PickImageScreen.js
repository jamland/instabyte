import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../config/Theme';
import * as PostActions from '../actions/Post.actions';
import * as ProfileActions from '../actions/Profile.actions';

import DeviceGallery from '../components/Post/DeviceGallery';

class PickImageScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  };

  render () {
    const parentRoute = this.props.navigation.state.routeName

    return (
      <View style={styles.container}>

        <DeviceGallery
          setImageForPost={(img) => this.props.setImageForPost(img)}
          setImageForAvatar={(img) => this.props.setImageForAvatar(img)}
          parentRoute={parentRoute}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
});



const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setImageForPost: (img) => dispatch(PostActions.setImageForPost(img)),
  setImageForAvatar: (img) => dispatch(ProfileActions.setImageForAvatar(img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickImageScreen);
