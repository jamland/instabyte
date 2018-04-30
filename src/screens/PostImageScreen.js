import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as PostActions from '../actions/Post.actions';
import {colors} from '../config/Theme';

import PostImageComponent from '../components/Post/PostImageComponent';

const ShareImageScreenPointer = {}
class ShareImageScreen extends Component {
  static navigationOptions = (props) => ({
    title: 'Share To',
    headerBackTitle: 'Back',
    headerRight: (
      <TouchableOpacity
        onPress={() => ShareImageScreenPointer.this.postImage()}
      >
        <Text style={styles.nextBtn}>Share</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
      <MaterialCommunityIcons
        name="arrow-left"
        style={styles.backBtn}
        onPress={() => props.navigation.goBack(null)}
      />
    ),
  });


  componentWillMount () {
    ShareImageScreenPointer.this = this;
  }

  state = {
    caption: ''
  }

  setCaptionHandler = (caption) => {
    this.setState({caption})
  }

  postImage = () => {
    this.props.postImage({
      caption: this.state.caption,
    }).then((result) => {

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'CreateImage' })],
      });
      this.props.navigation.dispatch(resetAction);

      if (result) this.props.navigation.navigate('Home');
    });
  }

  render() {

    return (
      <View style={styles.container}>

        <PostImageComponent
          image={this.props.image}
          caption={this.state.caption}
          setCaptionHandler={ text => this.setCaptionHandler(text)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  postImage: (details) => dispatch(PostActions.postImage(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareImageScreen);
