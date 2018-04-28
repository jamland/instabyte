import React, { Component } from 'react';
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
import Avatar from '../../../assets/images/users/01.jpg';
import Post from '../../../assets/images/posts/01.jpg';

const win = Dimensions.get('window');

export default class FeedPost extends Component {
  render() {
    const { data } = this.props;
    const author = this.props.users.filter( user => user.id === data.authorId)[0] || {}

    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAAH6Nf8rAAAABGdBTUEAALGPC/xhBQAAAD9JREFUGBlj/A8EDEDABCLAACQC5jHC5EDCcA5cIZwBl4Loh5BwWWRB4lVi1U68IFaLkF0CY2M1EiaJTA+gQgApmhwFHvIPpAAAAABJRU5ErkJggg==" };
    const uri = data.uri;
    const uriAuthor = author.avatar;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <ImageWithCache
            style={styles.avatar}
            {...{preview, uri: uriAuthor}}
          />
          <Text style={styles.headerAuthorName}>
            {author.name}
          </Text>

          <InstaFont
            style={styles.menuToggler}
            name="kebab"
          />
        </View>

        <ImageWithCache
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: win.width,
            height: win.width,
          }}
          {...{preview, uri}}
        />

        <View style={styles.footer}>
          <View style={styles.actions}>
            <InstaFont
              name="heart-o"
              size={40}
            />
            <InstaFont
              name="bubble-o"
              size={30}
            />
            <InstaFont
              name="plane-o"
              size={40}
            />
          </View>

          <Text style={styles.likes}>{data.likes} likes</Text>

          <View style={styles.commentView}>
            <Text style={styles.commentAuthor}>UserName</Text>
            <Text style={styles.commentText}>lorem ipsum....</Text>
          </View>

          <View style={styles.addCommentView}>
            <Image
              style={styles.avatar}
              source={Avatar}
            />
            <Text style={styles.addCommentBtn}>Add a comment....</Text>
          </View>

          <Text style={styles.timeStamp}>2 HOURS AGO</Text>
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
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
  },
  commentText: {
    fontSize: 16,
  },
  addCommentBtn: {
    fontSize: 16,
    color: colors.actions,
  },
  addCommentView: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  timeStamp: {
    color: colors.actions,
    fontSize: 14,
  }
});
