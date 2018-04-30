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
  static navigationOptions = (props) => ({
    title: null,
    headerLeft: (
      <Text>
        User
      </Text>
    ),
  });

  constructor(props) {
    super(props);

    this.props.getUserDetails();
  }


  render() {
    if (!this.props.user) return null;

    const userPosts = this.props.feed.filter( item => item.authorId === this.props.user.id)

    return (
      <View style={styles.container}>

        <UserProfile
          user={this.props.user}
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
  getUserDetails: () => dispatch(ProfileActions.getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
