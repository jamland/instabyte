import React, { Component } from 'react';
import format from 'date-fns/format';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Image as ImageWithCache} from "react-native-expo-image-cache";
import {colors} from '../../config/Theme';

import InstaFont from '../InstaFont';
import Comments from './Comments';
import ImageComponent from '../common/ImageComponent';

const win = Dimensions.get('window');

export default class FeedPost extends Component {
  render() {
    const { data } = this.props;
    const author = this.props.users.filter( user => user.id === data.authorId)[0] || {}

    const uri = data.uri;
    const uriAuthor = author.avatar;

    const isLocalFile = uri.startsWith('assets-library:')
      ? true
      : false;
    const isLocalAvatar = author.avatar.startsWith('assets-library:')
      ? true
      : false;

    const createdDate = format(data.created, 'Do MMMM');

    const isPostLiked = this.props.currentUser !== null
      ? data.likes.filter( userId => userId === this.props.currentUser.id)[0] >= 0
      : false;

    const avatar = this.props.currentUser !== null
      ? this.props.currentUser.avatar
      : null;

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <ImageComponent
            style={styles.avatar}
            uri={uriAuthor}
          />
          <Text style={styles.headerAuthorName}>
            {author.username}
          </Text>
{/*
          <InstaFont
            style={styles.menuToggler}
            name="kebab"
          /> */}

        </View>

        <ImageComponent
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: win.width,
            height: win.width,
          }}
          uri={uri}
        />

        <View style={styles.footer}>
          <View style={styles.actions}>

            <View
              style={styles.likeBtn}
            >
              <InstaFont
                name={isPostLiked ? "heart" : "heart-o"}
                style={isPostLiked ? styles.liked : styles.notLiked}
                size={isPostLiked ? 32 : 40}
              />
            </View>

            <InstaFont
              name="bubble-o"
              size={30}
            />
            <InstaFont
              name="plane-o"
              size={40}
            />
          </View>

          <Text style={styles.likes}>{data.likes.length} likes</Text>

          {avatar &&
            <Comments
              data={data.comments}
              users={this.props.users}
              userAvatar={avatar}
            />
          }

          <Text style={styles.timeStamp}>
            {createdDate}
          </Text>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    flex: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'stretch',
    marginRight: 10,
  },
  headerAuthorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuToggler: {
    color: colors.actions,
    marginLeft: 'auto',
    fontSize: 25,
  },
  footer: {
    padding: 10,
  },
  captionView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  captionText: {
    fontSize: 16,
  },
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStamp: {
    color: colors.actions,
    fontSize: 14,
  },
  likeBtn: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liked: {
    color: colors.heart,
  }
});
