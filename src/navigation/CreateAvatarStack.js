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

import TabBarPhoto from './TabBarPhoto';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const CreateAvatarTabs = TabNavigator(
  {
    AvatarFromGallery: {
      screen: PickImageScreen,
      navigationOptions,
    },

    AvatarFromCamera: {
      screen: CaptureImageScreen,
      navigationOptions: {
        ...navigationOptions,
        headerRight: null,
      },
    },

  },
  {
    // initialRouteName: 'Photo',
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarPhoto,
    animationEnabled: true,
    swipeEnabled: true,
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
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
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>
      ),
    }),
  }
);

const CreateAvatarStack = StackNavigator(
  {
    CreateAvatarStack: {
      screen: CreateAvatarTabs,
      navigationOptions,
    },
    // PostImage: {
    //   screen: PostImageScreen,
    //   navigationOptions,
    // },
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


const styles = StyleSheet.create({
  nextBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
  },
});


export default CreateAvatarStack;
