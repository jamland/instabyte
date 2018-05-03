import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as ProfileActions from '../actions/Profile.actions';

import UserProfile from '../components/Profile/UserProfile';
import UserPostList from '../components/Profile/UserPostList';

class ProfileScreen extends Component {
  static navigationOptions = (props) => {
    if (!props.navigation.state.params) return {
      title: null,
    }

    return {
      title: props.navigation.state.params.username
    }
  };

  constructor(props) {
    super(props);

    const navState = this.props.navigation.state.params;
    if (navState && navState.imageForAvatar) {
      this.props.updateUserAvatar();
    }
  }

  componentWillMount () {
    this.props.navigation.setParams({
      username: this.props.user.username
    });
  }

  render() {
    if (!this.props.user) return null;

    const userPosts = this.props.feed.filter( item => item.authorId === this.props.user.id)

    return (
      <View style={styles.container}>

        <UserProfile
          user={this.props.user}
          navigation={this.props.navigation}
          {...this.props}
        />

        <UserPostList
          userPosts={userPosts}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


const mapStateToProps = (state) => ({
  user: state.profile.currentUser,
  feed: state.feed.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserAvatar: () => dispatch(ProfileActions.updateUserAvatar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
