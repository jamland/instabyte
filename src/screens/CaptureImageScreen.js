import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as PostActions from '../actions/Post.actions';
import * as ProfileActions from '../actions/Profile.actions';

import CameraComponent from '../components/Post/Camera';

class CaptureImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo',
  };

  render() {
    const parentRoute = this.props.navigation.state.routeName

    return (
      <View style={styles.container}>

        <CameraComponent
          navigation={this.props.navigation}
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
  },
});


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setImageForPost: (img) => dispatch(PostActions.setImageForPost(img)),
  setImageForAvatar: (img) => dispatch(ProfileActions.setImageForAvatar(img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CaptureImageScreen);
