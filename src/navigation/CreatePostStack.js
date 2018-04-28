import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../config/Theme';

import PickImageScreen from '../screens/PickImageScreen';
import CaptureImageScreen from '../screens/CaptureImageScreen';
import PostImageScreen from '../screens/PostImageScreen';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

class TabBar extends Component {
  renderItem = (route, index) => {
    const {
      navigation,
      jumpToIndex,
    } = this.props;

    const focused = index === navigation.state.index;
    const color = focused ? activeTintColor : inactiveTintColor;
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
          <Text style={{ color }}>{route.routeName.toUpperCase()}</Text>
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

const CreateImageTabs = TabNavigator(
  {
    Gallery: {
      screen: PickImageScreen,
      navigationOptions,
    },

    Photo: {
      screen: CaptureImageScreen,
      navigationOptions: {
        ...navigationOptions,
        headerRight: null,
      },
    },

  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBar,
    animationEnabled: true,
    swipeEnabled: true,
    headerMode: 'none',
    // initialRouteName: 'Photo',
    navigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
        >
          <Ionicons
            name="ios-close"
            size={50}
            color={colors.textColor}
            style={{marginLeft: 20,}}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('PostImage')}
        >
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>
      ),
    }),
  }
);

const CreatePostStack = StackNavigator(
  {
    CreateImage: {
      screen: CreateImageTabs,
      navigationOptions,
    },
    PostImage: {
      screen: PostImageScreen,
      navigationOptions,
    },
  },
  {
    // initialRouteName: 'PostImage',
    headerMode: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);


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
  nextBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
  },
});


export default CreatePostStack;
