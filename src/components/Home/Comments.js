import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../../config/Theme';

import Avatar from '../../../assets/images/users/01.jpg';

export default class Comments extends Component {
  render() {
    if (!this.props.data.length) return null;

    const renderComments = this.props.data.map( (item, index) => {
      const author = this.props.users.filter( user => user.id === item.authorId)[0] || {}

      return (
        <Text
          style={styles.commentView}
          key={index}
        >
          <Text style={styles.commentAuthor}>
            {author.name + ' '}
          </Text>
          <Text style={styles.commentText}>
            {item.text}
          </Text>
        </Text>
      )
    })

    return (
      <View style={styles.container}>

        {renderComments}

        <View style={styles.addCommentView}>
          <Image
            style={styles.avatar}
            source={Avatar}
          />
          <Text style={styles.addCommentBtn}>Add a comment....</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  commentAuthor: {
    fontWeight: 'bold',
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
  avatar: {
    flex: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'stretch',
    marginRight: 10,
  },
});
