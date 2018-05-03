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

import TabBarPhoto from './TabBarPhoto';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
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
    tabBarComponent: TabBarPhoto,
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
          onPress={() => navigation.navigate('Home')}
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


const styles = StyleSheet.create({
  nextBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
  },
});


export default CreatePostStack;
