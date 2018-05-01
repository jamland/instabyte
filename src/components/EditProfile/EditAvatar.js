import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActionSheetIOS,
  TouchableOpacity,
} from 'react-native';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import {colors} from '../../config/Theme';
import { Feather } from '@expo/vector-icons';

import ImageComponent from '../common/ImageComponent';

@connectActionSheet
class EditAvatar extends Component {

  editAvatar = () => {
    const options = ['Take a Photo', 'Pick from Gallery', 'Cancel'];
    const cancelButtonIndex = 2;

    console.log('this.props',this.props);
    this.props.showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      if (buttonIndex === 0) {
        this.props.navigation.navigate('AvatarFromCamera');
      } else if (buttonIndex === 1) {
        this.props.navigation.navigate('CreateAvatarStack');
      }
    });
  }

  render() {
    const { user } = this.props;

    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.avatarView}
          onPress={this.editAvatar}
        >

          <ImageComponent
            style={styles.avatar}
            uri={user.avatar}
          />

          {this.props.editProfileScreen &&
            <Text style={styles.changeText}>Change Photo</Text>
          }

          {!this.props.editProfileScreen &&
            <View style={styles.plusIconView}>
              <Feather
                style={styles.plusIcon}
                name="plus"
                size={20}
              />
            </View>
          }

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  avatarView: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.anchor,
  },
  plusIconView: {
    backgroundColor: colors.anchor,
    borderRadius: 20,
    width: 26,
    height: 26,
    position: 'absolute',
    bottom: 5,
    right: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    color: 'white',
  },
});

export default EditAvatar;
