import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as PostActions from '../actions/Post.actions';

import CameraComponent from '../components/Post/Camera';

class CaptureImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo',
  };

  render() {
    return (
      <View style={styles.container}>

        <CameraComponent
          navigation={this.props.navigation}
          setImageForPost={(img) => this.props.setImageForPost(img)}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CaptureImageScreen);
