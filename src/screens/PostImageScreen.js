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
      onPress={() => this.props.postImage()}
    />),
  });

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
      
      if (result) navigation.navigate('Home');
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
