import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {colors} from '../../config/Theme';

import EditAvatar from '../EditProfile/EditAvatar';
import ImageComponent from '../common/ImageComponent';

export default class UserProfile extends Component {
  editProfileHandler = () => {
    this.props.navigation.navigate('EditProfile');
  }

  render() {
    const { user } = this.props;
    const renderStatistics = ['posts', 'followers', 'following'].map( (item, index) => {
      return (
        <View
          style={styles.column}
          key={index}
        >
          <Text style={styles.number}>
            {user.statistics[item]}
          </Text>
          <Text style={styles.label}>
            {item}
          </Text>
        </View>
      )
    })


    return (
      <View style={styles.container}>

        <View style={styles.row}>

          <View style={styles.avatarView}>
            <EditAvatar
              user={this.props.user}
              navigation={this.props.navigation}
              editProfileScreen={false}
            />
          </View>

          <View style={styles.profileRow}>

            <View style={styles.statistics}>

              {renderStatistics}

            </View>

            <View style={styles.editProfileView}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={this.editProfileHandler}
              >
                <Text style={styles.editBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={styles.row2nd}>
          <Text style={styles.userName}>
            {user.name}
          </Text>
          <Text style={styles.userDetails}>
            {user.details}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightText,
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: 20,
  },
  row2nd: {
    flex: 0,
    marginBottom: 20,
  },
  avatarView: {
    flex: 0,
    marginRight: 20,
  },
  profileRow: {
    flex: 1,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  column: {
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: colors.secondText,
    fontSize: 14,
  },
  editProfileView: {

  },
  editBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.lightText,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  editBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  userDetails: {
    fontSize: 18,
  },
});
