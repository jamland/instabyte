import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { colors } from '../config/Theme';

export default class TabBarPhoto extends Component {
  renderItem = (route, index) => {
    const {
      navigation,
      jumpToIndex,
    } = this.props;

    const focused = index === navigation.state.index;
    const color = focused ? activeTintColor : inactiveTintColor;

    const routeName = route.routeName.includes('Gallery')
      ? 'Gallery'
      : 'Photo'

    return (
      <TouchableWithoutFeedback
        key={route.key}
        style={styles.tab}
        onPress={() => jumpToIndex(index)}
      >
        <View style={[
          styles.tab,
          focused ? styles.activeTab : null,
        ]}>
          <Text style={{ color }}>{routeName.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {
      navigation,
    } = this.props;

    const {
      routes,
    } = navigation.state;

    return (
      <SafeAreaView style={{backgroundColor: colors.backgroundGrey}}>
        <View style={styles.tabBar}>
          {routes && routes.map(this.renderItem)}
        </View>
      </SafeAreaView>
    );
  }
}

const activeTintColor = colors.primary;
const inactiveTintColor = colors.lightText;
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundGrey,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});
