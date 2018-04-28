import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as PostActions from '../actions/Post.actions';
import {colors} from '../config/Theme';

import PostImageComponent from '../components/Post/PostImageComponent';

class ShareImageScreen extends Component {
  static navigationOptions = (props) => ({
    title: 'Share To',
    headerBackTitle: 'Back',
    headerRight: (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.nextBtn}>Share</Text>
      </TouchableOpacity>
    ),
    headerLeft: (<MaterialCommunityIcons
      name="arrow-left"
      style={styles.backBtn}
      onPress={() => props.navigation.goBack()}
    />),
  });

  render() {

    return (
      <View style={styles.container}>

        <PostImageComponent
          image={this.props.image}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
  },
  backBtn: {
    color: colors.textColor,
    marginLeft: 10,
    fontSize: 30,
  }
});

const mapStateToProps = (state) => ({
  image: state.post.imageForPost,
});

const mapDispatchToProps = (dispatch) => ({
  // setImageForPost: (img) => dispatch(PostActions.setImageForPost(img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareImageScreen);
