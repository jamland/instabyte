import React from 'react';
import {
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { colors } from '../config/Theme';
import CreateAvatarStack from './CreateAvatarStack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const ProfileStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions,
    },
    CreateAvatar: {
      screen: CreateAvatarStack,
      navigationOptions,
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions,
    },
  },
  {
    // initialRouteName: 'CreateAvatar',
    headerMode: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default ProfileStack;
