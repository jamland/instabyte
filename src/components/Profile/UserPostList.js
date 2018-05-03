import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors} from '../../config/Theme';

import ImageComponent from '../common/ImageComponent';
const win = Dimensions.get('window');

export default class UserPostList extends Component {
  render() {

    const renderPosts = this.props.userPosts.map( (item, index) => {
      return (
        <View
          key={index}
          style={styles.postItem}
        >
          <ImageComponent
            uri={item.uri}
            style={styles.postImage}
          />
        </View>
      )
    })

    return (
      <ScrollView style={styles.container}>
        <View style={styles.gallery}>
          {renderPosts}
        </View>
      </ScrollView>
    );
  }
}

const galleryItemSize = (win.width / 3) - 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  postItem: {
    padding: 1,
  },
  postImage: {
    height: galleryItemSize,
    width: galleryItemSize,
    alignSelf: 'stretch',
  },
});
