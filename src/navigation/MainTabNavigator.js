import React from 'react';
import {
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { colors } from '../config/Theme';
import InstaFont from '../components/InstaFont';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LikesScreen from '../screens/LikesScreen';

import CreatePostStack from './CreatePostStack';
import ProfileStack from './ProfileStack';
import UserAvatar from '../components/common/UserAvatar';


const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps,
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:  ({ navigation }) => ({
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'home',
          size: 30,
        }),
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.navigate("Photo")}
          >
            <InstaFont
              name="camera"
              size={30}
              style={{marginLeft: 10, marginBottom: 10,}}
            />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity
            onPress={() => {}}
          >
            <InstaFont
              name="plane"
              size={25}
              style={{marginRight: 15, marginBottom: 10,}}
            />
          </TouchableOpacity>
        ),
      }),
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
      screen: CreatePostStack,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarVisible: false,
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
      screen: ProfileStack,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: (<UserAvatar />),
      },
    },
  },
  {
    // initialRouteName: 'Profile',
    navigationOptions: ({ navigation }) => ({

    }),
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'screen',

    tabBarOptions: {
      inactiveTintColor: colors.tabIconDefault,
      activeTintColor: colors.tabIconSelected,
      showLabel: false,
      style: {
        backgroundColor: colors.backgroundGrey,
      },
    }
  }
);
