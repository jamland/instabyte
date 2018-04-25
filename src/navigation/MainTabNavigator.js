import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { colors } from '../config/Theme';
import InstaFont from '../components/InstaFont';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import LikesScreen from '../screens/LikesScreen';
import ProfileScreen from '../screens/ProfileScreen';


const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#C6C6C6',
  },
  headerTintColor: 'black',
}

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps,
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'home',
          size: 30,
        })
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'search',
          size: 45,
        })
      },
    },
    CreatePost: {
      screen: CreatePostScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(Entypo, {
          name: 'squared-plus',
          size: 40,
        })
      },
    },
    Likes: {
      screen: LikesScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'heart',
          size: 25,
        })
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(Entypo, {
          name: 'user',
          size: 25,
        })
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({

    }),
    initialRouteName: 'Home',

    tabBarOptions: {
      inactiveTintColor: colors.tabIconDefault,
      activeTintColor: colors.tabIconSelected,
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      showLabel: false,
      tabStyle: {

      },
      style: {
        backgroundColor: colors.backgroundGrey,
      },
    }
  }
);
