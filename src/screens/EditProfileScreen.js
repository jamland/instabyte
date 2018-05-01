import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../config/Theme';
import * as ProfileActions from '../actions/Profile.actions';

import EditAvatar from '../components/EditProfile/EditAvatar';
import EditProfileForm from '../components/EditProfile/EditProfileForm';

const ScreenPointer = {}
class EditProfileScreen extends Component {
  static navigationOptions = (props) => ({
    title: 'Edit Profile',
    headerBackTitle: 'Back',
    headerRight: (
      <TouchableOpacity
        onPress={() => ScreenPointer.this.updateUser()}
      >
        <Ionicons
          style={styles.checkIcon}
          name="ios-checkmark"
        />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        onPress={() => props.navigation.goBack(null)}
      >
        <Ionicons
          name="ios-close"
          style={styles.backBtn}
        />
      </TouchableOpacity>
    ),
  });

  componentDidMount () {
    ScreenPointer.this = this;
  }

  updateUser = (userUpdates) => {
    this.props.updateUserViaForm(userUpdates);

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Profile' })],
    });
    this.props.navigation.dispatch(resetAction);

    this.props.navigation.navigate('Profile');
  }


  render() {
    return (
      <View style={styles.container}>

        <EditAvatar
          user={this.props.user}
          navigation={this.props.navigation}
          editProfileScreen={true}
        />

        <EditProfileForm />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  checkIcon: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
    marginBottom: 5,
  },
  backBtn: {
    color: colors.textColor,
    marginLeft: 10,
    fontSize: 45,
  },
});


const mapStateToProps = (state) => ({
  user: state.profile.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserViaForm: () => dispatch(ProfileActions.updateUserViaForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
