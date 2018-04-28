import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

export default class PostImageComponent extends Component {
  state = {
    caption: ''
  }

  render() {
    const uri = this.props.image.uri;

    return (
      <View style={styles.container}>

        <View style={styles.postDetails}>
          <Image
            style={styles.imagePreview}
            source={{uri}}
          />
          <TextInput
            style={styles.caption}
            onChangeText={(text) => this.setState({caption: text})}
            value={this.state.caption}
            blurOnSubmit={true}
            underlineColorAndroid={"transparent"}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // postDetails: {
  //   flexDirection: 'row',
  //   padding: 10,
  // }
  imagePreview: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  caption: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
