import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LikesScreen extends Component {
  static navigationOptions = {
    title: 'Likes',
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LikesScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
