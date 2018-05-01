import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import withProvider from './redux/withProvider'
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';

class AppView extends Component {
  render() {
    return (
      <ActionSheetProvider>
        <View style={styles.container}>
          <RootNavigation />
        </View>
      </ActionSheetProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withProvider(AppView);
