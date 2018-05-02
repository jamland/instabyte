import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../../config/Theme';

class UserAvatar extends Component {
  render() {
    const {user} = this.props;

    if (!user) return null

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: user.avatar}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    flex: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'stretch',
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: colors.primary,
  },
});

const mapStateToProps = (state) => ({
  user: state.profile.currentUser,
});

export default connect(mapStateToProps)(UserAvatar);
