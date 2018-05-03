import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SearchScreen component</Text>
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
